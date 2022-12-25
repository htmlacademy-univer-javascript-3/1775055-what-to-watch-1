import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { film } from '../../types/film';
import PreviewPlayer from '../preview-player/preview-player';

type SmallFilmCardProps = {
  filmData: film
}

function SmallFilmCard({filmData}:SmallFilmCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  let timerId: NodeJS.Timeout;

  const showPreview = () => {
    timerId = setTimeout(()=>{
      setIsPlaying(true);
    }, 1000);
  };

  const stopPreview = () => {
    clearTimeout(timerId);
    setIsPlaying(false);
  };


  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver = {showPreview}
      onMouseOut = {stopPreview}
    >
      <div className="small-film-card__image">
        {isPlaying === false && <img src={filmData.previewImage} alt={filmData.name} width="280" height="175" />}
        <PreviewPlayer filmData={filmData} isPlaying={isPlaying}/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${filmData.id}`}>
          {filmData.name}
        </Link>
      </h3>
    </article>
  );
}

export default memo(SmallFilmCard);

