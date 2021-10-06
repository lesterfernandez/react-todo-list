import Button from "./Button";
import StyledInput from "./styled/Input.styled";

const Input = ({ todos, setTodos, ...props }) => {
  const resetText = e => {
    e.preventDefault();
    if (props.text === "") return;
    setTodos([...todos, props.text]);
    props.setText("");
    document.querySelector(".input").value = "";
  };

  return (
    <StyledInput>
      <input
        type="text"
        placeholder="Enter text here.."
        onChange={e => {
          props.setText(e.target.value);
        }}
        className="input"
      />
      <Button btnType="plus" action={resetText} type="submit" bg="#2f2" />
    </StyledInput>
  );
};

export default Input;
