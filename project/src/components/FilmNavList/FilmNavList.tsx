import { useState } from 'react';
import { Link } from 'react-router-dom';

type FilmNavListProps = {
  FilmId: number
}

function FilmNavList({FilmId}:FilmNavListProps) {
  const [active, setActive] = useState<'O' | 'D' | 'R'>('O');
  let Overview = 'film-nav__item';
  let Details = 'film-nav__item';
  let Reviews = 'film-nav__item';

  if(active === 'O') {
    Overview += ' film-nav__item--active';
    // eslint-disable-next-line no-console
    console.log('O: ',Overview);
  } else if(active === 'D') {
    Details += ' film-nav__item--active';
    // eslint-disable-next-line no-console
    console.log('D: ',Details);
  } else if(active === 'R') {
    Reviews += ' film-nav__item--active';
    // eslint-disable-next-line no-console
    console.log('R: ',Reviews);
  }


  return (
    <ul className="film-nav__list">
      <li className={Overview} onClick={() => setActive('O')}>
        <Link to={`/films/${FilmId}`} className="film-nav__link">Overview</Link>
      </li>
      <li className={Details} onClick={() => setActive('D')}>
        <Link to={`/films/${FilmId}/details`} className="film-nav__link">Details</Link>
      </li>
      <li className={Reviews} onClick={() => setActive('R')}>
        <Link to={`/films/${FilmId}/reviews`} className="film-nav__link">Reviews</Link>
      </li>
    </ul>
  );
}

export default FilmNavList;
