import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
    isLogged,
    component: Component,
    ...rest
}) => {
  return (
      
      <Route { ...rest } 
        component={ (props) => (
            ( isLogged )
                ? ( <Component { ...props }/> )
                : ( <Redirect to="auth/login"/>)
        )}
      />
  )
};

export default PrivateRoute;
