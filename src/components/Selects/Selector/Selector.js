import React from "react";
import SelectorContainer from "../SelectorContainer/SelectorContainer";

function Selector({ handler, data, value }) {
  const { label, options } = data;

  const handleSelect = (event) => {
    handler(event.target.value);
  };

  const isSelect = options ? (
    <select id={label} value={value} onChange={handleSelect}>
      <option value="">Виберіть...</option>
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  ) : (
    <input id={label} type="text" onChange={handleSelect} value={value} />
  );

  return (
    <SelectorContainer>
      <label htmlFor={label}>{label}</label>
      {isSelect}
    </SelectorContainer>
  );
}

export default Selector;
