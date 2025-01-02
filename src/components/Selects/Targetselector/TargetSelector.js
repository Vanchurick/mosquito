import { useContext, useRef, useReducer } from "react";

import { Context } from "../../../store/Context";

import { TargetsSelectorContainer, WarningMessage } from "./StyledComponents";

import Button from "../../Button/Button";
import SelectorNew from "../Selector/Selector";
import Modal from "../../Modal/Modal";
import Map from "../../Map/Map";
import OpenModalMap from "../../OpenModalMap/OpenModalMap";

import generateUniqId from "../../../utils/generateUniqId";

import {
  targetReducer,
  SET_TARGET_VALUE,
  SET_TARGET_INVALID,
  SET_TARGET_VALID,
  SET_COORDINATES,
} from "./targetReducer";

import { TARGET_COORDINATES_LABEL } from "../../../assets/consts";

function Targetselector({ isEdit, closeEditModal, targetSelectors }) {
  const {
    state: { action },
    data: { isMapOpen },
    addTarget,
    editTarget,
    openMap,
    closeMap,
  } = useContext(Context);

  const actionType = action.selected?.value;

  const [targetFormState, targetDispatch] = useReducer(targetReducer, {
    isValidTarget: true,
    selectors: { ...targetSelectors },
  });

  const setValue = (fieldName, newValue) => {
    targetDispatch({
      type: SET_TARGET_VALUE,
      payload: { fieldName, newValue },
    });
  };

  const setCoordinates = (newCoordinates) => {
    targetDispatch({
      type: SET_COORDINATES,
      payload: newCoordinates,
    });
  };

  const setIsInvalid = () => {
    targetDispatch({
      type: SET_TARGET_INVALID,
    });
  };

  const setIsValid = () => {
    targetDispatch({
      type: SET_TARGET_VALID,
    });
  };

  const modalMap = useRef();

  const openModalMap = () => {
    openMap();
    modalMap.current.openModal();
  };

  const closeModalMap = () => {
    closeMap();
    modalMap.current.closeModal();
  };

  const onAddTarget = () => {
    const newTarget = {};

    for (const key in targetFormState.selectors) {
      if (!targetFormState.selectors[key].selected) {
        setIsInvalid();
        return;
      }
      newTarget[key] = targetFormState.selectors[key].selected;
    }

    newTarget.id = generateUniqId(5);
    newTarget.label = actionType;
    addTarget(newTarget);
    setIsValid();
  };

  const onEdit = () => {
    const newTarget = {};

    for (const key in targetFormState.selectors) {
      if (!targetFormState.selectors[key].selected) {
        setIsInvalid();
        return;
      }
      newTarget[key] = targetFormState.selectors[key].selected;
    }

    editTarget(newTarget);
    setIsValid();
    closeEditModal();
  };

  const targetFormFields = Object.keys(targetFormState.selectors);

  return (
    <>
      <Modal ref={modalMap}>
        {isMapOpen && (
          <Map
            centerCoordinates={
              targetFormState.selectors.targetCoordinates.selected
            }
            onSetCoordinates={setCoordinates}
            onCloseMap={closeModalMap}
          />
        )}
      </Modal>
      <TargetsSelectorContainer $isValid={targetFormState.isValidTarget}>
        {!targetFormState.isValidTarget && (
          <WarningMessage>Заповніть усі поля</WarningMessage>
        )}
        {targetFormFields.map((fieldName) => {
          if (
            targetFormState.selectors[fieldName].label ===
            TARGET_COORDINATES_LABEL
          ) {
            return (
              <OpenModalMap
                key={fieldName}
                label={targetFormState.selectors[fieldName].label}
                selected={targetFormState.selectors[fieldName].selected}
                openModalMap={openModalMap}
              />
            );
          }

          return (
            <SelectorNew
              key={fieldName}
              handler={(newValue) => setValue(fieldName, newValue)}
              optionsData={targetFormState.selectors[fieldName]}
            />
          );
        })}
        <Button onClick={isEdit ? onEdit : onAddTarget}>
          {isEdit ? "Змінити" : "Додати"}
        </Button>
      </TargetsSelectorContainer>
    </>
  );
}

export default Targetselector;
