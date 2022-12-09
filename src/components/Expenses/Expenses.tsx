import { useEffect, useState } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { IExpense } from "../../context/ExpensesContext/types";
import { useDebounce, useInput } from "../../hooks";
import { ExpensesList } from "../ExpensesList";
import { Title } from "../Title";
import { SearchExpenses, EmptyExpenses } from "./styles";

export const Expenses = () => {
  const search = useInput();
  const debouncedValue = useDebounce(search.value, 500);
  const { expenses } = useExpensesContext();
  const [searchExpenses, setSearchExpenses] = useState<IExpense[]>(expenses);

  useEffect(() => {
    setSearchExpenses(
      expenses.filter((expense) =>
        expense.name.toLowerCase().includes(debouncedValue.toLowerCase()),
      ),
    );
  }, [debouncedValue, expenses]);

  return (
    <>
      <Title nameBlock="Expenses" />
      <SearchExpenses {...search} placeholder="search ..." />
      {expenses.length ? (
        <ExpensesList searchExpenses={searchExpenses} />
      ) : (
        <EmptyExpenses>Oooops 🙈</EmptyExpenses>
      )}
    </>
  );
};
