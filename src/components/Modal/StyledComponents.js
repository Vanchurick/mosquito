import styled from "styled-components";

export const Dialog = styled.dialog`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.bgLight};

  &::backdrop {
    background-image: linear-gradient(
      30deg,
      ${({ theme }) => theme.colors.bgLight},
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary},
      ${({ theme }) => theme.colors.bgDark}
    );
    opacity: 0.7;
  }
`;

export const Form = styled.form`
  width: fit-content;
`;
