import { ThemeProvider } from "styled-components";
import { mainTheme } from "./theme";
import { GlobalStyle, FlexContainer } from "./StyledComponents";
import AppContext from "./store/Context";

import Header from "./components/Header/Header";
import Report from "./components/Report/Report";
import InputsForm from "./components/InputsForm/InputsForm";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <AppContext>
        <Header />
        <FlexContainer>
          <InputsForm />
          <div style={{ flex: 1 }}>
            <Report />
            <WhatsAppButton />
          </div>
        </FlexContainer>
      </AppContext>
    </ThemeProvider>
  );
}

export default App;
