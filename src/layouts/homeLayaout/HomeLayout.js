import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { NAV_LINKS } from '../../contants';
import { getActiveNavLink } from '../../helpers';

import Logo from '../../components/logo';
import NavBar from '../../components/navBar';

const HomeLayout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <section>
      <Logo />
      <NavBar links={getActiveNavLink(NAV_LINKS, pathname)} />
      hi
      {children}
    </section>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default HomeLayout;
