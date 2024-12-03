import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 0.5rem 1.5rem;
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: ${({ theme }) => theme.fontSize.text};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
`;
