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
} from "./consts";

import createTimeSelectorOptions from "../utils/createTimeSelectorOptions";

const timeOptions = createTimeSelectorOptions();

export const FORM_DATA = {
  timeStart: {
    label: TIME_START_LABEL,
	selected: {},
    options: timeOptions,
  },
  timeFinish: {
    label: TIME_FINISH_LABEL,
	selected: {},
    options: timeOptions,
  },
  area: {
    label: AREA_LABEL,
	selected: {},
    options: [
      { id: "A1B23", value: FIRST_OUT_POST, label: FIRST_OUT_POST },
      { id: "C4D56", value: SECOND_OUT_POST, label: SECOND_OUT_POST },
      { id: "E7F89", value: THIRD_OUT_POST, label: THIRD_OUT_POST },
    ],
  },
  unit: {
    label: UNITS_LABEL,
	selected: {},
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
	selected: {},
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
	selected: {},
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
	selected: {},
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
	selected: {},
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
  targetName: {
    label: TARGET_NAME_LABEL,
	selected: {},
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
      { id: "K7O02", value: HEAVY_VEHICLE_TARGET, label: HEAVY_VEHICLE_TARGET },
    ],
  },
  targetCity: {
    label: TARGET_CITY_LABEL,
	selected: {},
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
	selected: {},
  },
  targetDistance: {
    label: TARGET_DISTANCE_LABEL,
	selected: {},
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
	selected: {},
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
};
