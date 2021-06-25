import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../components/logo';

function SignInLayout({ children }) {
  return (
    <div>
      <section className="lg:w-2/4 lg:p-12 lg:p-6 p-20 bg-gray-100 bg-signin-image bg-cover bg-center">
        <Logo />
      </section>
      <section>{children}</section>
    </div>
  );
}

SignInLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default SignInLayout;
