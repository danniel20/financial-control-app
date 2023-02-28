import React, { useState } from "react";
import { Transaction } from "../../App";
import { Grid } from "../Grid";
import {
  Container,
  InputContent,
  Label,
  Input,
  RadioGroup,
  Button
} from "./styles";

type FormProps = {
  handleAdd: (transaction: Transaction) => void;
  transactionsList: Transaction[];
  setTransactionList: React.Dispatch<Transaction[]>;
};

export const Form = ({
  handleAdd,
  transactionsList,
  setTransactionList
}: FormProps) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("0.0");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSalve = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (parseFloat(amount) < 1.0) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction: Transaction = {
      id: generateID(),
      description: desc,
      amount,
      isExpense
    };

    handleAdd(transaction);
    setDesc("");
    setAmount("");
  };

  return (
    <>
      <Container>
        <InputContent>
          <Label>Descrição</Label>
          <Input
            value={desc}
            placeholder="Ex: Conta de Luz"
            onChange={(e) => setDesc(e.target.value)}
          />
        </InputContent>

        <InputContent>
          <Label>Valor</Label>
          <Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </InputContent>

        <RadioGroup>
          <Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <Label htmlFor="rIncome">Entrada</Label>

          <Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <Label htmlFor="rExpenses">Saída</Label>
        </RadioGroup>

        <Button onClick={handleSalve}>ADICIONAR</Button>
      </Container>

      <Grid itens={transactionsList} setItens={setTransactionList} />
    </>
  );
};
