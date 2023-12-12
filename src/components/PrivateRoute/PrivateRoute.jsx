import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthenticated } from 'redux/auth/auth.selector';

const PrivateRoute = ({ children, navigateTo = '/login' }) => {
  const authenticated = useSelector(selectAuthenticated);
  return authenticated ? children : <Navigate to={navigateTo} replace />;
};

export default PrivateRoute;
