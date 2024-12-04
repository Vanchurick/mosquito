import styled from "styled-components";

export const WhatsAppButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.title};
  text-align: center;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.mobileTitle};
  }
`;
