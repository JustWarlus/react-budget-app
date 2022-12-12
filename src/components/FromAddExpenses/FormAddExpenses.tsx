import { useForm, SubmitHandler } from "react-hook-form";
import { v4 } from "uuid";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { IExpense } from "../../context/ExpensesContext/types";

import { Button } from "../Button";
import { Title } from "../Title";
import { Form, StyledInput } from "./styles";

export const FormAddExpenses = () => {
  const { addNewExpense } = useExpensesContext();
  const { register, handleSubmit, reset } = useForm<IExpense>();

  const onSubmit: SubmitHandler<IExpense> = ({ name, cost }) => {
    addNewExpense({ name, cost, id: v4() });
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title nameBlock="Add Expenses" />
      <StyledInput
        placeholder="enter name ..."
        type="text"
        {...register("name", { required: true })}
      />
      <StyledInput
        placeholder="enter cost ..."
        type="number"
        {...register("cost", { required: true })}
      />
      <Button />
    </Form>
  );
};
