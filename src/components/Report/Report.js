import "./Report.css";

import {
  AIR_INTELIGENCE_ACTION,
  DAMAGE_ACTION,
  ADJUSTMENT_ACTION,
} from "../../assets/consts";

const Report = ({
  timeStart,
  timeFinish,
  date,
  outpost,
  unit,
  action,
  aircraft,
  ukrCity,
  rusCity,
  targets,
}) => {
  const results = {
    [AIR_INTELIGENCE_ACTION]: <p>За результатами аеророзвідки виявлено:</p>,
    [DAMAGE_ACTION]: <p>За результатами заходів здійснено ураження:</p>,
    [ADJUSTMENT_ACTION]: (
      <p>За результатами заходів з корегування вогню здіснено ураження:</p>
    ),
  };

  return (
    <div className="report">
      <p>
        <b>
          {timeStart}-{timeFinish} {date}
        </b>
        &nbsp; навпроти ділянки &nbsp;<b>105 ПРИКЗ 1 прикк {outpost}</b>
        &nbsp; складом &nbsp;<b>{unit}</b>&nbsp; проведено <b>{action}</b>&nbsp;
        за допомогою &nbsp;<b>{aircraft}</b>&nbsp; на напрямку &nbsp;
        <b>
          н.п. {ukrCity} (Україна) - {rusCity} (рф).
        </b>
        &nbsp;
      </p>
      {results[action]}
      <ul>
        {targets.map(({ id, name, city, coordinates, distance }) => (
          <li key={id}>
            {name}, за координатами {coordinates}, околиці н.п.
            {city}, {distance} метрів до ДКУ;
          </li>
        ))}
      </ul>
      <p>
        Зафіксовано роботу ворожих засобів РЕБ (висота 500 м, БПЛА "Валькірія",
        пілоти, Жмен, Роберт).
      </p>
    </div>
  );
};

export default Report;
