import styled from "styled-components";

const StyledBudgetCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 20px;
  box-sizing: border-box;
  background: #7cc6fe;
  border-radius: 10px;
`;
const Budget = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #000000;
`;

const Button = styled.button`
  padding: 10px 30px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  background: #ffffff;
  border-radius: 10px;
  border: none;
`;

export { StyledBudgetCard, Budget, Button };
