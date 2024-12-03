import styled from "styled-components";

export const Label = styled.label``;

export const InputDate = styled.input`
  padding: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.text};
  font-family: "Roboto Condensed", sans-serif;
  transition: border-color 0.3s;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
