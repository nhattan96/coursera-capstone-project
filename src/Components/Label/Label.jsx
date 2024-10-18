import { LabelStyles } from "./LabelStyles.styles";

const Label = ({ labelFor, style, children }) => (
  <LabelStyles htmlFor={labelFor} style={style ? { ...style } : {}}>
    {children}
  </LabelStyles>
);

export default Label;
