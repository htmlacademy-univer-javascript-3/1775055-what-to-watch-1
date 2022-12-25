import {AppRoute, AuthStatus} from '../../const';
import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  authStatus : AuthStatus;
  children : JSX.Element;
}

function PrivateRoute(props : PrivateRouteProps) {
  const {authStatus, children} = props;
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn}/>
  );
}

export default PrivateRoute;
