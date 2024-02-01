import { Link } from 'react-router-dom';


const ShowCard = ({ show }) => {


  return (
    <div className="col-md-4 mb-4">
    
        <div className="card text-center" style={{ height: '100%' }}>
          {show.image && show.image.original && (
            <img src={show.image.original} className="card-img-top" alt={show.name} />
            
          )}

          <div className="card-body">
            <h2 className="card-title">{show.name}</h2>
            <p className="">{show.language}</p>
            <p className="">{show.genres.join(', ')}</p>

            <Link to={`/show/${show.id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>

    </div>
  );
};

export default ShowCard;
