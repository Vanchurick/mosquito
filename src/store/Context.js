import { createContext, useReducer } from "react";
import { STATE } from "../assets/formData";
import { formReducer, stateReducer } from "./reducer";
import {
  SELECT_VALUE,
  SET_JAMMING,
  ADD_TARGET,
  REMOVE_TARGET,
  EDIT_TARGET,
  SET_ID_EDIT_TARGET,
  OPEN_MAP,
  CLOSE_MAP,
} from "./actionsType";

export const Context = createContext();

export default function AppContext({ children }) {
  const [form, dispatchForm] = useReducer(formReducer, { ...STATE });
  const [state, dispatchState] = useReducer(stateReducer, { isMapOpen: false });

  const selectValue = (formField, selectedOption) => {
    dispatchForm({
      type: SELECT_VALUE,
      payload: { formField, selectedOption },
    });
  };

  const setJamming = (jammingValue) => {
    dispatchForm({ type: SET_JAMMING, payload: jammingValue });
  };

  const addTarget = (target) => {
    dispatchForm({ type: ADD_TARGET, payload: target });
  };

  const removeTarget = (id) => {
    dispatchForm({ type: REMOVE_TARGET, payload: id });
  };

  const editTarget = (editedTarget) => {
    dispatchForm({ type: EDIT_TARGET, payload: editedTarget });
  };

  const setIdEditTarget = (id) => {
    dispatchForm({ type: SET_ID_EDIT_TARGET, payload: id });
  };

  const openMap = () => {
    dispatchState({ type: OPEN_MAP });
  };

  const closeMap = () => {
    dispatchState({ type: CLOSE_MAP });
  };

  const appCtx = {
    state: { ...form },
    data: { ...state },
    selectValue,
    setJamming,
    addTarget,
    removeTarget,
    editTarget,
    setIdEditTarget,
    openMap,
    closeMap,
  };

  return <Context.Provider value={appCtx}>{children}</Context.Provider>;
}
