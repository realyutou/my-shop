import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import formatNum from "format-num";
import { useCart } from "../../contexts/CartContext";
import Progress from "./Progress";
import Address from "./Address";
import Shipping from "./Shipping";
import Checkout from "./Checkout";
import Product from "./Product";
import ProgressControl from "./ProgressControl";

const CartContainer = styled.div`
  padding: 0 12px;
  text-align: start;

  .page-title {
    font-size: 1.5rem;
  }

  .main-section {
    margin-bottom: 24px;
    padding: 8px 0;
  }

  form {
    margin: 24px 0;
  }

  .form-title {
    font-size: 1.5rem;
  }

  .product-section {
    padding: 16px;
    border: 1px solid #f0f0f5;
    border-radius: 10px;
  }

  .product-header {
    display: none;
    font-size: 1.125rem;
  }

  .fee-section {
    display: flex;
    justify-content: space-between;
    padding: 18px 8px 0 0;
    border-top: 1px solid #f0f0f5;

    p {
      margin: 0px;
      font-size: 0.875rem;
    }
  }

  .shipping {
    margin-bottom: 16px;
  }

  .fee {
    font-weight: 700;
  }

  .no-item {
    text-align: center;

    button {
      cursor: pointer;
      background-color: #000000;
      color: #ffffff;
    }
  }

  @media screen and (min-width: 768px) {
    .page-title {
      font-size: 2rem;
    }

    .main-section {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0px;
    }

    .progress-section {
      flex: 0 1 50%;
    }

    .product-section {
      flex: 0 1 40%;
      padding: 32px 24px;
    }

    .product-header {
      display: block;
    }

    .shipping {
      margin-bottom: 32px;
    }
  }
`;

const Cart = () => {
  const [step, setStep] = useState(1);
  const { products, totalPrice } = useCart();

  const toPrevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const toNextStep = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
    }
  };

  const switchForm = () => {
    if (step === 1) {
      return {
        title: "寄送地址",
        form: <Address />,
      };
    } else if (step === 2) {
      return {
        title: "運送方式",
        form: <Shipping />,
      };
    } else if (step === 3) {
      return {
        title: "付款資訊",
        form: <Checkout />,
      };
    }
  };

  const { title, form } = switchForm();

  return (
    <CartContainer className="container outlet">
      <h1 className="page-title">結帳</h1>
      <div className="main-section">
        <div className="progress-section">
          <Progress step={step} />
          <form>
            <h1 className="form-title">{title}</h1>
            {form}
          </form>
        </div>
        <div className="product-section">
          <h1 className="product-header">購物籃</h1>
          <div className="product-wrapper">
            {products?.length > 0 ? (
              products.map((prod) => (
                <Product
                  key={prod.id}
                  id={prod.id}
                  name={prod.name}
                  price={prod.price}
                  image={prod.image}
                  quantity={prod.quantity}
                />
              ))
            ) : (
              <div className="no-item">
                <h1>
                  <i className="fa-solid fa-cart-shopping"></i>
                </h1>
                <p>購物車空空如也...</p>
                <Link to="/items">
                  <button>現在就去逛逛</button>
                </Link>
              </div>
            )}
          </div>
          {products?.length > 0 && (
            <>
              <div className="fee-section shipping">
                <p>運費</p>
                <p className="fee">0</p>
              </div>
              <div className="fee-section total">
                <p>小計</p>
                <p className="fee">{"$" + formatNum(totalPrice)}</p>
              </div>
            </>
          )}
        </div>
      </div>
      <ProgressControl
        step={step}
        onPrevClick={toPrevStep}
        onNextClick={toNextStep}
      />
    </CartContainer>
  );
};

export default Cart;
