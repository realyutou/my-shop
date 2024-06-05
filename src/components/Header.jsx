import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as CartIcon } from "../assets/cart.svg";

const StyledHeader = styled.header`
  position: sticky;
  top: 0px;
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
  margin: 20px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-container container">
        <Logo to="/">
          <img
            src="https://pixabay.com/get/g8a937112ede7cfd120aeb82f38bd24073ba7815732f9f4c0c782b3d889273eecd025cb66aef62ccc4ec9180b01738239_640.png"
            alt="logo"
          />
        </Logo>
        <CartLink to="/">
          <CartIcon />
        </CartLink>
      </div>
    </StyledHeader>
  );
};

export default Header;