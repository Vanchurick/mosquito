import CreatableSelect from "react-select/creatable";
import { SelectorContainer } from "./StyledComponents";
import { PILOTS_LABEL } from "../../../assets/consts";
import { useEffect } from "react";

const SelectorNew = ({ handler, optionsData }) => {
  const { label, options, selected } = optionsData;

  const handleChange = (selectedOption) => {
    handler(selectedOption);
  };

  useEffect(() => {
    handler(options[0]);
  }, []);

  const isPilots = label === PILOTS_LABEL;

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
