import CreatableSelect from "react-select/creatable";
import { SelectorContainer } from "./StyledComponents";
import { PILOTS_LABEL } from "../../../assets/consts";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import {
  TARGET_COORDINATES_LABEL,
  PHONE_NUMBER_LABEL,
  ACTION_LABEL,
  TARGET_STATUS_AIR_LABEL,
  TARGET_STATUS_DAMAGE_LABEL,
} from "../../../assets/consts";

const SelectorNew = ({ handler, optionsData, placeholder }) => {
  const { label, options, selected } = optionsData;
  const { colors } = useContext(ThemeContext);

  const isPilots = label === PILOTS_LABEL;

  const [value, setValue] = useState(options[0]);

  const handleChange = (selectedOption) => {
    handler(selectedOption);
    setValue(selectedOption);
  };

  useEffect(() => {
    handler(selected ? selected : value);
  }, []);

  const selectCustomStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? colors.secondary : colors.primary,
      borderWidth: 2,
      cursor: "pointer",
      boxShadow: "none",
      "&:hover": {
        borderColor: colors.secondary,
      },
    }),
    option: (baseStyles, { isSelected, isFocused }) => ({
      ...baseStyles,
      ":active": { backgroundColor: colors.secondary },
      cursor: "pointer",
      color: colors.textPrimary,
      backgroundColor: isSelected
        ? colors.secondary
        : isFocused
        ? colors.bgLight
        : "",
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      backgroundColor: colors.bgLight,
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      backgroundColor: colors.bgDark,
      color: colors.secondary,
    }),
  };

  const validateNewValue = (newValue) => {
    if (
      label === ACTION_LABEL ||
      label === TARGET_STATUS_AIR_LABEL ||
      label === TARGET_STATUS_DAMAGE_LABEL
    )
      return false;

    const coordinatesRegex = /^\d{2}[A-Z]{1}\s[A-Z]{2}\s\d{5}\s\d{5}$/;
    const phoneRegex = /^0\d{9}$/;

    if (label === TARGET_COORDINATES_LABEL) {
      return coordinatesRegex.test(newValue);
    }

    if (label === PHONE_NUMBER_LABEL) {
      return phoneRegex.test(newValue);
    }

    if (!newValue) return false;

    return true;
  };

  return (
    <SelectorContainer>
      {label !== PHONE_NUMBER_LABEL && <label>{label}</label>}
      <CreatableSelect
        options={options}
        onChange={handleChange}
        placeholder={placeholder || `Виберіть значення`}
        isMulti={isPilots}
        value={selected}
        isSearchable
        styles={selectCustomStyles}
        isValidNewOption={validateNewValue}
        noOptionsMessage={() => "Додайте варіанти"}
        formatCreateLabel={(value) => `Додати "${value}"`}
      />
    </SelectorContainer>
  );
};

export default SelectorNew;
