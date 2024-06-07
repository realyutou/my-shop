import { items } from "../data/itemData";
import { ItemCollection } from "../components";

const ItemsPage = () => {
  return <ItemCollection items={items} />;
};

export default ItemsPage;
