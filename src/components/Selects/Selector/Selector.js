/* eslint-disable react-hooks/exhaustive-deps */
import CreatableSelect from "react-select/creatable";
import { SelectorContainer } from "./StyledComponents";
import { PILOTS_LABEL } from "../../../assets/consts";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

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

  return (
    <SelectorContainer>
      {label && <label>{label}</label>}
      <CreatableSelect
        options={options}
        onChange={handleChange}
        placeholder={placeholder || `Виберіть значення`}
        isMulti={isPilots}
        value={selected}
        isSearchable
        styles={selectCustomStyles}
      />
    </SelectorContainer>
  );
};

export default SelectorNew;
