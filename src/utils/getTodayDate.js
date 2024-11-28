const getTodayDate = () => {
	const today = new Date();
	const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
	const month =
	  today.getMonth() < 10 ? `0${today.getMonth()}` : today.getMonth() + 1;
	const year = today.getFullYear();
  
	return `${day}.${month}.${year}`;
  };

  export default getTodayDate;