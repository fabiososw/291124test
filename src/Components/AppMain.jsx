
const MovieImage = ({ src, alt }) => {
  return (
    <div className="col mb-2 text-center px-1">
      <img className="img-fluid" src={src} alt={alt} />
    </div>
  );
};
const AppMain = () => {
  return (
    <div className="container-fluid px-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
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
      <h4>Trending Now</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        <MovieImage src="assets/1.png" alt="movie picture" />
        <MovieImage src="assets/2.png" alt="movie picture" />
        <MovieImage src="assets/3.png" alt="movie picture" />
        <MovieImage src="assets/4.png" alt="movie picture" />
        <MovieImage src="assets/5.png" alt="movie picture" />
        <MovieImage src="assets/6.png" alt="movie picture" />
      </div>
      <h4>Watch it Again</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        <MovieImage src="assets/7.png" alt="movie picture" />
        <MovieImage src="assets/8.png" alt="movie picture" />
        <MovieImage src="assets/9.png" alt="movie picture" />
        <MovieImage src="assets/10.png" alt="movie picture" />
        <MovieImage src="assets/11.png" alt="movie picture" />
        <MovieImage src="assets/12.png" alt="movie picture" />
      </div>
      <h4>New Releases</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        <MovieImage src="assets/13.png" alt="movie picture" />
        <MovieImage src="assets/14.png" alt="movie picture" />
        <MovieImage src="assets/15.png" alt="movie picture" />
        <MovieImage src="assets/16.png" alt="movie picture" />
        <MovieImage src="assets/17.png" alt="movie picture" />
        <MovieImage src="assets/18.png" alt="movie picture" />
      </div>
    </div>
  );
};

export default AppMain;
