import styled from "styled-components";

const StyledBudgetCard = styled.div`
  background: #7cc6fe;
  border-radius: 10px;
  min-height: 100px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;
const Budget = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: #000000;
`;

const Button = styled.button`
  padding: 10px 30px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
  border: none;
`;

export { StyledBudgetCard, Budget, Button };
