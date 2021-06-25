import React from 'react';
import PropTypes from 'prop-types';

function SignInLayout({ children }) {
  return (
    <div>
      <section>{children}</section>
    </div>
  );
}

SignInLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default SignInLayout;
