import React from "react";
import { Budget, Expenses, FormAddExpenses } from "./components";
import { Container } from "./GlobalStyle";

export const App = () => {
  return (
    <Container>
      <Budget />
      <Expenses />
      <FormAddExpenses />
    </Container>
  );
};
