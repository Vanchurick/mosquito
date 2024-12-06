import DateSelector from "../Selects/DateSelector/Dateselector";
import SelectorNew from "../Selects/Selector/Selector";

import { DATA_LABEL, TARGETS_LABEL, JAMMING_LABEL } from "../../assets/consts";
import Targetselector from "../Selects/Targetselector/TargetSelector";
import Checkbox from "../Selects/Checkbox/Checkbox";
import { InputsContainer, TabsContainer, Tab } from "./StyledComponents";
import { useState } from "react";

function InputsForm({
  onSetJamming,
  onSetNewTarget,
  onRemoveTarget,
  onSetNewData,
  reportData,
}) {
  const [tab, setTab] = useState("1");

  const reportFieldsName = Object.keys(reportData);

  const renderSelector = (formField) => {
    if (reportData[formField].label === TARGETS_LABEL) {
      if (tab === "1") return null;
      return (
        <Targetselector
          key={formField}
          targetsFormData={reportData[formField]}
          onAddNewTarget={(newTarget) => onSetNewTarget(formField, newTarget)}
          removeTarget={onRemoveTarget}
          actionType={reportData.action.selected?.value}
        />
      );
    }

    if (tab === "2") return null;

    if (reportData[formField].label === DATA_LABEL) {
      return (
        <DateSelector
          key={formField}
          handler={(selectedOption) => onSetNewData(formField, selectedOption)}
          dateFormData={reportData[formField]}
        />
      );
    }

    if (reportData[formField].label === JAMMING_LABEL) {
      return (
        <Checkbox
          key={formField}
          data={reportData[formField]}
          handler={(e) => onSetJamming(formField, e.target.checked)}
        />
      );
    }

    return (
      <SelectorNew
        key={formField}
        optionsData={reportData[formField]}
        handler={(selectedOption) => onSetNewData(formField, selectedOption)}
      />
    );
  };

  return (
    <InputsContainer>
      <TabsContainer>
        <Tab $active={tab === '1'} onClick={() => setTab("1")}>
          Фабула
        </Tab>
        <Tab $active={tab === '2'} onClick={() => setTab("2")}>
          Цілі
        </Tab>
      </TabsContainer>
      {reportFieldsName.map((formField) => renderSelector(formField))}
    </InputsContainer>
  );
}

export default InputsForm;
