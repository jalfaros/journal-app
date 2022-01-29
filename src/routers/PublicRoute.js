import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
    isLogged,
    component: Component,
    ...rest
}) => {
  return (
      
      <Route { ...rest } 
        component={ (props) => (
            ( isLogged )
                ?   ( <Redirect to="/" />)
                :   ( <Component { ...props }/> )
        )}
      />
  )
};

export default PublicRoute;
