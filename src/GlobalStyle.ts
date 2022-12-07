import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    background-color: #1E3542;;
}
`;
const Container = styled.div`
  width: 375px;
  padding: 30px 20px 53px 20px;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.3);
`;

export { GlobalStyle, Container };
