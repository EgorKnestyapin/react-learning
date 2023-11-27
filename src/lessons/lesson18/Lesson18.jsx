import Button from "../../components/Button";
import "./styles.css";
import { useState } from "react";

function Lesson_18() {
  // useState() explanation
  // Первая переменная - значение, а вторая - это функция, которая может менять значение
  const [name, setName] = useState("Robert");
  const [count, setCount] = useState(0);
  const counterHandler = () => {
    // 1 вариант: использовать синтаксис, передавая в state новое значение
    // setCount(count + 1);
    // 2 вариант: передаем туда функцию
    setCount((prevValue) => prevValue + 1);
  };
  const changeName = () => {
    setName("Ekaterina");
  };
  const showSum = (a, b) => console.log(a + b);

  return (
    <div>
      <div className="buttonControl">
        <Button name="Показать сообщение 1" onClick={() => showSum(2, 3)} />
      </div>
      <div className="buttonControl">
        <Button
          name="Показать сообщение 2"
          onClick={() => console.log("hello world 2")}
        />
      </div>
      <div className="buttonControl">
        {name}
        <Button name="Изменить имя" onClick={changeName} />
      </div>
      <div className="buttonControl">
        {count}
        <Button name="Увеличить на один" onClick={counterHandler} />
      </div>
    </div>
  );
}

export default Lesson_18;
