import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./theme";
import { GlobalStyle } from "./StyledComponents";

import "./App.css";

import Header from "./components/Header/Header";
import Report from "./components/Report/Report";
import InputsForm from "./components/InputsForm/InputsForm";

import getTodayDate from "./utils/getTodayDate";

const initialState = {
  timeStart: "",
  timeFinish: "",
  area: "1 ПРИКЗАС",
  unit: "",
  action: "",
  aircraft: "",
  directionUkr: "",
  directionPidarasy: "",
  altitude: "",
  pilots: [],
};

function App() {
  const [reportData, setReportData] = useState(initialState);
  const [date, setDate] = useState(getTodayDate());
  const [targets, setTargets] = useState([]);
  const [jamming, setJamming] = useState(false);

  const setValueToReportData = (fieldName, selectedOption) => {
    console.log(fieldName, selectedOption);
    if (!selectedOption) {
      alert("Вибір null");
      return;
    }

    setReportData((prevReportData) => {
      if (Array.isArray(selectedOption)) {
        const selectedValues = selectedOption.map((option) => option.value);
        return { ...prevReportData, [fieldName]: [...selectedValues] };
      }
      return { ...prevReportData, [fieldName]: selectedOption.value };
    });
  };

  const inputsFormData = {
    setDate,
    date,
    setTargets,
    targets,
    jamming,
    setJamming,
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Header />
      <section id="report">
        <InputsForm
          {...inputsFormData}
          onSetNewData={setValueToReportData}
          reportData={reportData}
        />
        {/* <Report date={date} targets={targets} reportData={reportData} /> */}
      </section>
    </ThemeProvider>
  );
}

export default App;
