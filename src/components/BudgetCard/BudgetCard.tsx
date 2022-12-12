import { useBudgetContext, useCurrencyContext } from "../../context";
import { useInput, useToggle } from "../../hooks";
import { StyledBudgetCard, Budget, Button, StyledInput } from "./styles";

export const BudgetCard = () => {
  const inputBudget = useInput();
  const [isBudgetActive, toogleIsBudgetActive] = useToggle(true);

  const { curentCurrency } = useCurrencyContext();
  const { budget, setNewBudget } = useBudgetContext();

  const handleSave = () => {
    setNewBudget(+inputBudget.value);
    toogleIsBudgetActive();
  };

  return (
    <StyledBudgetCard>
      {isBudgetActive ? (
        <>
          <StyledInput {...inputBudget} type="number" placeholder="Enter budget" />
          <Button onClick={() => handleSave()}>Save</Button>
        </>
      ) : (
        <>
          <Budget>
            Budget: {curentCurrency.value}
            {budget}
          </Budget>
          <Button onClick={() => toogleIsBudgetActive()}>Edit</Button>
        </>
      )}
    </StyledBudgetCard>
  );
};
