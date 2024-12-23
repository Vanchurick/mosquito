import {
  AREA_LABEL,
  FIRST_OUT_POST,
  SECOND_OUT_POST,
  THIRD_OUT_POST,
  UNITS_LABEL,
  PORV_NOVGOROD,
  PORV_SEMENIVKA,
  ACTION_LABEL,
  AIR_INTELIGENCE_ACTION,
  DAMAGE_ACTION,
  ADJUSTMENT_ACTION,
  AIRCRAFT_LABEL,
  VALKIRIA_AIRCRAFT,
  MAVIC_AIRCRAFT,
  MATRICE_30T_AIRCRAFT,
  MATRICE_300_AIRCRAFT,
  FPV_SKYZONE_AIRCRAFT,
  DARTS_AIRCRAFT,
  DIRECTION_UKR_LABEL,
  GREMYACH,
  MURAVYI,
  KOSTOBOBRIV,
  DIRECTION_RU_LABEL,
  SOPYCHI,
  BILA_BEREZKA,
  AZAROVKA,
  TARGET_NAME_LABEL,
  POSITIONS_TARGET,
  STAFF_TARGET,
  LIGHT_VEHICLE_TARGET,
  HEAVY_VEHICLE_TARGET,
  TARGET_CITY_LABEL,
  TARGET_COORDINATES_LABEL,
  TARGET_DISTANCE_LABEL,
  PILOTS_LABEL,
  PILOT_ROBERT,
  PILOTS_NEBO,
  PILOTS_JMEN,
  TARGET_ALTITUDE_LABEL,
  TIME_START_LABEL,
  TIME_FINISH_LABEL,
  ALTITUDE_100,
  ALTITUDE_500,
  ALTITUDE_1000,
  TARGETS_LABEL,
  JAMMING_LABEL,
  DATA_LABEL,
  TARGET_STATUS_AIR_LABEL,
  TARGET_DETECTED,
  TARGET_INSPECTED,
  TARGET_STATUS_DAMAGE_LABEL,
  TARGET_DAMAGED,
  TARGET_NO_DAMAGED,
  AMUNITION_LABEL,
  AMUNITION_MINE_82,
  AMUNITION_MINE_60,
  AMUNITION_HANDMADE,
  COUNT_AMUNITION,
  COUNT_AMUNITION_1,
  COUNT_AMUNITION_2,
  COUNT_AMUNITION_3,
  SUB_UNITS_LABEL,
  GORV,
  PRIKK1,
  PRIKK2,
  PRIKK3,
  PRIKK4,
  PKSHR,
  AMUNITION_ACTION_LABEL,
  KUMULYATIV,
  ULAMKOVO_FUGAS,
} from "./consts";

import createTimeSelectorOptions from "../utils/createTimeSelectorOptions";

const timeOptions = createTimeSelectorOptions();

