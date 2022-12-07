import styled from "styled-components";

const Search = styled.input`
  width: 100%;
  background: #ffffff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 15px 20px;
  box-sizing: border-box;
  border: none;
  margin-top: 30px;
  color: #000000;
  outline: none;
  font-size: 16px;
  font-weight: 400;

  &::placeholder {
    color: #999999;
  }
`;

export { Search };
