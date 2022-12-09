import { useCurrencyContext } from "../../context";

import { StyledBadge } from "./styles";

interface IBadge {
  coust: number;
}

export const Badge = ({ coust }: IBadge) => {
  const { curentCurrency } = useCurrencyContext();
  return (
    <StyledBadge>
      {curentCurrency.value}
      {coust}
    </StyledBadge>
  );
};
