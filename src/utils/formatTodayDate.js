import getTodayDate from "./getTodayDate";

const formatTodayDate = () => {
  return getTodayDate().split(".").reverse().join("-");
};

export default formatTodayDate;
