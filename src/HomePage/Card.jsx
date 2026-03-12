import "./Card.css";

function Card({ iconSource, title, description, buttonText }) {
  return (
    <section className="card-home">
      <div className="card-home-container">
        <div className="icon">
          <img src={iconSource} alt={title} />
        </div>

        <header>{title}</header>

        <p>{description}</p>
      </div>

      {buttonText && <div className="card-home-button">{buttonText}</div>}
    </section>
  );
}

export default Card;
