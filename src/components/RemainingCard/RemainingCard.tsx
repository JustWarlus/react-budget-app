import { useBudgetContext, useCurrencyContext } from "../../context";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { StyledRemainingCard, Remaining } from "./styles";

export const RemainingCard = () => {
  const { curentCurrency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const remainingValue = budget - expenses.reduce((total, { cost }) => total + cost, 0);

  return (
    <StyledRemainingCard isPositive={remainingValue >= 0}>
      <Remaining>
        {remainingValue >= 0
          ? `Remaining: ${curentCurrency.value}${remainingValue}`
          : `Overspending by ${curentCurrency.value}${remainingValue * -1}`}
      </Remaining>
    </StyledRemainingCard>
  );
};
