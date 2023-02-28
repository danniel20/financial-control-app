import { Table, Thead, Tbody, Tr, Th } from "./styles";
import { GridItem } from "../GridItem";
import { Transaction } from "../../App";

type GridProps = {
  itens: Transaction[];
  setItens: React.Dispatch<Transaction[]>;
};

export const Grid = ({ itens, setItens }: GridProps) => {
  const onDelete = (id: number) => {
    const newArray = itens.filter((transaction) => transaction.id !== id);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th width={0.4} alignCenter={"center"}>
            Descrição
          </Th>
          <Th width={4} alignCenter={"center"}>
            Valor
          </Th>
          <Th width={1} alignCenter={"center"}>
            Tipo
          </Th>
          <Th width={1} alignCenter={"center"}></Th>
        </Tr>
      </Thead>
      <Tbody>
        {itens?.map((item: Transaction, index: number) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </Tbody>
    </Table>
  );
};
