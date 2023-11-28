import { useState } from "react";
import Button from "../../components/Button";
import "./styles.css";

function Homework19() {
  const porscheCar = {
    brand: "Porsche",
    model: "911",
    year: 2023,
    color: "Silver",
    price: 120000,
    isAvailable: true,
  };
  const [object, setObject] = useState({});

  const mapPorsche = Object.keys(object).map((el) => {
    return (
      <li key={`object-items-${el}`}>
        {el}: {object[el]}
      </li>
    );
  });

  return (
    <div className="container">
      <ul>{mapPorsche}</ul>
      <div className="buttonControl">
        <Button
          name="Добавить машину марки Porsche"
          onClick={() => setObject(porscheCar)}
        />
      </div>
    </div>
  );
}

export default Homework19;
