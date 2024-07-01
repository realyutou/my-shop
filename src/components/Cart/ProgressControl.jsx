import styled from "styled-components";

const ProgressControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid #e6e6eb;
  font-size: 0.875rem;

  div {
    cursor: pointer;
  }

  p {
    margin: 0;
  }

  .next {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    width: 156px;
    height: 46px;
    background-color: #f67599;
    color: #ffffff;
  }

  .text-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    width: 77px;
  }

  @media screen and (min-width: 768px) {
    width: 50%;

    .next {
      width: 174px;
    }
  }

  .large {
    width: 100%;
  }
`;

const ProgressControl = ({ step, onPrevClick, onSubmitClick }) => {
  return (
    <ProgressControlContainer>
      {step > 1 && (
        <div className="text-wrapper prev" onClick={onPrevClick}>
          <p>
            <i className="fa-solid fa-arrow-left"></i>
          </p>
          <p>上一步</p>
        </div>
      )}
      <button
        type="submit"
        className={step === 1 ? "next large" : "next"}
        onClick={onSubmitClick}
      >
        <div className="text-wrapper">
          <p>{step === 3 ? "確認下單" : "下一步"}</p>
          <p>
            {step === 3 ? (
              <i className="fa-solid fa-cart-shopping"></i>
            ) : (
              <i className="fa-solid fa-arrow-right"></i>
            )}
          </p>
        </div>
      </button>
    </ProgressControlContainer>
  );
};

export default ProgressControl;
