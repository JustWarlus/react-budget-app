import { StyledBadge } from "./styles";

interface IBadge {
  coust: number;
}

export const Badge = ({ coust }: IBadge) => {
  return <StyledBadge>${coust}</StyledBadge>;
};
