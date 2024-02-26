import styles from "./Card.module.css";

function Card({ icon, title, description }) {
  return (
    <div className={`${styles[`card__${title.toLowerCase()}`]}`}>
      <picture>
        <img src={icon} alt={`${title} icon`} />
      </picture>
      <h1 className={styles.card__title}>{title}</h1>
      <p className={styles.card__description}>{description}</p>
      <a className={styles.btn}>Learn More</a>
    </div>
  );
}

export default Card;
