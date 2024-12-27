import { useContext } from "react";
import { Context } from "../../store/Context.js";
import { TargetsLabelList, TargetsItem, Button } from "./StyledComponents.js";

const TargetsLabels = ({ onOpenModal }) => {
  const {
    state: {
      targets: { selected },
    },
    removeTarget,
  } = useContext(Context);

  return (
    <>
      <TargetsLabelList>
        {selected.map((target) => {
          return (
            <TargetsItem key={target.id}>
              <p>{target.targetName.value}</p>
              <Button onClick={() => removeTarget(target.id)}>x</Button>
              <Button onClick={() => onOpenModal(target.id)}>Змінити</Button>
            </TargetsItem>
          );
        })}
      </TargetsLabelList>
    </>
  );
};

export default TargetsLabels;
