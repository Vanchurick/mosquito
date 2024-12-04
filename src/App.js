import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./theme";
import { GlobalStyle, FlexContainer } from "./StyledComponents";
import updateFormState from "./utils/updateFormState";

import Header from "./components/Header/Header";
import Report from "./components/Report/Report";
import InputsForm from "./components/InputsForm/InputsForm";

import { FORM_DATA } from "./assets/formData";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  const [reportData, setReportData] = useState(FORM_DATA);

  const setValueToReportData = (fieldName, selectedOption) => {
    updateFormState(fieldName, selectedOption, setReportData);
  };

  const addNewTarget = (fieldName, newTarget) => {
    setReportData((prevDataForm) => {
      const updatedDataForm = {
        ...prevDataForm,
        [fieldName]: {
          ...prevDataForm[fieldName],
          selected: [...prevDataForm[fieldName].selected, newTarget],
        },
      };

      return updatedDataForm;
    });
  };

  const setIsJamming = (fieldName, value) => {
    setReportData((prevReportData) => {
      return {
        ...prevReportData,
        [fieldName]: { ...prevReportData[fieldName], selected: value },
      };
    });
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Header />
      <FlexContainer>
        <InputsForm
          onSetNewData={setValueToReportData}
          onSetNewTarget={addNewTarget}
          onSetJamming={setIsJamming}
          reportData={reportData}
        />
        <div style={{ flex: 1 }}>
          <Report reportData={reportData} />
          <WhatsAppButton reportData={reportData} />
        </div>
      </FlexContainer>
    </ThemeProvider>
  );
}

export default App;
