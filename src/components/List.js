import StyledList from "./styled/List.styled";

const List = ({ todos }) => {
  return (
    <StyledList>
      {todos.map(e => (
        <li>{e}</li>
      ))}
    </StyledList>
  );
};

export default List;
