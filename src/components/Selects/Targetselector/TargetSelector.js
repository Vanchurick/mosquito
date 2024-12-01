import "./TargetSelector.css";
import Button from "../../Button/Button";
import SelectorNew from "../Selector/Selector";
import { useState } from "react";
import updateFormState from "../../../utils/updateFormState";
import generateUniqId from "../../../utils/generateUniqId";

function Targetselector({ onAddNewTarget, targetsFormData }) {
  const [targetForm, setTargetForm] = useState(targetsFormData.targetData);

  const [isValidTarget, setIsValidTarget] = useState(true);

  const setTargetValue = (fieldName, selectedOption) => {
    updateFormState(fieldName, selectedOption, setTargetForm);
  };

  const onAddTarget = () => {
    const newTarget = {};
    for (const field in targetForm) {
      if (!targetForm[field].selected) {
        setIsValidTarget(false);
        return;
      }
      newTarget[field] = targetForm[field].selected;
    }
    newTarget.id = generateUniqId(5);

    onAddNewTarget(newTarget);
  };

  const targetFormFields = Object.keys(targetForm);

  return (
    <>
      {!isValidTarget && <p className="warning">Заповніть усі поля</p>}
      <div className="target-selector">
        <h2>{targetsFormData.label}</h2>
        {targetFormFields.map((fieldName) => (
          <SelectorNew
            key={fieldName}
            handler={(newValue) => setTargetValue(fieldName, newValue)}
            optionsData={targetForm[fieldName]}
          />
        ))}
      </div>
      <Button onClick={onAddTarget}>Додати</Button>
    </>
  );
}

export default Targetselector;
