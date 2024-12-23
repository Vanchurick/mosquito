import { TargetsLabelList, TargetsItem, Button } from "./StyledComponents.js";

const TargetsLabels = ({ targets, removeTarget, onOpenModal }) => {
  return (
    <TargetsLabelList>
      {targets.map((target) => {
        return (
          <TargetsItem key={target.id}>
            <p>{target.targetName.value}</p>
            <Button onClick={() => removeTarget(target.id)}>x</Button>
            <Button onClick={() => onOpenModal(target.id)}>Змінити</Button>
          </TargetsItem>
        );
      })}
    </TargetsLabelList>
  );
};

export default TargetsLabels;
