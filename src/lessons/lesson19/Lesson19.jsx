import Button from "../../components/Button";
import "./styles.css";

import { useState } from "react";

function Lesson19() {
  // Пример стейта с массивом данных
  const [items, setItems] = useState(["apple"]);
  // Пример стейта с объектами
  const [persons, setPersons] = useState({ name: "Kate", age: 28 });
  // Пример стейта с image
  const [image, setImg] = useState();

  const addFruites = (newFruitesArray) => {
    setItems((prevValue) => [...prevValue, ...newFruitesArray]);
  };

  const newItems = items.map((el) => {
    return <div>{el}</div>;
  });

  const newPersons = Object.keys(persons).map((personKey) => {
    return (
      <li>
        {personKey}: {persons[personKey]}
      </li>
    );
  });

  const addPersonHairColor = (colorHair) => {
    setPersons((prevValue) => ({ ...prevValue, colorHair }));
  };

  // Создаем функцию, которая принимает как аргумент url картинки
  const addImg = (imgURL) => {
    setImg(imgURL);
  };

  return (
    <div className="lesson19-wrapper">
      <div className="itemsControl">{newItems}</div>
      <div className="buttonControl">
        <Button
          name="Add fruits"
          onClick={() => addFruites(["cherry", "orange"])}
        />
      </div>
      <div className="itemsControl">
        Person properties:
        <ul>{newPersons}</ul>
      </div>
      <div className="buttonControl">
        <Button
          name="Add hair color"
          onClick={() => addPersonHairColor("Black")}
        />
      </div>
      {image && <img src={image} alt="img" />}
      <div className="buttonControl">
        <Button
          name="Change image"
          onClick={() =>
            addImg(
              "https://www.azcentral.com/gcdn/-mm-/fd5c5b5393c72a785789f0cd5bd20acedd2d2804/c=0-350-2659-1850/local/-/media/Phoenix/BillGoodykoontz/2014/04/24//1398388295000-Homer-Simpson.jpg?width=2659&height=1500&fit=crop&format=pjpg&auto=webp"
            )
          }
        />
      </div>
    </div>
  );
}

export default Lesson19;
