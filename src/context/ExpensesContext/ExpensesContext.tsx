import { createContext, useContext, useState } from "react";

import { IExpense, IExpensesContext, IExpensesContextProviderProps } from "./types";

export const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

export const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => ({
    expenses: [],

    addNewExpense: (newExpense: IExpense) => {
      setExpensesContext((expenses) => ({
        ...expenses,
        expenses: [...expenses.expenses, newExpense],
      }));
    },

    deleteExpense: (id) => {
      setExpensesContext((expenses) => ({
        ...expenses,
        expenses: expenses.expenses.filter((expense) => expense.id !== id),
      }));
    },
  }));
  return expensesContext;
};

export const useExpensesContext = () => useContext(ExpensesContext);

export const ExpensesContextProvider = ({ children }: IExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
