import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  width: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 75rem) {
    width: 20%;

    p {
      font-size: 1.2rem;
    }

    span {
      font-size: 2rem;
    }

    svg {
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  width: 100%;
  margin: 2rem auto;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 2rem;
`;

export const Total = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;
