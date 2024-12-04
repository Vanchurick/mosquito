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
  } = reportData;

  const eightSpaces = "%20%20%20%20%20%20%20%20";
  const newParagraf = "%0A";

  const results = {
    [AIR_INTELIGENCE_ACTION]: "За результатами аеророзвідки виявлено:",
    [DAMAGE_ACTION]: "За результатами заходів здійснено ураження:",
    [ADJUSTMENT_ACTION]:
      "За результатами заходів з корегування вогню здіснено ураження:",
  };

  const noChanging = {
    [AIR_INTELIGENCE_ACTION]: "Змін в обстановці *не виявлено*.",
    [DAMAGE_ACTION]: "Цілі *не уражено*.",
    [ADJUSTMENT_ACTION]: "Цілі *не уражено*.",
  };

  const isJamming = jamming.selected
    ? "*Зафіксовано* роботу ворожих засобів РЕБ"
    : "Дію ворожих засобів РЕБ *не зафіксовано*";

  const pilotsList = pilots.selected
    ?.map((pilot) => `${pilot.value}`)
    .join(", ");

  const targetsList = targets.selected.map(
    (target) =>
      `${newParagraf}${eightSpaces} - *${target.targetName.value}*, за координатами *${target.targetCoordinates.value}*, околиці н.п. *${target.targetCity.value}*, *${target.targetDistance.value}* метрів до ДКУ;`
  );

  return `*ГОРВ 105 ПрикЗ*
  ${newParagraf}${eightSpaces}*${timeStart.selected?.value}* - *${
    timeFinish.selected?.value
  }* *${data.selected}* навпроти ділянки *105 ПРИКЗ 1 прикк ${
    area.selected?.value
  }* складом *${unit.selected?.value}* проведено *${
    action.selected?.value
  }* за допомогою БпЛА *${aircraft.selected?.value}* на напрямку *н.п. ${
    directionUkr.selected?.value
  } (Україна) - ${
    directionPidarasy.selected?.value
  } (рф).* ${newParagraf}${eightSpaces}${
    targets.selected.length
      ? results[action.selected?.value]
      : noChanging[action.selected?.value]
  } ${targetsList}${newParagraf}${eightSpaces}${isJamming} (висота *${
    altitude.selected?.value
  }* м, БпЛА *${aircraft.selected?.value}*, пілоти: *${pilotsList}*).
      `;
};

export default createWhatsAppMessage;