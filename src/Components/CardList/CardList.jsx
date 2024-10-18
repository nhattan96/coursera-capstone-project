import Card from "../Card/Card";
import { CardListStyles } from "./CardListStyles.styles";

const CardList = ({ listItems }) => {
  return (
    <CardListStyles>
      {listItems.map((food) => (
        <Card key={food.id} {...food}></Card>
      ))}
    </CardListStyles>
  );
};

export default CardList;
