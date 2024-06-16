import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Plus } from "../assets/plus.svg";
import { ReactComponent as Minus } from "../assets/minus.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: 116px;
  height: 27px;
`;

const QuantityCounter = ({ initialQuantity }) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const handlePlusClick = () => {
    setQuantity(quantity + 1);
  };

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Wrapper>
      <span onClick={handleMinusClick}>
        <Minus />
      </span>
      <span>{quantity}</span>
      <span onClick={handlePlusClick}>
        <Plus />
      </span>
    </Wrapper>
  );
};

export default QuantityCounter;
