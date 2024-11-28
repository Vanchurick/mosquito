import DateSelector from "../Selects/DateSelector/Dateselector";
import TargetsLabels from "../TargetsLabels/TargetsLabels";
import SelectorNew from "../Selects/Selector/SelectorNew";

import "./InputsForm.css";

import { FORM_DATA } from "../../assets/formData";
import Targetselector from "../Selects/Targetselector/TargetSelector";

function InputsForm({
  setDate,
  setTargets,
  targets,
  onSetNewData,
  reportData,
}) {
  const reportFieldsName = Object.keys(reportData);

  return (
    <div className="inputs">
      <div className="credentials">
        <DateSelector handleDate={setDate} />
        {reportFieldsName.map((fieldName) => (
          <SelectorNew
            key={fieldName}
            optionsData={FORM_DATA[fieldName]}
            handler={(selectedOption) =>
              onSetNewData(fieldName, selectedOption)
            }
			value={reportData[fieldName]}
          />
        ))}
      </div>
      <div className="targets">
        <h2>Цілі:</h2>
        {/* <TargetsLabels targets={targets} removeTarget={setTargets} /> */}
        <Targetselector handleTargets={setTargets} />
      </div>
    </div>
  );
}

export default InputsForm;
