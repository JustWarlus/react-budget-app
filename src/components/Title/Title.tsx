import React from "react";
import { StyledTitle } from "./styles";

interface ITitle {
  nameBlock: string;
}

export const Title = ({ nameBlock }: ITitle) => {
  return <StyledTitle>{nameBlock}</StyledTitle>;
};
