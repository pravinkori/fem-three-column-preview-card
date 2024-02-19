import cardData from "./constants/cardData";
import Card from "./components/Card";
import "./css/App.css";

function App() {
  return (
    <main>
      <section className="card__container">
        {cardData.map((card, index) => (
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
