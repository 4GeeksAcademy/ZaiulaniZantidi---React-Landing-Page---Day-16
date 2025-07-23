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

export default Card