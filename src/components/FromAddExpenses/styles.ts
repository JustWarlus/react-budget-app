import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;

const StyledInput = styled.input`
  padding: 15px 20px;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  background: #ffffff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 10px;
  outline: none;

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    color: #999999;
  }
`;

export { Form, StyledInput };
