import {
  Highlights,
  ReportContainer,
  Paragraf,
  List,
  ListItem,
} from "./StyledComponents";

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
    [AIR_INTELIGENCE_ACTION]: (
      <Paragraf>За результатами аеророзвідки виявлено:</Paragraf>
    ),
    [DAMAGE_ACTION]: (
      <Paragraf>За результатами заходів здійснено ураження:</Paragraf>
    ),
    [ADJUSTMENT_ACTION]: (
      <Paragraf>
        За результатами заходів з корегування вогню здіснено ураження:
      </Paragraf>
    ),
  };

  const isJamming = jamming.selected ? (
    <>
      <Highlights>Зафіксовано</Highlights> роботу ворожих засобів РЕБ
    </>
  ) : (
    <>
      Дію ворожих засобів РЕБ <Highlights>не зафіксовано</Highlights>
    </>
  );

  const pilotsList = pilots.selected
    ?.map((pilot) => `${pilot.value}`)
    .join(", ");

  const targetsList = (
    <List>
      {targets.selected.map((target) => (
        <ListItem key={target.id}>
          <Paragraf>
            <Highlights>{target.targetName.value}</Highlights>, за координатами{" "}
            <Highlights>{target.targetCoordinates.value}</Highlights>, околиці
            н.п.
            <Highlights>{target.targetCity.value}</Highlights>,{" "}
            <Highlights>{target.targetDistance.value}</Highlights> метрів до
            ДКУ;
          </Paragraf>
        </ListItem>
      ))}
    </List>
  );

  const noChanging = {
    [AIR_INTELIGENCE_ACTION]: (
      <Paragraf>
        Змін в обстановці <Highlights>не виявлено.</Highlights>
      </Paragraf>
    ),
    [DAMAGE_ACTION]: (
      <Paragraf>
        Цілі <Highlights>не уражено</Highlights>
      </Paragraf>
    ),
    [ADJUSTMENT_ACTION]: (
      <Paragraf>
        Цілі <Highlights>не уражено</Highlights>
      </Paragraf>
    ),
  };

  return (
    <ReportContainer>
      <Highlights>ГОРВ 105 ПрикЗ</Highlights>
      <Paragraf>
        <Highlights>
          {timeStart.selected?.value}-{timeFinish.selected?.value}{" "}
          {data.selected}
        </Highlights>
        &nbsp; навпроти ділянки &nbsp;
        <Highlights>105 ПРИКЗ 1 прикк {area.selected?.value}</Highlights>
        &nbsp; складом &nbsp;<Highlights>{unit.selected?.value}</Highlights>
        &nbsp; проведено <Highlights>{action.selected?.value}</Highlights>&nbsp;
        за допомогою БпЛА&nbsp;
        <Highlights>{aircraft.selected?.value}</Highlights>
        &nbsp; на напрямку &nbsp;
        <Highlights>
          н.п. {directionUkr.selected?.value} (Україна) -{" "}
          {directionPidarasy.selected?.value} (рф).
        </Highlights>
        &nbsp;
      </Paragraf>
      {targets.selected.length
        ? results[action.selected?.value]
        : noChanging[action.selected?.value]}
      {targetsList}
      <Paragraf>
        {isJamming} (висота <Highlights>{altitude.selected?.value}</Highlights>
        м, БпЛА <Highlights>{aircraft.selected?.value}</Highlights>,
        пілоти:&nbsp;
        <Highlights>{pilotsList}</Highlights>).
      </Paragraf>
    </ReportContainer>
  );
};

export default Report;
