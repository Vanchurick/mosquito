import styled from "styled-components";

export const WhatsAppButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.title};
  text-align: center;
`;
