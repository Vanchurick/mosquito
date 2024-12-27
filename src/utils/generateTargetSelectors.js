import { AIR_INTELIGENCE_ACTION } from "../assets/consts";

export default function generateTargetSelectors({
  idEditTarget,
  selectors,
  selected,
  isEdit,
  actionType,
}) {
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

  return derivedTargetForm;
}
