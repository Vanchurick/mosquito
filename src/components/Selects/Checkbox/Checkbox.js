import {
  HiddenCheckbox,
  CustomCheckbox,
  CheckboxBox,
  CheckboxLabel,
} from "./StyledComponents";

const Checkbox = ({ data, ...props }) => {
  return (
    <CustomCheckbox>
      <CheckboxLabel>{data.label}</CheckboxLabel>
      <HiddenCheckbox {...props} checked={data.selected} />
      <CheckboxBox />
    </CustomCheckbox>
  );
};

export default Checkbox;
