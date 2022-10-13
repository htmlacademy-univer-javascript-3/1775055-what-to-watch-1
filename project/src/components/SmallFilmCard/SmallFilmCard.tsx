import { useState } from 'react';
import { Link } from 'react-router-dom';
import { film } from '../../types/film';

type SmallFilmCardProps = {
  filmData: film
}

function SmallFilmCard({filmData}:SmallFilmCardProps) {
  const [filmCardHover, setFilmCardHover] = useState(false);

  // eslint-disable-next-line no-console
  console.log(filmCardHover);
  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver = {()=>{setFilmCardHover(true);}}
      onMouseOut = {()=>{setFilmCardHover(false);}}
    >
      <div className="small-film-card__image">
        <img
          src={filmData.previewImage}
          alt={filmData.name}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${filmData.id}`}>
          {filmData.name}
        </Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;

