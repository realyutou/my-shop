import { FormContainer, InputWrapper, InputLabel } from "./form.styled";
import InputField from "./InputField";

const Checkout = () => {
  return (
    <FormContainer>
      <InputWrapper>
        <InputLabel>持卡人姓名</InputLabel>
        <InputField
          placeholder="請輸入持卡人姓名"
          name="holderName"
          type="text"
          maxLength={20}
        />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>卡號</InputLabel>
        <InputField
          placeholder="1111 2222 3333 4444"
          name="cardNumber"
          type="text"
          maxLength={19}
        />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>有效期限</InputLabel>
        <InputField
          placeholder="MM/YY"
          name="expiryDate"
          type="text"
          maxLength={5}
        />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>CVC/CCV</InputLabel>
        <InputField placeholder="123" name="cvc" maxLength={3} />
      </InputWrapper>
    </FormContainer>
  );
};

export default Checkout;
