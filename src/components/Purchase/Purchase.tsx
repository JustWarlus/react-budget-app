import { Badge } from "../Badge";
import { StyledPurchase, InfoPurchase, NamePurchase } from "./styles";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";

interface IPurchase {
  name: string;
  cost: number;
  id: string;
}

export const Purchase = ({ name, cost, id }: IPurchase) => {
  const { deleteExpense } = useExpensesContext();

  return (
    <StyledPurchase>
      <InfoPurchase>
        <NamePurchase>{name}</NamePurchase>
        <Badge coust={cost} />
      </InfoPurchase>
      <CloseIcon onClick={() => deleteExpense(id)} />
    </StyledPurchase>
  );
};
