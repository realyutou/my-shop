import styled from "styled-components";
import formatNum from "format-num";
import { useState } from "react";
import QuantityCounter from "../QuantityCounter";
import { useCart } from "../../contexts/CartContext";

const ProductContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  .image-wrapper {
    height: 100px;
    width: 100px;

    img {
      border-radius: 5px;
      width: 100%;
    }
  }

  p {
    margin: 0;
    text-align: end;
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .product-price {
    font-weight: 700;
  }

  .counter-wrapper {
    position: absolute;
    top: 38px;
    right: 0px;
  }

  .remove-button {
    position: absolute;
    bottom: 0px;
    right: 0px;

    button {
      cursor: pointer;
    }
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;

    .info-wrapper {
      flex: 1 1 auto;
      flex-direction: row;
      margin-left: 20px;
    }
  }
`;

const Product = ({ id, name, price, image, quantity }) => {
  const [count, setCount] = useState(quantity);
  const { removeFromCart, addToCart } = useCart();

  const handlePlusClick = () => {
    const product = {
      id,
      name,
      price,
      image,
      quantity: 1,
    };
    addToCart(product);
    setCount(count + 1);
  };

  const handleMinusClick = () => {
    if (quantity > 1) {
      const product = {
        id,
        name,
        price,
        image,
        quantity: -1,
      };
      addToCart(product);
      setCount(count - 1);
    }
  };

  return (
    <ProductContainer>
      <div className="image-wrapper">
        <img src={image} alt={name + "圖片"} />
      </div>
      <div className="info-wrapper">
        <p className="product-name">{name}</p>
        <p className="product-price">{"$" + formatNum(price)}</p>
      </div>
      <div className="counter-wrapper">
        <QuantityCounter
          quantity={count}
          onPlusClick={handlePlusClick}
          onMinusClick={handleMinusClick}
        />
      </div>
      <div className="remove-button">
        <button onClick={() => removeFromCart(id)}>從購物車移除</button>
      </div>
    </ProductContainer>
  );
};

export default Product;
