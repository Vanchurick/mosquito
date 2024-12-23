import DateSelector from "../Selects/DateSelector/Dateselector";
import SelectorNew from "../Selects/Selector/Selector";

import { DATA_LABEL, TARGETS_LABEL, JAMMING_LABEL } from "../../assets/consts";
import Targetselector from "../Selects/Targetselector/TargetSelector";
import Checkbox from "../Selects/Checkbox/Checkbox";
import TargetsLabels from "../TargetsLabels/TargetsLabels";
import Modal from "../Modal/Modal";
import { InputsContainer, TabsContainer, Tab } from "./StyledComponents";
import { useState, useRef } from "react";
import { TARGET_FORM_DATA } from "../../assets/formData";
import { AIR_INTELIGENCE_ACTION } from "../../assets/consts";

function InputsForm({
  onSetJamming,
  onSetNewTarget,
  onRemoveTarget,
  onSetNewData,
  onEditTarget,
  reportData,
}) {
  const [tab, setTab] = useState("1");
  const [idEditedTarget, setIdEditedTarget] = useState("");
  const [isModal, setIsModal] = useState(false);

  const modal = useRef();

  const openEditTargetModal = (id) => {
    setIsModal(true);
    modal.current.openModal();
    setIdEditedTarget(id);
  };

  const closeEditTargetModal = (id, target) => {
    setIsModal(false);
    modal.current.closeModal();
    setIdEditedTarget("");
    onEditTarget(id, target);
  };

  const reportFieldsName = Object.keys(reportData);

  const renderSelector = (formField) => {
    if (reportData[formField].label === TARGETS_LABEL) {
      if (tab === "1") return null;

      const derivedTargetForm = {};

      if (reportData.action.selected?.value === AIR_INTELIGENCE_ACTION) {
        derivedTargetForm.targetName = TARGET_FORM_DATA.targetName;
        derivedTargetForm.targetCity = TARGET_FORM_DATA.targetCity;
        derivedTargetForm.targetCoordinates =
          TARGET_FORM_DATA.targetCoordinates;
        derivedTargetForm.targetDistance = TARGET_FORM_DATA.targetDistance;
        derivedTargetForm.targetStatusAir = TARGET_FORM_DATA.targetStatusAir;
      } else {
        derivedTargetForm.targetName = TARGET_FORM_DATA.targetName;
        derivedTargetForm.targetCity = TARGET_FORM_DATA.targetCity;
        derivedTargetForm.targetCoordinates =
          TARGET_FORM_DATA.targetCoordinates;
        derivedTargetForm.targetDistance = TARGET_FORM_DATA.targetDistance;
        derivedTargetForm.amunition = TARGET_FORM_DATA.amunition;
        derivedTargetForm.amunitionAction = TARGET_FORM_DATA.amunitionAction;
        derivedTargetForm.countAmunition = TARGET_FORM_DATA.countAmunition;
        derivedTargetForm.targetStatusDamage =
          TARGET_FORM_DATA.targetStatusDamage;
      }

      return (
        <div key={formField}>
          <TargetsLabels
            targets={reportData[formField].selected}
            removeTarget={onRemoveTarget}
            onOpenModal={openEditTargetModal}
          />
          <Targetselector
            onAddNewTarget={(newTarget) => onSetNewTarget(formField, newTarget)}
            actionType={reportData.action.selected?.value}
            derivedTargetForm={derivedTargetForm}
          />
        </div>
      );
    }

    if (tab === "2") return null;

    if (reportData[formField].label === DATA_LABEL) {
      return (
        <DateSelector
          key={formField}
          handler={(selectedOption) => onSetNewData(formField, selectedOption)}
          dateFormData={reportData[formField]}
        />
      );
    }

    if (reportData[formField].label === JAMMING_LABEL) {
      return (
        <Checkbox
          key={formField}
          data={reportData[formField]}
          handler={(e) => onSetJamming(formField, e.target.checked)}
        />
      );
    }

    return (
      <SelectorNew
        key={formField}
        optionsData={reportData[formField]}
        handler={(selectedOption) => onSetNewData(formField, selectedOption)}
      />
    );
  };

  const deriveEditedTarget = (id) => {
    const targetForEdit = reportData.targets.selected.find(
      (target) => target.id === id
    );

    const derivedTargetForm = {};

    for (const key in targetForEdit) {
      if (key !== "id" && key !== "label") {
        derivedTargetForm[key] = {
          label: TARGET_FORM_DATA[key].label,
          options: TARGET_FORM_DATA[key].options,
          selected: targetForEdit[key],
        };
      }
    }

    return derivedTargetForm;
  };

  return (
    <>
      <Modal ref={modal}>
        {isModal && (
          <Targetselector
            onEditTarget={(targetData) => {
              closeEditTargetModal(idEditedTarget, targetData);
            }}
            actionType={reportData.action.selected?.value}
            derivedTargetForm={deriveEditedTarget(idEditedTarget)}
            isEdit={true}
          />
        )}
      </Modal>

      <InputsContainer>
        <TabsContainer>
          <Tab $active={tab === "1"} onClick={() => setTab("1")}>
            Фабула
          </Tab>
          <Tab $active={tab === "2"} onClick={() => setTab("2")}>
            Цілі
          </Tab>
        </TabsContainer>
        {reportFieldsName.map((formField) => renderSelector(formField))}
      </InputsContainer>
    </>
  );
}

export default InputsForm;
