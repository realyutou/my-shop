import styled from "styled-components";
import { ReactComponent as Plus } from "../assets/plus.svg";
import { ReactComponent as Minus } from "../assets/minus.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: 116px;
  height: 27px;

  .button {
    cursor: pointer;
  }
`;

const QuantityCounter = ({ quantity, onPlusClick, onMinusClick }) => {
  return (
    <Wrapper>
      <span onClick={onMinusClick} className="button">
        <Minus />
      </span>
      <span>{quantity}</span>
      <span onClick={onPlusClick} className="button">
        <Plus />
      </span>
    </Wrapper>
  );
};

export default QuantityCounter;
