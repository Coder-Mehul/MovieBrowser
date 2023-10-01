import { useNavigate , Link } from "react-router-dom";

const Navbar = ({searchText , setSearchText}) => {
const navigate = useNavigate();
const updateSearchText = (e) =>{
  navigate('/search');
  setSearchText(e.target.value);
}

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="GotoSomewhere">
          Movie
        </Link>
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="Gotosomewhere" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="Gotosomewhere">Action</Link></li>
              <li><Link className="dropdown-item" to="Gotosomewhere">Another action</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to="Gotosomewhere">Something else here</Link></li>
            </ul>
          </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="/">
                Coming soon
              </Link>
            </li>
          </ul>
          <form className="d-flex bg-dark" role="search">
            <input
              className="m-1 bg-dark text-white"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
            <button className="btn btn-outline-success" type="submit" >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
