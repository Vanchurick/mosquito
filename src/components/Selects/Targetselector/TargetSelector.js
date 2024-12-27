import { useState, useContext } from "react";

import { Context } from "../../../store/Context";

import { TargetsSelectorContainer, WarningMessage } from "./StyledComponents";

import Button from "../../Button/Button";
import SelectorNew from "../Selector/Selector";

import generateUniqId from "../../../utils/generateUniqId";

import { AIR_INTELIGENCE_ACTION } from "../../../assets/consts";

function Targetselector({ isEdit, closeEditModal }) {
  const {
    state: {
      targets: { selectors, idEditTarget, selected },
      action,
    },
    selectTargetValue,
    addTarget,
    editTarget,
  } = useContext(Context);

  const actionType = action.selected?.value;

  let derivedTargetForm = {};

  if (isEdit) {
    const targetForEdit = selected.find((target) => target.id === idEditTarget);

    for (const key in targetForEdit) {
      if (key !== "id" && key !== "label") {
        derivedTargetForm[key] = {
          label: selectors[key].label,
          options: selectors[key].options,
          selected: targetForEdit[key],
        };
      }
    }
  } else {
    if (actionType === AIR_INTELIGENCE_ACTION) {
      const {
        targetName,
        targetCity,
        targetCoordinates,
        targetDistance,
        targetStatusAir,
      } = selectors;

      derivedTargetForm = {
        targetName,
        targetCity,
        targetCoordinates,
        targetDistance,
        targetStatusAir,
      };
    } else {
      const {
        targetName,
        targetCity,
        targetCoordinates,
        targetDistance,
        amunition,
        amunitionAction,
        countAmunition,
        targetStatusDamage,
      } = selectors;

      derivedTargetForm = {
        targetName,
        targetCity,
        targetCoordinates,
        targetDistance,
        amunition,
        amunitionAction,
        countAmunition,
        targetStatusDamage,
      };
    }
  }

  const [isValidTarget, setIsValidTarget] = useState(true);

  const onAddTarget = () => {
    const newTarget = {};

    for (const key in derivedTargetForm) {
      if (!selectors[key].selected) {
        setIsValidTarget(false);
        return;
      }
      newTarget[key] = selectors[key].selected;
    }

    newTarget.id = generateUniqId(5);
    newTarget.label = actionType;
    addTarget(newTarget);
    setIsValidTarget(true);
  };

  const onEdit = () => {
    const newTarget = {};

    for (const key in derivedTargetForm) {
      if (!selectors[key].selected) {
        setIsValidTarget(false);
        return;
      }
      newTarget[key] = selectors[key].selected;
    }

    editTarget(newTarget);
    setIsValidTarget(true);
    closeEditModal();
  };

  const targetFormFields = Object.keys(derivedTargetForm);

  return (
    <TargetsSelectorContainer $isValid={isValidTarget}>
      {!isValidTarget && <WarningMessage>Заповніть усі поля</WarningMessage>}
      {targetFormFields.map((fieldName) => {
        return (
          <SelectorNew
            key={fieldName}
            handler={(newValue) => selectTargetValue(fieldName, newValue)}
            optionsData={selectors[fieldName]}
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
