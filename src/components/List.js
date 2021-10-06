import Button from "./Button";
import StyledList from "./styled/List.styled";

const List = ({ todos, ...props }) => {
  const deleteTodo = e => {
    if (e.target.classList.contains("fas")) {
      e.target.parentElement.parentElement.remove();
    } else {
      e.target.parentElement.remove();
    }
  };

  return (
    <StyledList>
      {todos.map(e => (
        <li>
          <p>{e}</p>
          <Button btnType="check" />
          <Button btnType="ban" action={deleteTodo} />
        </li>
      ))}
    </StyledList>
  );
};

export default List;
