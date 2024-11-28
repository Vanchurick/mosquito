import "./TargetSelector.css";
import Button from "../../Button/Button";
import SelectorNew from "../Selector/SelectorNew";
import { useState } from "react";

import { FORM_DATA } from "../../../assets/formData";

import generateUniqId from "../../../utils/generateUniqId";

function Targetselector({ handleTargets }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [distance, setDistance] = useState("");
  const [isValidTarget, setIsValidTarget] = useState(true);

  const addTarget = () => {
    if (!name || !city || !coordinates || !distance) {
      setIsValidTarget(false);
      return;
    }

    const id = generateUniqId(5);

    handleTargets((prevTargets) => {
      const updatedTargets = [...prevTargets];
      updatedTargets.push({ id, name, city, coordinates, distance });
      return updatedTargets;
    });

    setName("");
    setCity("");
    setCoordinates("");
    setDistance("");
    setIsValidTarget(true);
  };

  const { targetName, targetCity, targetCoordinates, targetDistance } =
    FORM_DATA;

  const targetSelectorsData = [
    { optionsData: targetName, handler: setName, value: name },
    { optionsData: targetCity, handler: setCity, value: city },
    { optionsData: targetCoordinates, handler: setCoordinates, value: coordinates },
    { optionsData: targetDistance, handler: setDistance, value: distance },
  ];

  return (
    <>
      {!isValidTarget && <p className="warning">Заповніть усі поля</p>}
      <div className="target-selector">
        {targetSelectorsData.map(({ ...props }, i) => (
          <SelectorNew key={i} {...props} />
        ))}
      </div>
      <Button onClick={addTarget}>Додати</Button>
    </>
  );
}

export default Targetselector;
