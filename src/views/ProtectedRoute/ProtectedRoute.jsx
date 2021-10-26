import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isLogged: isLogged, component: Component, ...rest }) => {
    return(
        <Route {...rest} render={(props) => {
            if(isLogged) {
                return <Component />
            } else {
                return <Redirect to={{pathname: '/', state: {from: props.location}}} />
            }
        }} />
    )
}

export default ProtectedRoute;