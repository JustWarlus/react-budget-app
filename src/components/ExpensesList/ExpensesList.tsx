import { IExpense } from "../../context/ExpensesContext/types";
import { Purchase } from "../Purchase";
import { StyledExpensesList } from "./styles";

interface IExpensesList {
  searchExpenses: IExpense[];
}

export const ExpensesList = ({ searchExpenses }: IExpensesList) => {
  return (
    <StyledExpensesList>
      {searchExpenses.map(({ name, cost, id }) => {
        return <Purchase name={name} cost={cost} key={id} id={id} />;
      })}
    </StyledExpensesList>
  );
};
