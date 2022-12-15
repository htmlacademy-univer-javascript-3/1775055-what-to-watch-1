import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getAuthStatus } from '../../store/user-process/selectors';

function UserBlock() {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);

  return (
    <ul className="user-block">
      {authStatus === AuthStatus.Auth &&
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img
              src="img/avatar.jpg"
              alt="User avatar"
              width={63}
              height={63}
            />
          </div>
        </li>}
      <li className="user-block__item">
        {authStatus === AuthStatus.Auth &&
          <Link
            to={AppRoute.Main}
            className="user-block__link"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
          >
            Sign out
          </Link>}
        {authStatus !== AuthStatus.Auth &&
          <Link
            to='/login'
            className="user-block__link"
          >
            Sign in
          </Link>}
      </li>
    </ul>
  );
}

export default UserBlock;


