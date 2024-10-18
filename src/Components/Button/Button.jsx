import { Link } from "react-router-dom";
import { CardStyles } from "./ButtonStyles.styles";

const Button = ({ link, style, ...props }) => (
  <CardStyles style={{ ...style }}>
    {link ? <Link to={link}>{props.children}</Link> : props.children}
    
  </CardStyles>
);

export default Button;
