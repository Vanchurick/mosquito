import styled from "styled-components";

export const InputsContainer = styled.section`
  flex: 1;
`;

export const TabsContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 1rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.title};
`;

export const Tab = styled.li`
  color: ${({ theme, $active }) => $active ? theme.colors.secondary : theme.colors.primary};
  border-bottom: 2px solid
    ${({ theme, $active }) => {
      return $active ? theme.colors.secondary : theme.colors.bgLight;
    }};
  transition: all 1s;
  flex: 1;
  text-align: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;
