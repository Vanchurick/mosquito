import styled from "styled-components";

export const TargetsSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  border: 2px solid
    ${({ theme, $isValid }) =>
      $isValid ? theme.colors.secondary : theme.colors.accent};
  border-radius: 1rem;
  margin-top: 1rem;
`;

export const WarningMessage = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
`;

export const TargetsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 1rem auto;
`;
