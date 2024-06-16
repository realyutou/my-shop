import styled from "styled-components";
import { ReactComponent as Check } from "../../assets/check.svg";

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .step-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .step {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000000;
    border-radius: 50%;
    height: 32px;
    width: 32px;
  }

  .progress-bar {
    border: 1px solid #f0f0f5;
    width: 60px;
  }

  .step-title {
    display: none;
  }

  .done {
    border-color: #000000;
    background-color: #333333;
  }

  .undone {
    border-color: #afb1bd;
    color: #afb1bd;
  }

  @media screen and (min-width: 768px) {
    .step-wrapper {
      width: 96px;
    }

    .step {
      width: 24px;
      height: 24px;
    }

    .step-title {
      display: block;
    }
  }
`;

const Progress = ({ step }) => {
  return (
    <ProgressContainer>
      <div className="step-wrapper">
        <div className={"step" + (step > 1 ? " done" : "")}>
          <span>{step === 1 ? "1" : <Check />}</span>
        </div>
        <p className="step-title">寄送地址</p>
      </div>
      <div className="progress-bar done"></div>
      <div className="step-wrapper">
        <div
          className={
            "step" + (step < 2 ? " undone" : "") + (step > 2 ? " done" : "")
          }
        >
          <span>{step > 2 ? <Check /> : "2"}</span>
        </div>
        <p className={"step-title" + (step < 2 ? " undone" : "")}>運送方式</p>
      </div>
      <div className={"progress-bar" + (step > 1 ? " done" : "")}></div>
      <div className="step-wrapper">
        <div className={"step" + (step < 3 ? " undone" : "")}>
          <span>3</span>
        </div>
        <p className={"step-title" + (step === 3 ? "" : " undone")}>付款資訊</p>
      </div>
    </ProgressContainer>
  );
};

export default Progress;
