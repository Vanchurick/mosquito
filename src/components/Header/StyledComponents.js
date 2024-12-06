import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LogoContainer = styled.div`
  width: 10rem;
  height: 10rem;
  margin: auto;
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
