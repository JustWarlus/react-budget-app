import { Purchase } from "../Purchase";
import { StyledExpensesList } from "./styles";

export const ExpensesList = () => {
  return (
    <StyledExpensesList>
      <Purchase />
      <Purchase />
      <Purchase />
      <Purchase />
    </StyledExpensesList>
  );
};
