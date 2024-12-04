import {
  TargetsLabelList,
  TargetsItem,
  RemoveButton,
} from "./StyledComponents.js";

const TargetsLabels = ({ targets, removeTarget }) => {
  return (
    <TargetsLabelList>
      {targets.map((target) => {
        return (
          <TargetsItem key={target.id}>
            <p>{target.targetName.value}</p>
            <RemoveButton onClick={() => removeTarget(target.id)}>
              x
            </RemoveButton>
          </TargetsItem>
        );
      })}
    </TargetsLabelList>
  );
};

export default TargetsLabels;
