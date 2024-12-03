import {
  HiddenCheckbox,
  CustomCheckbox,
  CheckboxBox,
  CheckboxLabel,
} from "./StyledComponents";

const Checkbox = ({ data, handler }) => {
  return (
    <CustomCheckbox>
      <CheckboxLabel>{data.label}</CheckboxLabel>
      <HiddenCheckbox onChange={handler} checked={data.selected} />
      <CheckboxBox />
    </CustomCheckbox>
  );
};

export default Checkbox;
