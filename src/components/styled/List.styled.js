import styled from "styled-components";

const List = styled.ul`
  margin-top: 20px;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  min-width: 30%;
  max-width: 80%;
  align-self: flex-start;
  gap: 1rem;
  margin-bottom: 5rem;

  li {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #4447;
    color: white;
    border-radius: 5px;
    align-items: center;
    p {
      flex: 1;
      font-size: 1.4rem;
      padding-inline: 10px;
      text-overflow: hidden;
      overflow: hidden;
    }
    button:first-child {
      margin-left: auto;
    }
  }

  li.complete {
    text-decoration: line-through;
    color: #aaa;
  }

  li.done {
    animation: fall 0.7s ease-out forwards;
  }

  @keyframes fall {
    0% {
    }
    100% {
      opacity: 0;
      transform: translateY(90px) rotate(15deg);
    }
  }
`;

export default List;
