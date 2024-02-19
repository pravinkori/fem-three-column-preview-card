import Card from "./components/Card";
import sedanIcon from "./assets/images/icon-sedans.svg";
import suvIcon from "./assets/images/icon-suvs.svg";
import luxuryIcon from "./assets/images/icon-luxury.svg";
import "./css/App.css";

const cardsData = [
  {
    icon: sedanIcon,
    title: "Sedan",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  {
    icon: suvIcon,
    title: "SUV",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
  {
    icon: luxuryIcon,
    title: "Luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
  },
];

function App() {
  return (
    <main>
      <section className="card__container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
