import { Transaction } from "../../App";
import { Td, Tr } from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash
} from "react-icons/fa";

type GridItemProps = {
  item: Transaction;
  onDelete: (id: number) => void;
};

export const GridItem = ({ item, onDelete }: GridItemProps) => {
  return (
    <Tr>
      <Td alignCenter={"start"}>{item.description}</Td>
      <Td alignCenter={"start"}>{item.amount}</Td>
      <Td alignCenter={"center"}>
        {item.isExpense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </Td>
      <Td alignCenter="center">
        <FaTrash onClick={() => onDelete(item.id)} />
      </Td>
    </Tr>
  );
};
