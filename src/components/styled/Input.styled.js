import styled from "styled-components";

const Input = styled.form`
  width: 80%;
  max-width: 700px;
  display: flex;
  justify-content: center;

  input {
    border: 0;
    --webkit-appearance: none;
    --moz-appearance: none;
    appearance: none;
    height: 50px;
  }

  input {
    padding: 10px 15px;
    outline: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    font-size: 1.3rem;
    width: 100%;
  }

  &:focus,
  &:hover {
    outline: 0;
    border: 0;
  }
`;

export default Input;
