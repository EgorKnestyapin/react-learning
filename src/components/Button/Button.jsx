import "./styles.css";

function Button({ name = "Send", type = "button", children }) {
  return (
    <button type={type} className="button-component">
          {name}
          {children}
    </button>
  );
}

export default Button;
