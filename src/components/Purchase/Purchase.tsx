import { Badge } from "../Badge";
import { StyledPurchase, InfoPurchase, NamePurchase } from "./styles";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

export const Purchase = () => {
  return (
    <StyledPurchase>
      <InfoPurchase>
        <NamePurchase>shoping</NamePurchase>
        <Badge coust={500} />
      </InfoPurchase>
      <CloseIcon />
    </StyledPurchase>
  );
};
