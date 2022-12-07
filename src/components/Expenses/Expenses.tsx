import React from "react";
import { ExpensesList } from "../ExpensesList";
import { SearchExpenses } from "../SearchExpenses";
import { Title } from "../Title";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  return (
    <StyledExpenses>
      <Title nameBlock="Expenses" />
      <SearchExpenses />
      <ExpensesList />
    </StyledExpenses>
  );
};
