import {
  AIR_INTELIGENCE_ACTION,
  DAMAGE_ACTION,
  ADJUSTMENT_ACTION,
} from "../assets/consts";

const createWhatsAppMessage = (reportData) => {
  const {
    data,
    timeStart,
    timeFinish,
    area,
    unit,
    action,
    aircraft,
    directionUkr,
    directionPidarasy,
    pilots,
    altitude,
    jamming,
    targets,
    subUnit,
  } = reportData;

  const eightSpaces = "%20%20%20%20%20%20%20%20";
  const newParagraf = "%0A";

  const results = {
    [AIR_INTELIGENCE_ACTION]: "За результатами аеророзвідки:",
    [DAMAGE_ACTION]: "За результатами заходів:",
    [ADJUSTMENT_ACTION]: "За результатами заходів:",
  };

  const noChanging = {
    [AIR_INTELIGENCE_ACTION]: "Змін в обстановці не виявлено.",
    [DAMAGE_ACTION]: "Цілі не уражено.",
    [ADJUSTMENT_ACTION]: "Цілі не уражено.",
  };

  const isJamming = jamming.selected
    ? "Зафіксовано роботу ворожих засобів РЕБ."
    : "Дію ворожих засобів РЕБ не зафіксовано.";

  const pilotsList = pilots.selected
    ?.map((pilot) => `«${pilot.value}»`)
    .join(", ");

  const targetsList = targets.selected
    .map((target) => {
      if (target.label === AIR_INTELIGENCE_ACTION) {
        return `${newParagraf}${eightSpaces}- *${
          target.targetStatusAir.value
        } ${target.targetName.value}*, за координатами ${
          target.targetCoordinates
        }, ${
          target.targetCity.value
            ? `околиці н.п. ${target.targetCity.value} (рф),`
            : ""
        } ${target.targetDistance.value} метрів до ДКУ.`;
      }
      return `${newParagraf}${eightSpaces}- *${
        target.targetStatusDamage.value
      } ${target.targetName.value}*, за координатами ${
        target.targetCoordinates
      },  ${
        target.targetCity.value
          ? `околиці н.п. ${target.targetCity.value} (рф),`
          : ""
      } ${target.targetDistance.value} метрів до ДКУ. Використано ${
        target.countAmunition.value
      } ${target.amunition.value} _(${target.amunitionAction.value})_.`;
    })
    .join(";");

  const actionOptions = {
    [AIR_INTELIGENCE_ACTION]: "проведено аеророзвідку",
    [DAMAGE_ACTION]: "проведено ураження",
    [ADJUSTMENT_ACTION]: "проведено корегування вогню",
  };

  return `*${subUnit.selected?.value} 105 ПрикЗ*
  ${newParagraf}${eightSpaces}${data.selected}, (${timeStart.selected?.value} -
		  ${timeFinish.selected?.value}) *ГрАР ${unit.selected?.value}*,
		  ${actionOptions[action.selected?.value]}, із використанням
		  ${aircraft.selected?.value} на напр. н.п.
		  ${directionPidarasy.selected?.value} (рф) – н.п.
		  ${directionUkr.selected?.value} (Укр.), ділянка ${
    area.selected?.value
  }. ${newParagraf}${eightSpaces}${
    targets.selected.length
      ? results[action.selected?.value]
      : noChanging[action.selected?.value]
  } ${targetsList}${
    action.selected?.value !== AIR_INTELIGENCE_ACTION
      ? `${newParagraf}${eightSpaces}*Втрати противника:*${newParagraf}${eightSpaces}Уточнюються.`
      : ""
  }${newParagraf}${eightSpaces}${isJamming}
		  ${
        action.selected?.value === AIR_INTELIGENCE_ACTION
          ? `Висота ${altitude.selected?.value} м.`
          : ""
      }${newParagraf}${eightSpaces}Пілоти: ${pilotsList}.`;
};

export default createWhatsAppMessage;
