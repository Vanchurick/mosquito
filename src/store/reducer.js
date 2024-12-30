import {
  ADD_TARGET,
  SELECT_VALUE,
  SET_JAMMING,
  REMOVE_TARGET,
  EDIT_TARGET,
  SET_ID_EDIT_TARGET,
  OPEN_MAP,
  CLOSE_MAP,
} from "./actionsType";
import generateUniqId from "../utils/generateUniqId";

export function formReducer(state, { type, payload }) {
  const { formField, selectedOption } = payload;

  switch (type) {
    case SELECT_VALUE:
      if (!selectedOption) return state;
      if (Array.isArray(selectedOption)) {
        const updatedOptions = [...state[formField].options];

        const updatedSelectedOptions = selectedOption.map((option) => {
          if (option.__isNew__) {
            const updatedNewOption = {
              value: option.value,
              label: option.label,
              id: generateUniqId(5),
            };

            updatedOptions.push(updatedNewOption);

            return updatedNewOption;
          }

          return option;
        });

        return {
          ...state,
          [formField]: {
            ...state[formField],
            selected: [...updatedSelectedOptions],
            options: [...updatedOptions],
          },
        };
      }

      if (selectedOption.__isNew__) {
        const newOption = {
          value: selectedOption.value,
          label: selectedOption.label,
          id: generateUniqId(5),
        };

        return {
          ...state,
          [formField]: {
            ...state[formField],
            selected: newOption,
            options: [...state[formField].options, newOption],
          },
        };
      }

      return {
        ...state,
        [formField]: { ...state[formField], selected: selectedOption },
      };
    case SET_JAMMING:
      return { ...state, jamming: { ...state.jamming, selected: payload } };
    case ADD_TARGET:
      return {
        ...state,
        targets: {
          ...state.targets,
          selected: [...state.targets.selected, payload],
        },
      };
    case REMOVE_TARGET:
      return {
        ...state,
        targets: {
          ...state.targets,
          selected: state.targets.selected.filter(
            (target) => target.id !== payload
          ),
        },
      };
    case EDIT_TARGET:
      return {
        ...state,
        targets: {
          ...state.targets,
          selected: [
            ...state.targets.selected.map((target) => {
              if (target.id === state.targets.idEditTarget) {
                return { ...target, ...payload };
              }
              return target;
            }),
          ],
          idEditTarget: "",
        },
      };
    case SET_ID_EDIT_TARGET:
      return { ...state, targets: { ...state.targets, idEditTarget: payload } };
    default:
      return state;
  }
}

export function stateReducer(state, { type, payload }) {
  switch (type) {
    case OPEN_MAP:
      return { ...state, isMapOpen: true };
    case CLOSE_MAP:
      return { ...state, isMapOpen: false };
    default:
      return state;
  }
}
