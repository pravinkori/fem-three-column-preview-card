import cardData from "./constants/cardData";
import Card from "./components/Card/Card";
import Credits from "./components/Credits/Credits";
import "./css/App.css";

function App() {
  return (
    <>
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
        <Credits name={"Pravin Kori"} githubUserName={"pravinkori"} />
      </main>
    </>
  );
}

export default App;
