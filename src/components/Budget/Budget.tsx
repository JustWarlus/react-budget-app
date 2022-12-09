import { BudgetCard } from "../BudgetCard";
import { CurrencySelect } from "../CurrencySelect";
import { ExpensesCard } from "../ExpensesCard";
import { RemainingCard } from "../RemainingCard";
import { Title } from "../Title";

import { HeaderBlock, BudgetCardList } from "./styles";

export const Budget = () => {
  return (
    <>
      <HeaderBlock>
        <Title nameBlock="Budget App" />
        <CurrencySelect />
      </HeaderBlock>
      <BudgetCardList>
        <BudgetCard />
        <RemainingCard />
        <ExpensesCard />
      </BudgetCardList>
    </>
  );
};
