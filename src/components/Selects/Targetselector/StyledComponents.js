import styled from "styled-components";

export const TargetsSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-radius: 1rem;
  margin-top: 1rem;
`;

export const WarningMessage = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
  margin: 0 auto;
`;
