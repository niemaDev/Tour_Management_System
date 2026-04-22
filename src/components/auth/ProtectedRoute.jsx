import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const userRole = localStorage.getItem('userRole');

  // If the role in storage matches one of the allowed roles, show the page
  if (allowedRoles.includes(userRole)) {
    return <Outlet />;
  }

  // Otherwise, send them back to login
  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;