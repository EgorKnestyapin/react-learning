import "./styles.css";

function Counter({ count, onMinus, onPlus }) {
  return (
    <div className="counter-container">
      <button type="button" onClick={onMinus} className="minus-plus-button">
        -
      </button>
      <div className="count">{count}</div>
      <button type="button" onClick={onPlus} className="minus-plus-button">
        +
      </button>
    </div>
  );
}

export default Counter;
