import { TargetsLabelList, TargetsItem } from "./StyledComponents.js";
import Button from "../Button/Button.js";

const TargetsLabels = ({ targets, removeTarget }) => {
  const handleRemove = (targetId) => {
    removeTarget((prevTargets) => {
      const updatedTargets = [...prevTargets];

      return updatedTargets.filter((target) => target.id !== targetId);
    });
  };

  return (
    <TargetsLabelList>
      {targets.map((target) => {
        return (
          <TargetsItem key={target.id}>
            <p>{target.name}</p>
            <Button onClick={() => handleRemove(target.id)}>X</Button>
          </TargetsItem>
        );
      })}
    </TargetsLabelList>
  );
};

export default TargetsLabels;
