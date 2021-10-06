import Button from "./Button";
import StyledList from "./styled/List.styled";

const List = ({ todos, ...props }) => {
  const deleteTodo = e => {
    let element = null;
    if (e.target.classList.contains("fas")) {
      element = e.target.parentElement.parentElement;
    } else {
      element = e.target.parentElement;
    }
    element.classList.add("done");
    setTimeout(() => {
      element.remove();
    }, 700);
  };

  const completeTodo = e => {
    let main = null;
    if (e.target.classList.contains("fas")) {
      main = e.target.parentElement.parentElement;
    } else {
      main = e.target.parentElement;
    }
    main.classList.toggle("complete");
  };

  return (
    <StyledList>
      {todos.map(e => (
        <li>
          <p>{e}</p>
          <Button btnType="check" bg="#2f2" action={completeTodo} />
          <Button btnType="ban" action={deleteTodo} bg="red" />
        </li>
      ))}
    </StyledList>
  );
};

export default List;
