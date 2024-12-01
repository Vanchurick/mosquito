import generateUniqId from "./generateUniqId";


export default function updateFormState(fieldName, selectedOption, handler) {
  if (!selectedOption) {
    console.log("SELECTED OPTION IS NULL OR UNDEFINED");
    return;
  }

  handler((prevReportData) => {
    if (Array.isArray(selectedOption)) {
      const updatedOptions = [...prevReportData[fieldName].options];

      const updatedSelectedOptions = selectedOption.map((option) => {
        if (option.__isNew__) {
          const newOption = {
            value: option.value,
            label: option.label,
            id: generateUniqId(5),
          };
          updatedOptions.push(newOption);
          return newOption;
        }
        return option;
      });

      return {
        ...prevReportData,
        [fieldName]: {
          ...prevReportData[fieldName],
          selected: [...updatedSelectedOptions],
          options: [...updatedOptions],
        },
      };
    }

    if (selectedOption.__isNew__) {
      const updatedOptions = [...prevReportData[fieldName].options];
      const newOption = {
        value: selectedOption.value,
        label: selectedOption.label,
        id: generateUniqId(5),
      };
      updatedOptions.push(newOption);

      return {
        ...prevReportData,
        [fieldName]: {
          ...prevReportData[fieldName],
          selected: newOption,
          options: [...updatedOptions],
        },
      };
    }

    return {
      ...prevReportData,
      [fieldName]: {
        ...prevReportData[fieldName],
        selected: selectedOption,
      },
    };
  });
}
