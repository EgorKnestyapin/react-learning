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
  console.log(Object.keys(object).length);

  const mapPorsche = Object.keys(object).map((el) => {
    const carContent = () => {
      if (el === "isAvailable") {
        if (object[el]) {
          return "Available";
        }
        return "Unavailable";
      }
      return `${el}: ${object[el]}`;
    };
    return <li key={`object-items-${el}`}>{carContent()}</li>;
  });

  return (
    <div className="container">
      {!!Object.keys(object).length && <ul>{mapPorsche}</ul>}
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
