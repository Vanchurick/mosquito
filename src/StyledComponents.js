import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');

  body {
    font-family: "Roboto Condensed", sans-serif;
	font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
	font-size: ${({ theme }) => theme.fontSize.text};
	color: ${({ theme }) => theme.colors.textPrimary};
	background-color: ${({ theme }) => theme.colors.bgLight};
  }
`;
