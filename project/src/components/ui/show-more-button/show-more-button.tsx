import { useAppDispatch } from '../../../hooks';
import { filmListProcess } from '../../../store/film-list-process/film-list-process';

function ShowMoreButton() {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more" onClick={() => {dispatch(filmListProcess.actions.incNumberFilmsShow());}}>
      <button className="catalog__button" type="button">
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;


