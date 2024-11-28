import CreatableSelect from "react-select/creatable";
import { SelectorContainer } from "./StyledComponents";
import { PILOTS_LABEL } from "../../../assets/consts";

const SelectorNew = ({ handler, optionsData, value }) => {
  const { label, options } = optionsData;

  const handleChange = (selectedOption) => {
    handler(selectedOption);
    console.log(value);
  };

  const isPilots = label === PILOTS_LABEL;


  

  return (
    <SelectorContainer>
      <label>{label}</label>
      <CreatableSelect
        options={options}
        onChange={handleChange}
        placeholder={`Виберіть значення`}
        isMulti={isPilots}
      />
    </SelectorContainer>
  );
};

export default SelectorNew;
