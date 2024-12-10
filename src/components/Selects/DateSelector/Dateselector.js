import React, { useState, useEffect } from "react";
import { Label, InputDate } from "./StyledComponents";

import formatDate from "../../../utils/formatDate";
import formatTodayDate from "../../../utils/formatTodayDate";
import { SelectorContainer } from "../Selector/StyledComponents";

function DateSelector({ handler }) {
  const [selectedDate, setSelectedDate] = useState(formatTodayDate());

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    handler(formatDate(event.target.value));
  };

  useEffect(() => {
    handler(formatDate(selectedDate));
  }, []);

  return (
    <SelectorContainer>
      <Label htmlFor="date">Дата:</Label>
      <InputDate
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
