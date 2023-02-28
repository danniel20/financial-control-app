import styled from "styled-components";

export const Tr = styled.tr``;

type TdProps = {
  alignCenter: string;
};

export const Td = styled.td<TdProps>`
  padding-top: 1.5rem;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;

  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
