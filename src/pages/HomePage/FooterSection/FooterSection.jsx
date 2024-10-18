import { FooterSectionStyles } from "./FooterSectionStyles.styles";
import LogoFooter from "../../../assets/LogoFooter.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const FooterSection = () => (
  <FooterSectionStyles>
    <div className="footer-logo">
      <img src={LogoFooter} alt="LogoFooter" className="logo-placeholder" />
    </div>
    <div className="footer-section">
      <h3>Little Lemon</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <HashLink to="/#about">About</HashLink>
        </li>
        <li>
          <HashLink to="/#menu">Menu</HashLink>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="/order">Order Online</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Contact Information</h3>
      <ul>
        <li>Address, Province, Disstrict, Ward</li>
        <li>+84 123-456-789</li>
        <li>littlelemon@gmail.com</li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Find us in Social networks!</h3>
      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
    </div>
  </FooterSectionStyles>
);

export default FooterSection;
