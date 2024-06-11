import { useParams } from "react-router-dom";
import { ItemInfo } from "../components";
import { items } from "../data/itemData";

const ItemPage = () => {
  const { itemId } = useParams();
  const item = items.find((item) => item.id === Number(itemId));
  const { name, price, description, image } = item;

  return (
    <ItemInfo
      name={name}
      price={price}
      description={description}
      image={image}
    />
  );
};

export default ItemPage;
