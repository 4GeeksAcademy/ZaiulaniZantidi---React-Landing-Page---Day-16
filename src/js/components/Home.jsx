import React from 'react';
import NavBar from './NavBar';
import Jumbotron from './Jumbotron';
import Card from './Card';




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