export const FORM_DATA = {
  subUnit: {
    label: SUB_UNITS_LABEL,
    selected: null,
    options: [
      {
        id: "GghfH34",
        value: GORV,
        label: GORV,
      },
      {
        id: "J2134n45",
        value: PRIKK1,
        label: PRIKK1,
      },
      {
        id: "Gsdf098jcH34",
        value: PRIKK2,
        label: PRIKK2,
      },
      {
        id: "JkecK45",
        value: PRIKK3,
        label: PRIKK3,
      },
      {
        id: "J3209dk45",
        value: PRIKK4,
        label: PRIKK4,
      },
      {
        id: "Jdsflk45",
        value: PKSHR,
        label: PKSHR,
      },
    ],
  },
  data: {
    label: DATA_LABEL,
    selected: "",
  },
  timeStart: {
    label: TIME_START_LABEL,
    selected: null,
    options: timeOptions,
  },
  timeFinish: {
    label: TIME_FINISH_LABEL,
    selected: null,
    options: timeOptions,
  },
  area: {
    label: AREA_LABEL,
    selected: null,
    options: [
      { id: "A1B23", value: FIRST_OUT_POST, label: FIRST_OUT_POST },
      { id: "C4D56", value: SECOND_OUT_POST, label: SECOND_OUT_POST },
      { id: "E7F89", value: THIRD_OUT_POST, label: THIRD_OUT_POST },
    ],
  },
  unit: {
    label: UNITS_LABEL,
    selected: null,
    options: [
      {
        id: "G1H34",
        value: PORV_NOVGOROD,
        label: PORV_NOVGOROD,
      },
      {
        id: "J2K45",
        value: PORV_SEMENIVKA,
        label: PORV_SEMENIVKA,
      },
    ],
  },
  action: {
    label: ACTION_LABEL,
    selected: null,
    options: [
      {
        id: "L3M67",
        value: AIR_INTELIGENCE_ACTION,
        label: AIR_INTELIGENCE_ACTION,
      },
      {
        id: "N4O78",
        value: DAMAGE_ACTION,
        label: DAMAGE_ACTION,
      },
      {
        id: "P5Q89",
        value: ADJUSTMENT_ACTION,
        label: ADJUSTMENT_ACTION,
      },
    ],
  },
  aircraft: {
    label: AIRCRAFT_LABEL,
    selected: null,
    options: [
      {
        id: "R6S90",
        value: VALKIRIA_AIRCRAFT,
        label: VALKIRIA_AIRCRAFT,
      },
      {
        id: "T7U01",
        value: MAVIC_AIRCRAFT,
        label: MAVIC_AIRCRAFT,
      },
      {
        id: "V8W12",
        value: MATRICE_30T_AIRCRAFT,
        label: MATRICE_30T_AIRCRAFT,
      },
      {
        id: "X9Y23",
        value: MATRICE_300_AIRCRAFT,
        label: MATRICE_300_AIRCRAFT,
      },
      {
        id: "Z0A34",
        value: FPV_SKYZONE_AIRCRAFT,
        label: FPV_SKYZONE_AIRCRAFT,
      },
      {
        id: "B1C45",
        value: DARTS_AIRCRAFT,
        label: DARTS_AIRCRAFT,
      },
    ],
  },
  directionUkr: {
    label: DIRECTION_UKR_LABEL,
    selected: null,
    options: [
      {
        id: "D2E56",
        value: GREMYACH,
        label: GREMYACH,
      },
      {
        id: "F3G67",
        value: MURAVYI,
        label: MURAVYI,
      },
      {
        id: "H4I78",
        value: KOSTOBOBRIV,
        label: KOSTOBOBRIV,
      },
    ],
  },
  directionPidarasy: {
    label: DIRECTION_RU_LABEL,
    selected: null,
    options: [
      {
        id: "J5K89",
        value: SOPYCHI,
        label: SOPYCHI,
      },
      {
        id: "L6M90",
        value: BILA_BEREZKA,
        label: BILA_BEREZKA,
      },
      {
        id: "N7O01",
        value: AZAROVKA,
        label: AZAROVKA,
      },
    ],
  },
  pilots: {
    label: PILOTS_LABEL,
    selected: [],
    options: [
      {
        id: "J4589",
        value: PILOT_ROBERT,
        label: PILOT_ROBERT,
      },
      {
        id: "L8790",
        value: PILOTS_NEBO,
        label: PILOTS_NEBO,
      },
      {
        id: "N4N01",
        value: PILOTS_JMEN,
        label: PILOTS_JMEN,
      },
    ],
  },
  altitude: {
    label: TARGET_ALTITUDE_LABEL,
    selected: null,
    options: [
      {
        id: "J45f9",
        value: ALTITUDE_100,
        label: ALTITUDE_100,
      },
      {
        id: "L8a90",
        value: ALTITUDE_500,
        label: ALTITUDE_500,
      },
      {
        id: "N4u01",
        value: ALTITUDE_1000,
        label: ALTITUDE_1000,
      },
    ],
  },
  jamming: {
    label: JAMMING_LABEL,
    selected: true,
  },
  targets: {
    label: TARGETS_LABEL,
    selected: [],
  },
};

