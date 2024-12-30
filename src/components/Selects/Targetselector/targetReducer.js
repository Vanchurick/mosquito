import generateUniqId from "../../../utils/generateUniqId";

export const SET_TARGET_VALUE = "SET_TARGET_VALUE";
export const SET_TARGET_INVALID = "SET_TARGET_INVALID";
export const SET_TARGET_VALID = "SET_TARGET_VALID";
export const SET_COORDINATES = "SET_COORDINATES";

export const targetReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_TARGET_VALUE:
      if (!payload.newValue) return state;

      if (payload.newValue.__isNew__) {
        const newOption = {
          value: payload.newValue.value,
          label: payload.newValue.label,
          id: generateUniqId(5),
        };

        return {
          ...state,
          selectors: {
            ...state.selectors,
            [payload.fieldName]: {
              ...state.selectors[payload.fieldName],
              selected: newOption,
              options: [
                ...state.selectors[payload.fieldName].options,
                newOption,
              ],
            },
          },
        };
      }

      return {
        ...state,
        selectors: {
          ...state.selectors,
          [payload.fieldName]: {
            ...state.selectors[payload.fieldName],
            selected: payload.newValue,
          },
        },
      };
    case SET_TARGET_INVALID:
      return { ...state, isValidTarget: false };
    case SET_TARGET_VALID:
      return { ...state, isValidTarget: true };
    case SET_COORDINATES:
      return {
        ...state,
        selectors: {
          ...state.selectors,
          targetCoordinates: {
            ...state.selectors.targetCoordinates,
            selected: payload,
          },
        },
      };
    default:
      return state;
  }
};
