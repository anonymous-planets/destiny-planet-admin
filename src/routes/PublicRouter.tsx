import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { loginCheck } from '../utils/LoginUtils';

/**
 * anonymous Router
 * @constructor
 */

interface PublicRouterProps {
  children?: React.ReactElement;
}
export default function PublicRouter(props: PublicRouterProps) {
  const isAuthenticated = loginCheck();
  if (!isAuthenticated) {
    return props.children || <Outlet />;
  } else {
    return <Navigate to="/main" />;
  }
}
