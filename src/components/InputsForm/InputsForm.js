import DateSelector from "../Selects/DateSelector/Dateselector";
import SelectorNew from "../Selects/Selector/Selector";

import { DATA_LABEL, TARGETS_LABEL, JAMMING_LABEL } from "../../assets/consts";
import Targetselector from "../Selects/Targetselector/TargetSelector";
import Checkbox from "../Selects/Checkbox/Checkbox";
import { InputsContainer } from "./StyledComponents";

function InputsForm({
  onSetJamming,
  onSetNewTarget,
  onRemoveTarget,
  onSetNewData,
  reportData,
}) {
  const reportFieldsName = Object.keys(reportData);

  const renderSelector = (formField) => {
    let selector = (
      <SelectorNew
        key={formField}
        optionsData={reportData[formField]}
        handler={(selectedOption) => onSetNewData(formField, selectedOption)}
      />
    );

    if (reportData[formField].label === DATA_LABEL) {
      selector = (
        <DateSelector
          key={formField}
          handler={(selectedOption) => onSetNewData(formField, selectedOption)}
          dateFormData={reportData[formField]}
        />
      );
    }

    if (reportData[formField].label === TARGETS_LABEL) {
      selector = (
        <Targetselector
          key={formField}
          targetsFormData={reportData[formField]}
          onAddNewTarget={(newTarget) => onSetNewTarget(formField, newTarget)}
          removeTarget={onRemoveTarget}
		  actionType={reportData.action.selected?.value}
        />
      );
    }

    if (reportData[formField].label === JAMMING_LABEL) {
      selector = (
        <Checkbox
          key={formField}
          data={reportData[formField]}
          handler={(e) => onSetJamming(formField, e.target.checked)}
        />
      );
    }

    return selector;
  };

  return (
    <InputsContainer>
      {reportFieldsName.map((formField) => renderSelector(formField))}
    </InputsContainer>
  );
}

export default InputsForm;
