import StyledButton from "./styled/Button.styled.js";

const Button = props => {
  return (
    <StyledButton onClick={props.action}>
      <i className={props.btnType === "btnDelete" ? "fas fa-ban" : "fas fa-check"} />
    </StyledButton>
  );
};

export default Button;
