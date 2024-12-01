import "./Report.css";

import {
  AIR_INTELIGENCE_ACTION,
  DAMAGE_ACTION,
  ADJUSTMENT_ACTION,
} from "../../assets/consts";

const Report = ({ reportData }) => {
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

  const results = {
    [AIR_INTELIGENCE_ACTION]: <p>За результатами аеророзвідки виявлено:</p>,
    [DAMAGE_ACTION]: <p>За результатами заходів здійснено ураження:</p>,
    [ADJUSTMENT_ACTION]: (
      <p>За результатами заходів з корегування вогню здіснено ураження:</p>
    ),
  };

  const isJamming = jamming.selected
    ? "Зафіксовано роботу ворожих засобів РЕБ"
    : "Дію ворожих засобів РЕБ не зафіксовано<";

  const pilotsList = pilots.selected
    ?.map((pilot) => `${pilot.value}`)
    .join(", ");

  const targetsList = (
    <ul>
      {targets.selected.map((target) => (
        <li key={target.id}>
          <p>
            {target.targetName.value}, за координатами{" "}
            {target.targetCoordinates.value}, околиці н.п.
            {target.targetCity.value}, {target.targetDistance.distance} метрів
            до ДКУ;
          </p>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="report">
      <p>
        <b>
          {timeStart.selected?.value}-{timeFinish.selected?.value}{" "}
          {data.selected}
        </b>
        &nbsp; навпроти ділянки &nbsp;
        <b>105 ПРИКЗ 1 прикк {area.selected?.value}</b>
        &nbsp; складом &nbsp;<b>{unit.selected?.value}</b>&nbsp; проведено{" "}
        <b>{action.selected?.value}</b>&nbsp; за допомогою &nbsp;
        <b>{aircraft.selected?.value}</b>
        &nbsp; на напрямку &nbsp;
        <b>
          н.п. {directionUkr.selected?.value} (Україна) -{" "}
          {directionPidarasy.selected?.value} (рф).
        </b>
        &nbsp;
      </p>
      {results[action.selected?.value]}
      {targetsList}
      <p>
        {isJamming} (висота {altitude.selected?.value} м, БпЛА{" "}
        {aircraft.selected?.value}, пілоти: {pilotsList}).
      </p>
    </div>
  );
};

export default Report;
