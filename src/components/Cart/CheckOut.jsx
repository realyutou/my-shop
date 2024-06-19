import {
  FormContainer,
  InputWrapper,
  InputLabel,
  StyledInput,
} from "./form.styled";

const Checkout = () => {
  return (
    <FormContainer>
      <InputWrapper>
        <InputLabel>持卡人姓名</InputLabel>
        <StyledInput placeholder="請輸入持卡人姓名" />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>卡號</InputLabel>
        <StyledInput placeholder="1111 2222 3333 4444" />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>有效期限</InputLabel>
        <StyledInput placeholder="MM/YY" />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>CVC/CCV</InputLabel>
        <StyledInput placeholder="123" />
      </InputWrapper>
    </FormContainer>
  );
};

export default Checkout;
