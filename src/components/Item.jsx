import styled from "styled-components";
import formatNum from "format-num";
import { Link } from "react-router-dom";

const ItemSection = styled.div`
  position: relative;
  border: 0.8px solid rgb(226, 232, 240);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1.5px 1px;
  transition: box-shadow 0.2s ease-in-out;
  margin: 20px 12px;
  font-size: 0.875rem;

  .item-image {
    width: 100%;
  }

  .item-info-wrapper {
    padding: 10px 15px 20px;
    text-align: start;
  }

  .item-title {
    text-decoration: none;
    color: rgb(108, 92, 83);

    p {
      margin: 0;
    }
  }

  .item-price {
    margin-top: 1.5px;
    font-size: 0.75rem;
    font-weight: bold;
  }

  .item-description {
    font-size: 0.8rem;
    color: rgb(51, 51, 51);
  }

  .cart-button {
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
    border: none;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    height: 10%;
    cursor: pointer;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    .cart-button {
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: #c4c5c6;
        color: white;
      }
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;

    .item-price {
      font-size: 0.9rem;
    }

    .item-description {
      font-size: 0.9rem;
    }

    .cart-button {
      font-size: 1rem;
    }
  }
`;

const Item = ({ id, name, price, description, image }) => {
  return (
    <ItemSection>
      <button className="cart-button">
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
      <Link to={`/items/${id}`}>
        <img src={image} alt={name} className="item-image" />
      </Link>
      <div className="item-info-wrapper">
        <Link to={`/items/${id}`} className="item-title">
          <p>{name}</p>
        </Link>
        <p className="item-price">{"$" + formatNum(price)}</p>
        <p className="item-description">{description}</p>
      </div>
    </ItemSection>
  );
};

export default Item;
