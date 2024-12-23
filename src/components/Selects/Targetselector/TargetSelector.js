import Button from "../../Button/Button";
import SelectorNew from "../Selector/Selector";
import { useState } from "react";
import updateFormState from "../../../utils/updateFormState";
import generateUniqId from "../../../utils/generateUniqId";
import { TargetsSelectorContainer, WarningMessage } from "./StyledComponents";

function Targetselector({
  onAddNewTarget,
  actionType,
  derivedTargetForm,
  isEdit,
  onEditTarget,
}) {
  const [targetForm, setTargetForm] = useState(derivedTargetForm);
  const [isValidTarget, setIsValidTarget] = useState(true);

  const setTargetValue = (fieldName, selectedOption) => {
    updateFormState(fieldName, selectedOption, setTargetForm);
  };

  const onAddTarget = () => {
    const newTarget = {};

    for (const key in targetForm) {
      if (!targetForm[key].selected) {
        setIsValidTarget(false);
        return;
      }
      newTarget[key] = targetForm[key].selected;
    }

    newTarget.id = generateUniqId(5);
    newTarget.label = actionType;
    onAddNewTarget(newTarget);
    setIsValidTarget(true);
  };

  const onEdit = () => {
    const newTarget = {};

    for (const key in targetForm) {
      if (!targetForm[key].selected) {
        setIsValidTarget(false);
        return;
      }
      newTarget[key] = targetForm[key].selected;
    }
    onEditTarget(newTarget);
    setIsValidTarget(true);
  };

  const targetFormFields = Object.keys(targetForm);

  return (
    <TargetsSelectorContainer $isValid={isValidTarget}>
      {!isValidTarget && <WarningMessage>Заповніть усі поля</WarningMessage>}
      {targetFormFields.map((fieldName) => {
        return (
          <SelectorNew
            key={fieldName}
            handler={(newValue) => setTargetValue(fieldName, newValue)}
            optionsData={targetForm[fieldName]}
          />
        );
      })}
      <Button onClick={isEdit ? onEdit : onAddTarget}>
        {isEdit ? "Змінити" : "Додати"}
      </Button>
    </TargetsSelectorContainer>
  );
}

export default Targetselector;
