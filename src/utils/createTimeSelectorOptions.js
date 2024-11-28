import generateUniqId from "./generateUniqId";

const createTimeSelectorOptions = () => {
  const timeOptions = [];
  for (let hour = 0; hour < 24; hour++) {
    const hourString = hour < 10 ? `0${hour}` : hour;
    timeOptions.push({
      id: generateUniqId(5),
      value: `${hourString}:00`,
      label: `${hourString}:00`,
    });
    timeOptions.push({
      id: generateUniqId(5),
      value: `${hourString}:30`,
      label: `${hourString}:30`,
    });
  }

  return timeOptions;
};

export default createTimeSelectorOptions;
