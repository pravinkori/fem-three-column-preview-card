/* eslint-disable react/prop-types */
import "../css/App.css";
import sedanIcon from "../assets/images/icon-sedans.svg";
import suvIcon from "../assets/images/icon-suvs.svg";
import luxuryIcon from "../assets/images/icon-luxury.svg";

function Card() {
  return (
    <article className="card">
      <section className="sedans">
        <div className="card__content">
          <picture>
            <img src={sedanIcon} alt="Sedan icon" />
          </picture>
          <h1 className="card__title">sedans</h1>
          <div className="card__description">
            <p>
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
          </div>
          <button className="button">Learn More</button>
        </div>
      </section>
      <section className="suvs">
        <div className="card__content">
          <picture>
            <img src={suvIcon} alt="Suv icon" />
          </picture>
          <h1 className="card__title">suvs</h1>
          <div className="card__description">
            <p>
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </p>
          </div>
          <button className="button">Learn More</button>
        </div>
      </section>
      <section className="luxury">
        <div className="card__content">
          <picture>
            <img src={luxuryIcon} alt="luxury icon" />
          </picture>
          <h1 className="card__title">luxury</h1>
          <div className="card__description">
            <p>
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </p>
          </div>
          <button className="button">Learn More</button>
        </div>
      </section>
    </article>
  );
}

export default Card;
