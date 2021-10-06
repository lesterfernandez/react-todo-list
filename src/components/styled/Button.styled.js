import styled from "styled-components";

const Button = styled.button`
  border: 0;
  --webkit-appearance: none;
  --moz-appearance: none;
  appearance: none;
  height: 50px;

  &:focus,
  &:hover {
    outline: 0;
  }

  border-left: 1px solid gray;
  padding: 10px;
  width: 50px;
  font-size: 25px;
  color: #2f2;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }

  &:nth-last-of-type(1) {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
export default Button;
