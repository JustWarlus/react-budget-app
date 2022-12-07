import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  background: #ffffff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 15px 20px;
  box-sizing: border-box;
  border: none;
  color: #000000;
  outline: none;
  font-size: 16px;
  font-weight: 400;

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    color: #999999;
  }
`;

export { StyledInput };
