import styled from "styled-components";
import { StyledBudgetCard } from "../BudgetCard/styles";

interface IProps {
  isPositive: boolean;
}

const StyledRemainingCard = styled(StyledBudgetCard)<IProps>`
  padding: 38px 20px;
  box-sizing: border-box;
  height: 100px;
  background: ${({ isPositive }) => (isPositive ? "#ccd5ff" : "#ba5536")};
  border-radius: 10px;
`;
const Remaining = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: #000000;
`;

export { StyledRemainingCard, Remaining };
