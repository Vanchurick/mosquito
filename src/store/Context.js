import { createContext, useReducer } from "react";
import { STATE } from "../assets/formData";
import appReducer from "./reducer";
import {
  SELECT_VALUE,
  SET_JAMMING,
  ADD_TARGET,
  SELECT_TARGET_VALUE,
  REMOVE_TARGET,
  EDIT_TARGET,
  SET_ID_EDIT_TARGET,
} from "./actionsType";

export const Context = createContext({
  ...STATE,
  selectValue: () => {},
  setJamming: () => {},
  addTarget: () => {},
  selectTargetValue: () => {},
  removeTarget: () => {},
  editTarget: () => {},
  setIdEditTarget: () => {},
});

export default function AppContext({ children }) {
  const [state, dispatch] = useReducer(appReducer, { ...STATE });

  const selectValue = (formField, selectedOption) => {
    dispatch({ type: SELECT_VALUE, payload: { formField, selectedOption } });
  };

  const selectTargetValue = (formField, selectedOption) => {
    dispatch({
      type: SELECT_TARGET_VALUE,
      payload: { formField, selectedOption },
    });
  };

  const setJamming = (jammingValue) => {
    dispatch({ type: SET_JAMMING, payload: jammingValue });
  };

  const addTarget = (target) => {
    dispatch({ type: ADD_TARGET, payload: target });
  };

  const removeTarget = (id) => {
    dispatch({ type: REMOVE_TARGET, payload: id });
  };

  const editTarget = (editedTarget) => {
    dispatch({ type: EDIT_TARGET, payload: editedTarget });
  };

  const setIdEditTarget = (id) => {
    dispatch({ type: SET_ID_EDIT_TARGET, payload: id });
  };

  const appCtx = {
    state: { ...state },
    selectValue,
    setJamming,
    selectTargetValue,
    addTarget,
    removeTarget,
    editTarget,
    setIdEditTarget,
  };

  return <Context.Provider value={appCtx}>{children}</Context.Provider>;
}
