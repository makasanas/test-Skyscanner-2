import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getUserToken } from '../../helpers/authUser';

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const token = getUserToken();
      if (token) {
        return <Component {...props} />;
      }
      return (
        <Redirect to={{
          pathname: '/customers/login',
          state: {
            from: props.location,
          },
        }}
        />
      );
    }}
  />
);


ProtectedRoute.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

ProtectedRoute.defaultProps = {
  location: {
    pathname: '/',
  },
};
