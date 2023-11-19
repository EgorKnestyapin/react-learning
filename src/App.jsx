import "./App.css";
import Button from "./components/Button/";

export const animal = "Dog";

function App() {
  const name = <p>My name is Gleb</p>;
  const job = "Frontend developer";
  const tagJobId = "job";
  const sum = (a, b) => a + b;
  const characters = {
    hair: "black",
    height: "185",
  };
  const numberOfFriends = (count) => {
    if (count > 5) {
      return `У вас ${count} друзей`;
    } else {
      return `У вас менее 5 друзей`;
    }
  };
  const rich = true;

  return (
    <div className="App" id={tagJobId}>
      {name}
      {/* JSX позволяет нам передавать переменные с помощью фигурных скобок в HTML дерево */}
      <p>I am {job}</p>
      <p>Возвращаемая сумма: {sum(1, 3)}</p>
      <p>Характеристики:</p>
      <ul>
        <li>Цвет волос: {characters.hair}</li>
        <li>Рост: {characters.height}</li>
      </ul>
      <p>Favorite animal: {animal}</p>
      <div>{numberOfFriends(7)}</div>
      <div>{rich ? "Вы богатый" : "Вы не в достатке"}</div>
      <div className="button-container">
        <Button name="Отправить" type="submit" />
      </div>
      <div className="button-container">
        <Button />
      </div>
      <div className="button-container">
        <Button><p>Children</p></Button>
      </div>
      <div className="button-container">
        <Button />
      </div>
    </div>
  );
}

export default App;
