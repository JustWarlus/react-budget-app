import { StyledBudgetCard, Budget, Button } from "./styles";

export const BudgetCard = () => {
  return (
    <StyledBudgetCard>
      <Budget>Budget: $3000</Budget>
      <Button>Edit</Button>
    </StyledBudgetCard>
  );
};
