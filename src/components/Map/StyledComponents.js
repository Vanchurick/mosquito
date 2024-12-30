import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

export const Coordinates = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  margin: 0 0.5rem;
`;
