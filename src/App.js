import StyledApp from "./components/styled/App.styled";
import StyledTitle from "./components/styled/Title.styled";
import Input from "./components/Input";
import { useState } from "react";
import List from "./components/List";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <StyledApp>
      <StyledTitle>Todo List</StyledTitle>
      <Input text={text} setText={setText} todos={todos} setTodos={setTodos} />
      <List todos={todos} />
    </StyledApp>
  );
}

export default App;
