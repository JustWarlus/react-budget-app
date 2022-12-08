import { BudgetCard } from "../BudgetCard";
import { CurrencySelect } from "../CurrencySelect";
import { ExpensesCard } from "../ExpensesCard";
import { RemainingCard } from "../RemainingCard";
import { Title } from "../Title";

import { HeaderBlock, BudgetCardList } from "./styles";

const options: any = [
  { value: 10, label: "USD" },
  { value: 15, label: "EUR" },
  { value: 20, label: "TRY" },
];

export const Budget = () => {
  return (
    <>
      <HeaderBlock>
        <Title nameBlock="Budget App" />
        <CurrencySelect options={options} value={options[0]} />
      </HeaderBlock>
      <BudgetCardList>
        <BudgetCard />
        <RemainingCard />
        <ExpensesCard />
      </BudgetCardList>
    </>
  );
};
