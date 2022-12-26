import moment from 'moment';
import { memo, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmAction } from '../../store/api-actions';
import { getFilms } from '../../store/data-process/selectors';
import { getFilm } from '../../store/film-process/selectors';

function PlayerFilm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const filmId = Number(params.id);
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const films = useAppSelector(getFilms);

  useEffect(()=>{filmId > films.length ? navigate(AppRoute.NotFound) : dispatch(fetchFilmAction(filmId));}, [filmId]);

  const filmData = useAppSelector(getFilm);
  const [isPlaying, setIsPlaying] = useState(true);


  useEffect(() => {
    if (playerRef.current === null) {
      return;
    }

    if (isPlaying) {
      playerRef.current.play();
    }

    if (!isPlaying) {
      playerRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="player">
      <video className="player__video" width="100%" height="100%" poster={filmData.backgroundImage} ref={playerRef} src={filmData.videoLink}/>
      <button type="button" className="player__exit" onClick={()=>{navigate(`/films/${filmId}`);}}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={30} max={100} />
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{moment(0, 'h').minute(filmData.runTime).format(filmData.runTime > 60 ? 'hh:mm:ss' : 'mm:ss')}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={()=>{setIsPlaying(!isPlaying);}}>
            {isPlaying === true ?
              <>
                <svg viewBox="0 0 14 21" width={14} height={21}>
                  <use xlinkHref="#pause" />
                </svg>
                <span>Pause</span>
              </>
              :
              <>
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </>}
          </button>
          <div className="player__name">{filmData.name}</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(PlayerFilm);
