import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Title } from "../Title";
import { Form } from "./styles";

export const FormAddExpenses = () => {
  return (
    <Form>
      <Title nameBlock="Add Expenses" />
      <Input placeholder="enter name ..." type={"text"} />
      <Input placeholder="enter cost ..." type={"number"} />
      <Button />
    </Form>
  );
};
