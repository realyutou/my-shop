import styled from "styled-components";

const FormContainer = styled.div`
  @media screen and (min-width: 768px) {
    height: 330px;
  }
`;

const InputWrapper = styled.div`
  margin: 0px auto 16px auto;
  height: 64px;
`;

const InputLabel = styled.div`
  margin-bottom: 8px;
  font-size: 0.75rem;
  color: #808080;
`;

const StyledInput = styled.input`
  border: 1px solid #4a4a4a;
  border-radius: 5px;
  padding: 0px 18px;
  height: 40px;
  width: 90%;
`;

const RadioWrapper = styled.label`
  display: flex;
  align-items: center;
  margin: 0px auto 16px auto;
  padding: 0px 20px;
  border: 1px solid #2a2a2a;
  border-radius: 5px;
  height: 60px;
  font-size: 0.75rem;

  input {
    height: 20px;
    width: 20px;
  }
`;

export { FormContainer, InputWrapper, InputLabel, StyledInput, RadioWrapper };
