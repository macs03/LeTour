/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { AuthProvider, useAuth } from './contexts/auth/AuthContext';

import Home from './pages/home';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Profile from './pages/profile';
import HomeLayout from './layouts/homeLayaout';
import LoginLayout from './layouts/loginLayout';

function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <RouteWrapper path="/sign-in" layout={LoginLayout} page={SignIn} />
          <RouteWrapper path="/sign-up" layout={LoginLayout} page={SignUp} />
          <RouteWrapper
            exact
            path="/"
            privateRoute
            layout={HomeLayout}
            page={Home}
          />
          <RouteWrapper
            path="/profile"
            privateRoute
            layout={HomeLayout}
            page={Profile}
          />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

function RouteWrapper({ page: Page, layout: Layout, privateRoute, ...rest }) {
  const { user } = useAuth();

  const RenderComponent = (props) => {
    if (privateRoute && !user) {
      return <Redirect to="/sign-in" />;
    }

    return (
      <Layout {...props}>
        <Page {...props} />
      </Layout>
    );
  };

  return (
    <Route {...rest} render={(props) => <RenderComponent props={props} />} />
  );
}

RouteWrapper.propTypes = {
  page: PropTypes.node.isRequired,
  layout: PropTypes.node.isRequired,
  privateRoute: PropTypes.bool.isRequired
};

export default Router;
