import React from 'react';


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


const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <h1 className="jumbotron-headline">A Warm Welcome!</h1>
      <p className="jumbotron-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <a className="jumbotron-button" href="#" role="button">Call to Action</a>
    </div>
  );
};


const Card = ({ imageSrc, imageAlt, title, text, buttonText, buttonLink }) => {
  return (
    <div className="card-component">
      <img src={imageSrc} alt={imageAlt} className="card-image" />
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <div className="card-button-wrapper">
          <a href={buttonLink} className="card-button">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};


const App = () => {
  return (
    <div className="app-container">

      <NavBar />
      <main className="main-content">
        <Jumbotron />

        <div className="cards-grid">
          <Card
            imageSrc="https://picsum.photos/id/78/400/240"
            imageAlt="Product Image 1"
            title="Old World Architecture"
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. "
            buttonText="Find Out More"
            buttonLink="#"
          />
          <Card
            imageSrc="https://picsum.photos/id/77/400/240"
            imageAlt="Peaceful Fishing Docks"
            title="Peaceful Fishing Docks"
            text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
            buttonText="Find Out More"
            buttonLink="#"
          />
          <Card
            imageSrc="https://picsum.photos/id/76/400/240"
            imageAlt="Product Image 3"
            title="Scenic Bike Excursions"
            text="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
            buttonText="Find Out More"
            buttonLink="#"
          />
          <Card
            imageSrc="https://picsum.photos/id/71/400/240"
            imageAlt="Product Image 4"
            title="Activities by The Water"
            text="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
            buttonText="Find Out More"
            buttonLink="#"
          />
        </div>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2025 Zaiulani Zantidi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
