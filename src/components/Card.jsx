/* eslint-disable react/prop-types */
import "../css/App.css";
import sedanIcon from "../assets/images/icon-sedans.svg";
import suvIcon from "../assets/images/icon-suvs.svg";
import luxuryIcon from "../assets/images/icon-luxury.svg";

function Card() {
  return (
    <main>
      <section className="card__container">
        {/* Sedan */}
        <div className="card__sedan">
          <picture>
            <img src={sedanIcon} alt="Sedan icon" />
          </picture>
          <h1 className="card__title">sedans</h1>
          <p className="card__description">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <a className="btn">Learn More</a>
          {/* <button className="button">Learn More</button> */}
        </div>

        {/* Suv */}
        <div className="card__suv">
          <picture>
            <img src={suvIcon} alt="suv icon" />
          </picture>
          <h1 className="card__title">suvs</h1>
          <p className="card__description">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <a className="btn">Learn More</a>
        </div>

        {/* Luxury */}
        <div className="card__luxury">
          <picture>
            <img src={luxuryIcon} alt="luxury icon" />
          </picture>
          <h1 className="card__title">luxury</h1>
          <p className="card__description">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <a className="btn">Learn More</a>
        </div>
      </section>
    </main>
  );
}

export default Card;
