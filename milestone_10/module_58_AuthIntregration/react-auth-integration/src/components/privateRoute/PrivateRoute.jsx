import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({component,children, ...rest }) => {
  const { user } = useAuth();
  console.log(component);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.accessToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
