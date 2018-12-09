import React from 'react';
import { RouteProps, RedirectProps } from 'react-router';

interface ProtectedRouteBaseProps {
  isAuthenticated: boolean;
  redirectPath: string;
  isLoading?: boolean;
  loadingComponent?: React.ComponentType<any>;
  redirectProps?: RedirectProps;
}

export interface ProtectedRouteProps extends ProtectedRouteBaseProps, RouteProps {}
declare class ProtectedRoute extends React.Component<ProtectedRouteProps> {}

declare module 'protected-routes' {}
export default ProtectedRoute;

export interface ProtectedRoutesProps extends ProtectedRouteBaseProps {}

export declare class ProtectedRoutes extends React.Component<ProtectedRouteProps> {}
