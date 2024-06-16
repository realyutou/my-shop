import {
  FormContainer,
  InputWrapper,
  InputLabel,
  StyledInput,
} from "./form.styled";

const Address = () => {
  return (
    <FormContainer>
      <InputWrapper>
        <InputLabel>姓名</InputLabel>
        <StyledInput placeholder="請輸入姓名" />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>電話</InputLabel>
        <StyledInput placeholder="請輸入電話號碼" />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>電子郵件</InputLabel>
        <StyledInput placeholder="請輸入電子郵件" />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>地址</InputLabel>
        <StyledInput placeholder="請輸入地址" />
      </InputWrapper>
    </FormContainer>
  );
};

export default Address;
