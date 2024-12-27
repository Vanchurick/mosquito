import { useState, useRef, useContext } from "react";

import { DATA_LABEL, TARGETS_LABEL, JAMMING_LABEL } from "../../assets/consts";

import { InputsContainer, TabsContainer, Tab } from "./StyledComponents";

import SelectorNew from "../Selects/Selector/Selector";
import Targetselector from "../Selects/Targetselector/TargetSelector";
import DateSelector from "../Selects/DateSelector/Dateselector";
import Checkbox from "../Selects/Checkbox/Checkbox";
import TargetsLabels from "../TargetsLabels/TargetsLabels";
import Modal from "../Modal/Modal";

import { Context } from "../../store/Context";

function InputsForm() {
  const [tab, setTab] = useState("1");

  const { setJamming, selectValue, state, setIdEditTarget } =
    useContext(Context);

  const modal = useRef();

  const openEditTargetModal = (id) => {
    setIdEditTarget(id);
    modal.current.openModal();
  };

  const closeEditTargetModal = () => {
    modal.current.closeModal();
  };

  const reportFieldsName = Object.keys(state);

  const renderSelector = (formField) => {
    if (state[formField].label === TARGETS_LABEL) {
      if (tab === "1") return null;

      return (
        <div key={formField}>
          <TargetsLabels onOpenModal={openEditTargetModal} />
          <Targetselector />
        </div>
      );
    }

    if (tab === "2") return null;

    if (state[formField].label === DATA_LABEL) {
      return (
        <DateSelector
          key={formField}
          handler={(selectedOption) => selectValue(formField, selectedOption)}
          dateFormData={state[formField]}
        />
      );
    }

    if (state[formField].label === JAMMING_LABEL) {
      return (
        <Checkbox
          key={formField}
          data={state.jamming}
          onChange={(e) => setJamming(e.target.checked)}
        />
      );
    }

    return (
      <SelectorNew
        key={formField}
        optionsData={state[formField]}
        handler={(selectedOption) => selectValue(formField, selectedOption)}
      />
    );
  };

  return (
    <>
      <Modal ref={modal}>
        <Targetselector isEdit={true} closeEditModal={closeEditTargetModal} />
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
