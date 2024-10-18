import { HeroSectionStyles } from "./HeroSectionStyles.styles";

import restaurantfood from "../../../assets/restaurantfood.jpg";
import Button from "../../../Components/Button/Button";
import theme from "../../../styles/theme";

const HeroSection = () => (
  <HeroSectionStyles>
    <div className="flex-item content">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        We are family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
      <Button
        style={{
          background: theme.colors.secondary,
          color: theme.colors.black,
          marginTop: "10px",
        }}
        link="/booking"
      >
        Reservations a Table
      </Button>
    </div>
    <div className="flex-item hero-img">
      <img src={restaurantfood} alt="restaurantfood" />
    </div>
  </HeroSectionStyles>
);

export default HeroSection;
