import Button from "../../Button/Button";
import SelectorNew from "../Selector/Selector";
import { useState } from "react";
import updateFormState from "../../../utils/updateFormState";
import generateUniqId from "../../../utils/generateUniqId";
import {
  TargetsSelectorContainer,
  WarningMessage,
  TargetsTitle,
} from "./StyledComponents";

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
    setIsValidTarget(true);
  };

  const targetFormFields = Object.keys(targetForm);

  return (
    <TargetsSelectorContainer $isValid={isValidTarget}>
      <TargetsTitle>{targetsFormData.label}</TargetsTitle>
      {!isValidTarget && <WarningMessage>Заповніть усі поля</WarningMessage>}
      {targetFormFields.map((fieldName) => (
        <SelectorNew
          key={fieldName}
          handler={(newValue) => setTargetValue(fieldName, newValue)}
          optionsData={targetForm[fieldName]}
        />
      ))}
      <Button onClick={onAddTarget}>Додати</Button>
    </TargetsSelectorContainer>
  );
}

export default Targetselector;