export const TARGET_FORM_DATA = {
  targetName: {
    label: TARGET_NAME_LABEL,
    selected: null,
    options: [
      {
        id: "J5K88",
        value: POSITIONS_TARGET,
        label: POSITIONS_TARGET,
      },
      {
        id: "L6M97",
        value: STAFF_TARGET,
        label: STAFF_TARGET,
      },
      {
        id: "N7O02",
        value: LIGHT_VEHICLE_TARGET,
        label: LIGHT_VEHICLE_TARGET,
      },
      {
        id: "K7O02",
        value: HEAVY_VEHICLE_TARGET,
        label: HEAVY_VEHICLE_TARGET,
      },
    ],
  },
  targetCity: {
    label: TARGET_CITY_LABEL,
    selected: null,
    options: [
      {
        id: "J4K89",
        value: SOPYCHI,
        label: SOPYCHI,
      },
      {
        id: "L8M90",
        value: BILA_BEREZKA,
        label: BILA_BEREZKA,
      },
      {
        id: "N4O01",
        value: AZAROVKA,
        label: AZAROVKA,
      },
    ],
  },
  targetCoordinates: {
    label: TARGET_COORDINATES_LABEL,
    selected: null,
    options: [],
  },
  targetDistance: {
    label: TARGET_DISTANCE_LABEL,
    selected: null,
    options: [
      {
        id: "J45f9",
        value: ALTITUDE_100,
        label: ALTITUDE_100,
      },
      {
        id: "L8a90",
        value: ALTITUDE_500,
        label: ALTITUDE_500,
      },
      {
        id: "N4u01",
        value: ALTITUDE_1000,
        label: ALTITUDE_1000,
      },
    ],
  },
  targetStatusAir: {
    label: TARGET_STATUS_AIR_LABEL,
    selected: null,
    options: [
      {
        id: "J4Ku9",
        value: TARGET_DETECTED,
        label: TARGET_DETECTED,
      },
      {
        id: "L5M90",
        value: TARGET_INSPECTED,
        label: TARGET_INSPECTED,
      },
    ],
  },
  targetStatusDamage: {
    label: TARGET_STATUS_DAMAGE_LABEL,
    selected: null,
    options: [
      {
        id: "N4K89",
        value: TARGET_DAMAGED,
        label: TARGET_DAMAGED,
      },
      {
        id: "A8M90",
        value: TARGET_NO_DAMAGED,
        label: TARGET_NO_DAMAGED,
      },
    ],
  },
  amunition: {
    label: AMUNITION_LABEL,
    selected: null,
    options: [
      {
        id: "J4ja9",
        value: AMUNITION_MINE_82,
        label: AMUNITION_MINE_82,
      },
      {
        id: "L7490",
        value: AMUNITION_MINE_60,
        label: AMUNITION_MINE_60,
      },
      {
        id: "Nkds01",
        value: AMUNITION_HANDMADE,
        label: AMUNITION_HANDMADE,
      },
    ],
  },
  amunitionAction: {
    label: AMUNITION_ACTION_LABEL,
    selected: null,
    options: [
      {
        id: "J4sasdask9",
        value: KUMULYATIV,
        label: KUMULYATIV,
      },
      {
        id: "L8kqerwvf0",
        value: ULAMKOVO_FUGAS,
        label: ULAMKOVO_FUGAS,
      },
    ],
  },
  countAmunition: {
    label: COUNT_AMUNITION,
    selected: null,
    options: [
      {
        id: "J4sk9",
        value: COUNT_AMUNITION_1,
        label: COUNT_AMUNITION_1,
      },
      {
        id: "L8kf0",
        value: COUNT_AMUNITION_2,
        label: COUNT_AMUNITION_2,
      },
      {
        id: "N8dk1",
        value: COUNT_AMUNITION_3,
        label: COUNT_AMUNITION_3,
      },
    ],
  },
};
