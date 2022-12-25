import {Link} from 'react-router-dom';

function NotFoundPage() {
  return (
    <div style={{textAlign:'center'}}>
      <h1>
        404. Page not found
      </h1>
      <Link to="/">Back to main page</Link>
    </div>
  );
}

export default NotFoundPage;
