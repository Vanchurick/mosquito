import Button from "../../Button/Button";
import SelectorNew from "../Selector/Selector";
import { useState } from "react";
import updateFormState from "../../../utils/updateFormState";
import generateUniqId from "../../../utils/generateUniqId";
import { TargetsSelectorContainer, WarningMessage } from "./StyledComponents";
import TargetsLabels from "../../TargetsLabels/TargetsLabels";
import { AIR_INTELIGENCE_ACTION } from "../../../assets/consts";
import { TARGET_FORM_DATA } from "../../../assets/formData";

function Targetselector({
  onAddNewTarget,
  removeTarget,
  selectedTargets,
  actionType,
}) {
  const [targetForm, setTargetForm] = useState(TARGET_FORM_DATA);

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
        <TargetsLabels
          targets={selectedTargets}
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
