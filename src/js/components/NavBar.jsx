const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <svg className="toggler-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <div className="box">
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li><a className="nav-link" href="#">Home</a></li>
            <li><a className="nav-link" href="#">About</a></li>
            <li><a className="nav-link" href="#">Services</a></li>
            <li><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
		  </div>
      
    </nav>
  );
};

export default NavBar