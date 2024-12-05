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
    subUnit,
  } = reportData;

  const results = {
    [AIR_INTELIGENCE_ACTION]: (
      <Paragraf>За результатами аеророзвідки:</Paragraf>
    ),
    [DAMAGE_ACTION]: <Paragraf>За результатами заходів:</Paragraf>,
    [ADJUSTMENT_ACTION]: (
      <Paragraf>За результатами заходів з корегування вогню:</Paragraf>
    ),
  };

  const noChanging = {
    [AIR_INTELIGENCE_ACTION]: (
      <Paragraf>
        Змін в обстановці <Highlights>не виявлено.</Highlights>
      </Paragraf>
    ),
    [DAMAGE_ACTION]: (
      <Paragraf>
        Цілі <Highlights>не уражено.</Highlights>
      </Paragraf>
    ),
    [ADJUSTMENT_ACTION]: (
      <Paragraf>
        Цілі <Highlights>не уражено.</Highlights>
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
      {targets.selected.map((target) => {
        if (target.label === AIR_INTELIGENCE_ACTION) {
          return (
            <ListItem key={target.id}>
              <Paragraf>
                {target.targetStatusAir.value}&nbsp;
                <Highlights>{target.targetName.value}</Highlights>, за
                координатами&nbsp;
                <Highlights>{target.targetCoordinates.value}</Highlights>,
                околиці н.п.&nbsp;
                <Highlights>{target.targetCity.value}</Highlights>,&nbsp;
                <Highlights>{target.targetDistance.value}</Highlights> метрів до
                ДКУ;
              </Paragraf>
            </ListItem>
          );
        }

        return (
          <ListItem key={target.id}>
            <Paragraf>
              Уражено&nbsp;
              <Highlights>{target.targetName.value}</Highlights>, за
              координатами&nbsp;
              <Highlights>{target.targetCoordinates.value}</Highlights>, околиці
              н.п.&nbsp;
              <Highlights>{target.targetCity.value}</Highlights>, &nbsp;
              <Highlights>{target.targetDistance.value}</Highlights> метрів до
              ДКУ. Ціль&nbsp;
              <Highlights>{target.targetStatusDamage.value}</Highlights>,
              використано&nbsp;
              {target.countAmunition.value}&nbsp;
              <Highlights>{target.amunition.value}</Highlights>.
            </Paragraf>
          </ListItem>
        );
      })}
    </List>
  );

  const actionOptions = {
    [AIR_INTELIGENCE_ACTION]: "аеророзвідки",
    [DAMAGE_ACTION]: "ураження",
    [ADJUSTMENT_ACTION]: "корегування вогню",
  };

  return (
    <ReportContainer>
      <Highlights>{subUnit.selected?.value} 105 ПрикЗ</Highlights>
      <Paragraf>
        <Highlights>
          {data.selected} в період з {timeStart.selected?.value} до{" "}
          {timeFinish.selected?.value}
        </Highlights>
        &nbsp; навпроти ділянки &nbsp;
        <Highlights>105 ПРИКЗ {area.selected?.value}</Highlights>
        &nbsp; складом &nbsp;<Highlights>{unit.selected?.value}</Highlights>
        &nbsp; проведено заходи з{" "}
        <Highlights>{actionOptions[action.selected?.value]}</Highlights>&nbsp;
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
