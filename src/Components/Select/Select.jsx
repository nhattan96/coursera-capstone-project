import { SelectStyles } from "./SelectStyles.styles";

const Select = ({ id, options, style, ...props }) => (
  <SelectStyles id={id} style={style ? { ...style } : {}} {...props}>
    <option value={''}>Select</option>
    {options.length > 0 &&
      options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.key}
        </option>
      ))}
  </SelectStyles>
);

export default Select;
