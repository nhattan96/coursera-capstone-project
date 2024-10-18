import { MenuSectionStyles } from "./MenuSectionStyles.styles";

import greekSalad from "../../../assets/greekSalad.jpg";
import bruchetta from "../../../assets/bruchetta.svg";
import lemonDessert from "../../../assets/lemonDessert.jpg";
import CardList from "../../../Components/CardList/CardList";
import Button from "../../../Components/Button/Button";
import theme from "../../../styles/theme";

const menuItems = [
  {
    id: 1,
    img: greekSalad,
    foodName: "Greek salad",
    price: "12.99",
    desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: 2,
    img: bruchetta,
    foodName: "Bruchetta",
    price: "5.99",
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    img: lemonDessert,
    foodName: "Lemon Dessert",
    price: "5.00",
    desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const MenuSection = () => (
  <MenuSectionStyles id="menu">
    <div className="header">
      <h1>This Weeks Specials!</h1>
      <Button
        style={{
          background: theme.colors.secondary,
          color: theme.colors.black,
          marginTop: "10px",
        }}
        link="/menu"
      >
        Online Menu
      </Button>
    </div>
    <div style={{ display: "flex", gap: 20 }}>
      <CardList listItems={menuItems}></CardList>
    </div>
  </MenuSectionStyles>
);

export default MenuSection;
