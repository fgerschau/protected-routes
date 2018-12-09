import * as React from 'react';
import { Redirect, Route } from 'react-router';
import { ProtectedRouteProps } from '../index';
import { LocationDescriptor } from 'history';

class ProtectedRoute extends React.Component<ProtectedRouteProps> {
  render() {
    const {
      isAuthenticated,
      isLoading,
      redirectPath,
      redirectProps,
      render,
      loadingComponent: LoadingComponent,
      component: Component,
      ...rest
    } = this.props;

    return (
      <Route
        {...rest}
        render={
          (props) => {
            if (!Component && !render) {
              throw Error('You have to specify at least one of the following props: component, render');
            }

            const componentNode: React.ReactNode = render ? render(props) : <Component {...props} />;

            if (isLoading && LoadingComponent) {
              return <LoadingComponent {...props} />
            }

            if (isAuthenticated) {
              return componentNode;
            }

            let redirectToObject: LocationDescriptor = {
              pathname: redirectPath,
            };

            if (redirectProps && redirectProps.to) {
              if (typeof redirectProps.to === 'string') {
                redirectToObject.pathname = redirectProps.to;
              } else if (typeof redirectProps.to === 'object') {
                redirectToObject = redirectProps.to;
              }
            } 

            return (<Redirect
              {...redirectProps}
              to={redirectPath}
            />);
          }
        }
      />
    );
  }
}

export default ProtectedRoute;
