import styled from "styled-components";
import Item from "./Item";

const ItemsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ItemCollection = ({ items }) => {
  return (
    <ItemsSection className="container">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          image={item.image}
        />
      ))}
    </ItemsSection>
  );
};

export default ItemCollection;
