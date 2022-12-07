import React from "react";
import { StyledInput } from "./styled";

interface IInput {
  placeholder: string;
  type: string;
}

export const Input = ({ placeholder, type }: IInput) => {
  return <StyledInput placeholder={placeholder} type={type} />;
};
