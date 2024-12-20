
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';  
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bgGradientNav sticky-top"
      data-bs-theme="dark"
      style={{ backgroundColor: '#221f1f' }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="../src\assets\logo.png"
            alt="Netflix Logo"
            style={{ width: '100px', height: '55px' }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to="/" className='nav-link fw-bold'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/tvshows" className='nav-link fw-bold'>Tv Shows</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">
                My List
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons me-3"></i>
            <div id="kids" className="fw-bold me-3">
              KIDS
            </div>
            <i className="bi bi-bell icons me-3"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
