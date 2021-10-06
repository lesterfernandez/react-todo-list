import StyledButton from "./styled/Button.styled.js";

const Button = props => {
  return (
    <StyledButton onClick={props.action}>
      <i className={"fas fa-" + props.btnType} />
    </StyledButton>
  );
};

export default Button;
