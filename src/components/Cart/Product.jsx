import styled from "styled-components";
import formatNum from "format-num";
import QuantityCounter from "../QuantityCounter";

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

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;

    .info-wrapper {
      flex: 1 1 auto;
      flex-direction: row;
      margin-left: 20px;
    }
  }
`;

const Product = ({ name, price, image, quantity }) => {
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
        <QuantityCounter initialQuantity={quantity} />
      </div>
    </ProductContainer>
  );
};

export default Product;
