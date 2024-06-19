import { useParams } from "react-router-dom";
import { ItemInfo } from "../components";
import { items } from "../data/itemData";

const ItemPage = () => {
  const { itemId } = useParams();
  const item = items.find((item) => item.id === Number(itemId));
  const { id, name, price, description, image } = item;

  return (
    <ItemInfo
      id={id}
      name={name}
      price={price}
      description={description}
      image={image}
    />
  );
};

export default ItemPage;
