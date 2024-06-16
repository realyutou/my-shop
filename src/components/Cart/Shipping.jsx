import styled from "styled-components";
import { FormContainer, RadioWrapper } from "./form.styled";

const StyledDiv = styled.div`
  flex: auto;
  margin-left: 20px;

  .shipping-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2px;
  }

  p {
    margin: 0;
  }

  .shipping-title {
    font-weight: 700;
    font-size: 0.875rem;
  }
`;

const Shipping = () => {
  return (
    <FormContainer>
      <RadioWrapper>
        <input id="shipping-standard" type="radio" name="shipping" />
        <StyledDiv>
          <div className="shipping-type">
            <p className="shipping-title">基本運送</p>
            <p>$0</p>
          </div>
          <div className="shipping-info">
            <p>約3 ~ 5個工作天</p>
          </div>
        </StyledDiv>
      </RadioWrapper>
      <RadioWrapper>
        <input id="shipping-24hrs" type="radio" name="shipping" />
        <StyledDiv>
          <div className="shipping-type">
            <p className="shipping-title">24小時快捷運送</p>
            <p>$100</p>
          </div>
          <div className="shipping-info">
            <p>24小時內送達</p>
          </div>
        </StyledDiv>
      </RadioWrapper>
    </FormContainer>
  );
};

export default Shipping;
