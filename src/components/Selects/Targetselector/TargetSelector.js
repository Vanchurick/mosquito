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
import TargetsLabels from "../../TargetsLabels/TargetsLabels";
import { AIR_INTELIGENCE_ACTION } from "../../../assets/consts";

function Targetselector({
  onAddNewTarget,
  removeTarget,
  targetsFormData,
  actionType,
}) {
  const [targetForm, setTargetForm] = useState(targetsFormData.targetData);

  const [isValidTarget, setIsValidTarget] = useState(true);

  const setTargetValue = (fieldName, selectedOption) => {
    updateFormState(fieldName, selectedOption, setTargetForm);
  };

  const onAddTarget = () => {
    const {
      amunition,
      countAmunition,
      targetCity,
      targetCoordinates,
      targetDistance,
      targetName,
      targetStatusAir,
      targetStatusDamage,
    } = targetForm;

    for (const field in targetForm) {
      if (!targetForm[field].selected) {
        setIsValidTarget(false);
        return;
      }
    }

    if (actionType === AIR_INTELIGENCE_ACTION) {
      const airTarget = {
        targetName: targetName.selected,
        targetCity: targetCity.selected,
        targetCoordinates: targetCoordinates.selected,
        targetDistance: targetDistance.selected,
        targetStatusAir: targetStatusAir.selected,
      };

      for (const field in airTarget) {
        if (!targetForm[field].selected) {
          setIsValidTarget(false);
          return;
        }
      }

      airTarget.label = actionType;
      airTarget.id = generateUniqId(5);
      onAddNewTarget(airTarget);
      setIsValidTarget(true);
      return;
    }

    const damageTarget = {
      targetName: targetName.selected,
      targetCity: targetCity.selected,
      targetCoordinates: targetCoordinates.selected,
      targetDistance: targetDistance.selected,
      amunition: amunition.selected,
      countAmunition: countAmunition.selected,
      targetStatusDamage: targetStatusDamage.selected,
    };

    for (const field in damageTarget) {
      if (!targetForm[field].selected) {
        setIsValidTarget(false);
        return;
      }
    }

    damageTarget.label = actionType;
    damageTarget.id = generateUniqId(5);
    onAddNewTarget(damageTarget);
    setIsValidTarget(true);
  };

  const makeFormFields = (targetForm) => {
    const {
      amunition,
      countAmunition,
      targetCity,
      targetCoordinates,
      targetDistance,
      targetName,
      targetStatusAir,
      targetStatusDamage,
    } = targetForm;

    if (actionType === AIR_INTELIGENCE_ACTION) {
      return {
        targetName,
        targetCity,
        targetCoordinates,
        targetDistance,
        targetStatusAir,
      };
    }

    return {
      targetName,
      targetCity,
      targetCoordinates,
      targetDistance,
      amunition,
      countAmunition,
      targetStatusDamage,
    };
  };

  const targetFormFields = Object.keys(makeFormFields(targetForm));

  return (
    <>
      <TargetsSelectorContainer $isValid={isValidTarget}>
        <TargetsTitle>{targetsFormData.label}</TargetsTitle>
        <TargetsLabels
          targets={targetsFormData.selected}
          removeTarget={removeTarget}
        />
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
    </>
  );
}

export default Targetselector;
