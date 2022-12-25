import { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getAvatarUrl } from '../../store/data-process/selectors';
import { getAuthStatus } from '../../store/user-process/selectors';

function UserBlock() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  const avatarUrl = useAppSelector(getAvatarUrl);

  return (
    <ul className="user-block">
      {authStatus === AuthStatus.Auth &&
        <li className="user-block__item">
          <div className="user-block__avatar" onClick={()=>navigate(AppRoute.MyList)}>
            <img
              src={avatarUrl}
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

export default memo(UserBlock);


