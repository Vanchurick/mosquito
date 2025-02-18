import { useContext } from "react";

import {
  Highlights,
  ReportContainer,
  Paragraf,
  List,
  ListItem,
  Italic,
} from "./StyledComponents";

import {
  AIR_INTELIGENCE_ACTION,
  DAMAGE_ACTION,
  ADJUSTMENT_ACTION,
} from "../../assets/consts";

import { Context } from "../../store/Context";

const Report = () => {
  const {
    state: {
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
    },
  } = useContext(Context);

  const results = {
    [AIR_INTELIGENCE_ACTION]: (
      <Paragraf>За результатами аеророзвідки:</Paragraf>
    ),
    [DAMAGE_ACTION]: <Paragraf>За результатами заходів:</Paragraf>,
    [ADJUSTMENT_ACTION]: <Paragraf>За результатами заходів:</Paragraf>,
  };

  const noChanging = {
    [AIR_INTELIGENCE_ACTION]: (
      <Paragraf>Змін в обстановці не виявлено.</Paragraf>
    ),
    [DAMAGE_ACTION]: <Paragraf>Цілі не уражено.</Paragraf>,
    [ADJUSTMENT_ACTION]: <Paragraf>Цілі не уражено.</Paragraf>,
  };

  const isJamming = jamming.selected
    ? "Зафіксовано роботу ворожих засобів РЕБ."
    : "Дію ворожих засобів РЕБ не зафіксовано.";

  const pilotsList = pilots.selected
    ?.map((pilot) => `«${pilot.value}»`)
    .join(", ");

  const targetsList = (
    <List>
      {targets.selected.map((target) => {
        if (target.label === AIR_INTELIGENCE_ACTION) {
          return (
            <ListItem key={target.id}>
              <Paragraf>
                <Highlights>
                  {target.targetStatusAir.value}&nbsp;
                  {target.targetName.value}
                </Highlights>
                , за координатами&nbsp;
                {target.targetCoordinates},{" "}
                {target.targetCity.value
                  ? `околиці н.п. ${target.targetCity.value} (рф),`
                  : null}
                {target.targetDistance.value} метрів до ДКУ;
              </Paragraf>
            </ListItem>
          );
        }

        return (
          <ListItem key={target.id}>
            <Paragraf>
              <Highlights>
                {target.targetStatusDamage.value}&nbsp;
                {target.targetName.value}
              </Highlights>
              , за координатами&nbsp;
              {target.targetCoordinates},{" "}
              {target.targetCity.value
                ? `околиці н.п.
                ${target.targetCity.value} (рф),`
                : null}{" "}
              &nbsp;
              {target.targetDistance.value} метрів до ДКУ. Використано&nbsp;
              {target.countAmunition.value}&nbsp;
              {target.amunition.value}{" "}
              <Italic>({target.amunitionAction.value})</Italic>.
            </Paragraf>
          </ListItem>
        );
      })}
    </List>
  );

  const actionOptions = {
    [AIR_INTELIGENCE_ACTION]: "проведено аеророзвідку",
    [DAMAGE_ACTION]: "проведено ураження",
    [ADJUSTMENT_ACTION]: "проведено корегування вогню",
  };

  return (
    <ReportContainer>
      <Highlights>{subUnit.selected?.value} 105 ПрикЗ</Highlights>
      <Paragraf>
        {data.selected}, ({timeStart.selected?.value} -{" "}
        {timeFinish.selected?.value})
        <Highlights> ГрАР {unit.selected?.value} </Highlights>
        {actionOptions[action.selected?.value]}, із використанням{" "}
        {aircraft.selected?.value} на напр. н.п.{" "}
        {directionPidarasy.selected?.value} (рф) – н.п.{" "}
        {directionUkr.selected?.value} (Укр.), ділянка {area.selected?.value}.
      </Paragraf>
      {targets.selected.length
        ? results[action.selected?.value]
        : noChanging[action.selected?.value]}
      {targetsList}
      {action.selected?.value !== AIR_INTELIGENCE_ACTION && (
        <>
          <Paragraf>
            <Highlights>Втрати противника:</Highlights>
          </Paragraf>
          <Paragraf>Уточнюються.</Paragraf>
        </>
      )}
      <Paragraf>
        {isJamming}{" "}
        {action.selected?.value === AIR_INTELIGENCE_ACTION &&
          `Висота ${altitude.selected?.value} м.`}
      </Paragraf>{" "}
      <Paragraf>Пілоти: {pilotsList}.</Paragraf>
    </ReportContainer>
  );
};

export default Report;
