import { CardStyles } from "./Card.styles";
import deliveryIcon from "../../assets/deliveryIcon.svg";

const Card = ({ id, img, foodName, price, desc }) => {
  return (
    id && (
      <CardStyles key={id}>
        <img src={img} alt={img} />
        <header>
          <span>{foodName}</span>
          <span className="price">${price}</span>
        </header>
        <p>{desc}</p>
        <footer>
          <span>Order a delivery</span>
          <span>
            <img src={deliveryIcon} alt="deliveryIcon" />
          </span>
        </footer>
      </CardStyles>
    )
  );
};

export default Card;
