import { ResumeItem } from "../ResumeItem";
import { Container } from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from "react-icons/fa";

type ResumeProps = {
  income: number;
  expense: number;
  total: number;
};

export const Resume = ({ income, expense, total }: ResumeProps) => {
  return (
    <Container>
      <ResumeItem
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
      />
      <ResumeItem
        title="Saída"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </Container>
  );
};
