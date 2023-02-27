import { IconType } from "react-icons";
import { Container, Header, HeaderTitle, Total } from "./styles";

type ResumeItemProps = {
  title: string;
  Icon: IconType;
  value: string;
};

export const ResumeItem = ({ title, Icon, value }: ResumeItemProps) => {
  return (
    <Container>
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
        <Icon />
      </Header>
      <Total>{value}</Total>
    </Container>
  );
};
