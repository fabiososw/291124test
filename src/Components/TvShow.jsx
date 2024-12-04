import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const MovieImage = ({ src, alt }) => {
  return (
    <div className="col mb-2 text-center px-1">
      <div className="movie-container">
        <img className="img-fluid" src={src} alt={alt} />
      </div>
    </div>
  );
};

const TvShows = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = () => {
    fetch(`https://www.omdbapi.com/?apikey=955a96fa&s=movie&type=movie`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore nella risposta dell\'API');
        }
        return response.json();
      })
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setError('Nessun film trovato');
        }
      })
      .catch((err) => {
        setError('Errore nel recupero dei dati');
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;


  const randomMovies = movies.sort(() => Math.random() - 0.5).slice(0, 6);
  const randomMovies2 = movies.sort(() => Math.random() - 0.5).slice(0, 6);
  const randomMovies3 = movies.sort(() => Math.random() - 0.5).slice(0, 6);

  return (
    <div className="container-fluid px-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4 text-white">TV Shows</h2>
          <div className="btn-group" role="group">
            <div className="dropdown ms-4 mt-1">
              <button
                type="button"
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: '#221f1f' }}
              >
                Genres
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Comedy</a></li>
                <li><a className="dropdown-item" href="#">Drama</a></li>
                <li><a className="dropdown-item" href="#">Thriller</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <i className="bi bi-grid icons"></i>
          <i className="bi bi-grid-3x3 icons"></i>
        </div>
      </div>

      

      <h4 className='text-white'>Trending now</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {randomMovies.length > 0 ? (
          randomMovies.map((movie) => (
            <MovieImage key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
      <h4 className='text-white'>Consigliati per te</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {randomMovies2.length > 0 ? (
          randomMovies.map((movie) => (
            <MovieImage key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>

      <h4 className='text-white'>Film premiati</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {randomMovies3.length > 0 ? (
          randomMovies2.map((movie) => (
            <MovieImage key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default TvShows;
