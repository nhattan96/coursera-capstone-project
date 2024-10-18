import { InputStyles } from "./InputStyles.styles";

const Button = ({
  id,
  type,
  style,
  min,
  max,
  required,
  placeholder,
  ...props
}) => (
  <InputStyles
    id={id}
    type={type}
    required={required}
    min={min}
    max={max}
    placeholder={placeholder}
    style={style ? { ...style } : {}}
    {...props}
  ></InputStyles>
);

export default Button;
