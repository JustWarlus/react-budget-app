import styled from "styled-components";

const StyledPurchase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  box-sizing: border-box;
  border-bottom: 2px solid #ccd5ff;
`;

const InfoPurchase = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  box-sizing: border-box;
`;

const NamePurchase = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: #000000;
`;

export { StyledPurchase, InfoPurchase, NamePurchase };
