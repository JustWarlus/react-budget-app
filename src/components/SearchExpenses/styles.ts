import styled from "styled-components";

const Search = styled.input`
  width: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  background: #ffffff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 10px;
  outline: none;

  &::placeholder {
    color: #999999;
  }
`;

export { Search };
