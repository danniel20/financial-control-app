import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Resume } from "./components/Resume";
import { GlobalStyles } from "./styles/GlobalStyles";

export type Transaction = {
  id: number;
  description: string;
  amount: string;
  isExpense: boolean;
};

function App() {
  const data = localStorage.getItem("transactions");
  const [transactionList, setTransactionList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState("0.0");
  const [expense, setExpense] = useState("0.0");
  const [total, setTotal] = useState("0.0");

  useEffect(() => {
    const amountExpense = transactionList
      .filter((item: Transaction) => item.isExpense)
      .map((transaction: Transaction) => Number(transaction.amount));

    const amountIncome = transactionList
      .filter((item: Transaction) => !item.isExpense)
      .map((transaction: Transaction) => Number(transaction.amount));

    const expense = amountExpense
      .reduce((acc: number, cur: number) => acc + cur, 0)
      .toFixed(2);
    const income = amountIncome
      .reduce((acc: number, cur: number) => acc + cur, 0)
      .toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionList]);

  const handleAdd = (transaction: Transaction) => {
    const newArrayTransactions: Transaction[] = [
      ...transactionList,
      transaction
    ];
    setTransactionList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionList}
        setTransactionList={setTransactionList}
      />
      <GlobalStyles />
    </>
  );
}

export default App;
