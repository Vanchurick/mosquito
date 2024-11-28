import React, { useState } from "react";

import formatDate from "../../../utils/formatDate";
import formatTodayDate from "../../../utils/formatTodayDate";
import SelectorContainer from "../SelectorContainer/SelectorContainer";


function DateSelector({ handleDate }) {
  const [selectedDate, setSelectedDate] = useState(formatTodayDate());

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    handleDate(formatDate(event.target.value));
  };

  return (
    <SelectorContainer>
      <label htmlFor="date">Дата:</label>
      <input
        type="date"
        id="date"
        value={selectedDate}
        onChange={handleDateChange}
        placeholder="dd-mm-yyyy"
      />
    </SelectorContainer>
  );
}

export default DateSelector;
