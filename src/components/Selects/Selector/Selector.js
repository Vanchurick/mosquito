/* eslint-disable react-hooks/exhaustive-deps */
import CreatableSelect from "react-select/creatable";
import { SelectorContainer } from "./StyledComponents";
import { PILOTS_LABEL } from "../../../assets/consts";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  TARGET_COORDINATES_LABEL,
  PHONE_NUMBER_LABEL,
} from "../../../assets/consts";

const SelectorNew = ({ handler, optionsData, placeholder }) => {
  const { label, options, selected } = optionsData;
  const { colors } = useContext(ThemeContext);

  const handleChange = (selectedOption) => {
    handler(selectedOption);
  };
  const isPilots = label === PILOTS_LABEL;

  useEffect(() => {
    handler(isPilots ? [options[0]] : options[0]);
  }, []);

  const selectCustomStyles = {
    control: (baseStyles, state) => {
		console.log(state)
      return {
        ...baseStyles,
        borderColor: state.isFocused ? colors.secondary : colors.primary,
        borderWidth: 2,
        cursor: "pointer",
        boxShadow: "none",
        "&:hover": {
          borderColor: colors.secondary,
        },
      };
    },
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
    const coordinatesRegex = /^\d{2}[A-Z]{1}\s[A-Z]{2}\s\d{5}\s\d{5}$/;
    const phoneRegex = /^0\d{9}$/;

    if (label === TARGET_COORDINATES_LABEL) {
      return coordinatesRegex.test(newValue);
    }

    if (label === PHONE_NUMBER_LABEL) {
      return phoneRegex.test(newValue);
    }

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
		aria-invalid={true}
      />
    </SelectorContainer>
  );
};

export default SelectorNew;
