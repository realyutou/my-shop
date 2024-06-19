import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const StyledHeader = styled.header`
  position: sticky;
  top: 0px;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1.5px 1px;
  background-color: #ffffff;
  height: 56px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 60px;
  }

  .header-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
  }
`;

const Logo = styled(Link)`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 200px;
  img {
    height: 28px;
    @media screen and (min-width: 768px) {
      height: 30px;
    }
  }
`;

const CartLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  height: 35px;
  width: 35px;
  text-decoration: none;
  color: black;

  .item-count {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    font-size: 0.625rem;
    background-color: red;
    color: #ffffff;
  }
`;

const Header = () => {
  const { products } = useCart();
  let itemCount = 0;
  if (products?.length > 0) {
    products.map((prod) => (itemCount += prod.quantity));
  }
  return (
    <StyledHeader>
      <div className="header-container container">
        <Logo to="/items">
          <img src="https://i.imgur.com/H1o4dhs.png" alt="logo" />
        </Logo>
        <CartLink to="/cart">
          <div className="item-count">{itemCount}</div>
          <i className="fa-solid fa-cart-shopping"></i>
        </CartLink>
      </div>
    </StyledHeader>
  );
};

export default Header;
