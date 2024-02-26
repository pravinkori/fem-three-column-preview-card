function Card({ icon, title, description }) {
  return (
    <div className={`card__${title.toLowerCase()}`}>
      <picture>
        <img src={icon} alt={`${title} icon`} />
      </picture>
      <h1 className="card__title">{title}</h1>
      <p className="card__description">{description}</p>
      <a className="btn">Learn More</a>
    </div>
  );
}

export default Card;
