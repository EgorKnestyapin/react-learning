import "./styles.css";

function Button({ name = "Send", type = "button", children, onClick }) {
  return (
    <button type={type} className="button-component" onClick={onClick}>
      {name}
      {children}
    </button>
  );
}

export default Button;
