import CreatableSelect from "react-select/creatable";
import { SelectorContainer } from "./StyledComponents";
import { PILOTS_LABEL } from "../../../assets/consts";
import { useEffect } from "react";

const SelectorNew = ({ handler, optionsData }) => {
  const { label, options, selected } = optionsData;

  const handleChange = (selectedOption) => {
    handler(selectedOption);
  };
  const isPilots = label === PILOTS_LABEL;

  useEffect(() => {
    handler(isPilots ? [options[0]] : options[0]);
  }, []);

  return (
    <SelectorContainer>
      <label>{label}</label>
      <CreatableSelect
        options={options}
        onChange={handleChange}
        placeholder={`Виберіть значення`}
        isMulti={isPilots}
        value={selected}
        isSearchable
      />
    </SelectorContainer>
  );
};

export default SelectorNew;
