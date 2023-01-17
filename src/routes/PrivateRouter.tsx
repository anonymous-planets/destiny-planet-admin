import { Navigate, Outlet } from 'react-router-dom';
import React from 'react';
import { loginCheck } from '../utils/LoginUtils';

/**
 * 인증여부 확인 Router
 * @constructor
 */
interface PrivateRouterProps {
  children?: React.ReactElement;
}

export default function PrivateRouter(props: PrivateRouterProps) {
  const isAuthenticated = loginCheck();
  if (isAuthenticated) {
    return props.children || <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}
