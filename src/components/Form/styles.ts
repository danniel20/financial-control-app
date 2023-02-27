import styled from "styled-components";

export const Container = styled.div`
  max-width: 112rem;
  margin: 2rem auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0 0 0.5rem #ccc;
  border-radius: 0.5rem;
  padding: 1.5rem 0;

  display: flex;
  justify-content: space-around;
  gap: 1rem;

  @media (max-width: 75rem) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 15px;
  border: 0.1rem solid #ccc;

  ::placeholder {
    opacity: 0.5;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 2rem;
    margin-right: 0.5rem;
    accent-color: black;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
  background-color: teal;

  &:hover {
    background-color: #008690;
  }
`;
