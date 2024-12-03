import styled from "styled-components";

export const SelectorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;
