import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: block;
  padding: 0.5rem 1.5rem;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.bgLight : theme.colors.secondary};
  border-radius: 20px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: ${({ theme }) => theme.fontSize.text};

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.bgLight : theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
`;
