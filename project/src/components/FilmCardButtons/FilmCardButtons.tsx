import { Link, useNavigate } from 'react-router-dom';
import { getAuthStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getMyList } from '../../store/film-list-process/selectors';
import { useEffect, useState } from 'react';
import { fetchMyListAction, switchFilmStatusAction } from '../../store/api-actions';

type FilmCardButtonsProps = {
  filmId: number
}

function FilmCardButtons({filmId}:FilmCardButtonsProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const authStatus = useAppSelector(getAuthStatus);
  const myList = useAppSelector(getMyList);

  const src = window.location.href;

  const film = myList.find((filmData)=>filmData.id === filmId);

  const [inMyList, setInMyList] = useState<boolean>(true);

  useEffect(() => {
    typeof film === 'undefined' ? setInMyList(false) : setInMyList(true);
    dispatch(fetchMyListAction());
  },[filmId]);

  const addFilmMyList = () => {
    dispatch(switchFilmStatusAction([filmId, 1]));
    dispatch(fetchMyListAction());
    setInMyList(true);
  };
  const deleteFilmMyList = () => {
    dispatch(switchFilmStatusAction([filmId, 0]));
    dispatch(fetchMyListAction());
    setInMyList(false);
  };

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button" onClick={()=> navigate(`/player/${filmId}`)}>
        <svg viewBox="0 0 19 19" width={19} height={19}>
          <use xlinkHref="#play-s" />
        </svg>
        <span>Play</span>
      </button>
      <button
        className="btn btn--list film-card__button"
        type="button"
        onClick={()=>{
          if(authStatus === AuthStatus.Auth) {
            inMyList ? deleteFilmMyList() : addFilmMyList();
          } else {navigate(AppRoute.SignIn);}
        }}
      >
        {inMyList ?
          <svg viewBox="0 0 19 20" width={19} height={20}>
            <use xlinkHref="#in-list" />
          </svg>
          :
          <svg viewBox="0 0 19 20" width={19} height={20}>
            <use xlinkHref="#add" />
          </svg>}
        <span>My list</span>
        <span className="film-card__count">{authStatus === AuthStatus.Auth ? myList.length : 0}</span>
      </button>
      {src !== 'http://localhost:3000/' && authStatus === AuthStatus.Auth && <Link to={`/films/${filmId}/review`} className="btn film-card__button">Add review</Link>}
    </div>
  );
}

export default FilmCardButtons;
