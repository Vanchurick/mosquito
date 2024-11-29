import { SelectorContainer } from "../Selector/StyledComponents";

const Checkbox = ({ data, handler }) => {
  return (
    <SelectorContainer>
      <label>{data.label}</label>
      <input type="checkbox" onChange={handler} checked={data.selected} />
    </SelectorContainer>
  );
};

export default Checkbox;
