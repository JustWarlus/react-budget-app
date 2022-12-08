import { ExpensesList } from "../ExpensesList";
import { SearchExpenses } from "../SearchExpenses";
import { Title } from "../Title";

export const Expenses = () => {
  return (
    <>
      <Title nameBlock="Expenses" />
      <SearchExpenses />
      <ExpensesList />
    </>
  );
};
