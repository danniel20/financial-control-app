import React, { useState } from "react";
import {
  Container,
  InputContent,
  Label,
  Input,
  RadioGroup,
  Button
} from "./styles";

export const Form = () => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0.0);
  const [isExpense, setExpense] = useState(false);

  const handleSalve = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1.0) {
      alert("O valor tem que ser positivo!");
      return;
    }
  };

  return (
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
          onChange={(e) => setAmount(parseFloat(e.target.value))}
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
  );
};
