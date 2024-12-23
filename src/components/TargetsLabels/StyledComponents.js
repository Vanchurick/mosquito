import styled from "styled-components";

export const TargetsLabelList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

export const TargetsItem = styled.li`
  margin: 0.2rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
`;
