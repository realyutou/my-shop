import styled from "styled-components";
import formatNum from "format-num";
import QuantityCounter from "../QuantityCounter";

const ItemInfoSection = styled.div`
  text-align: start;

  .img-wrapper {
    padding: 0 12px;
    text-align: center;
    img {
      width: 100%;
    }
  }

  .info-wrapper {
    padding: 0 12px;
  }

  .item-name {
    margin: 14px 0 0 0;
    padding-bottom: 7px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    font-size: 1.25rem;
  }

  .item-price {
    margin: 10px 0;
    font-size: 1.25rem;
  }

  .item-description {
    padding: 10px;
    background-color: #fdf5e6;
    color: rgb(85, 85, 85);
    font-size: 0.875rem;
  }

  li {
    font-size: 0.85rem;
  }

  .check-wrapper {
    display: flex;
    align-items: flex-end;

    button {
      border: none;
      border-radius: 4px;
      margin-left: 12px;
      padding: 2px 10px;
      height: 27px;
      background-color: #f86363;
      color: #ffffff;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;

    .img-wrapper {
      flex-basis: 50%;
    }

    .info-wrapper {
      flex-basis: 50%;
    }

    .item-name {
      margin: 0;
      font-size: 2rem;
    }

    .item-description {
      font-size: 1rem;
    }

    li {
      font-size: 0.9rem;
    }

    .item-price {
      font-size: 1.5rem;
    }
  }
`;

const ItemInfo = ({ name, price, description, image }) => {
  return (
    <>
      <ItemInfoSection className="container outlet">
        <div className="img-wrapper">
          <img src={image} alt="商品圖" />
        </div>
        <div className="info-wrapper">
          <h1 className="item-name">{name}</h1>
          <p className="item-description">{description}</p>
          <ul>
            <li>訂單超過499起免運費！</li>
            <li>開箱時請錄影以確保自身權益。</li>
            <li>商品損壞、瑕疵無條件換貨。</li>
            <li>商品未使用 7 日內無條件退貨。</li>
            <li>商品照與實品顏色可能會有色差，不介意再下單！</li>
          </ul>
          <p className="item-price">{"$" + formatNum(price)}</p>
          <div className="check-wrapper">
            <QuantityCounter />
            <button>
              <i className="fa-solid fa-cart-shopping"></i> 加入購物車
            </button>
          </div>
        </div>
      </ItemInfoSection>
    </>
  );
};

export default ItemInfo;
