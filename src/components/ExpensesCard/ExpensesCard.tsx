import { useCurrencyContext } from "../../context";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { StyledExpensesCard, Expenses } from "./styles";

export const ExpensesCard = () => {
  const { curentCurrency } = useCurrencyContext();
  const { expenses } = useExpensesContext();
  const sumExpenses = expenses.reduce((total, { cost }) => total + +cost, 0);
  return (
    <StyledExpensesCard>
      <Expenses>
        Spent so far: {curentCurrency.value}
        {sumExpenses}
      </Expenses>
    </StyledExpensesCard>
  );
};
