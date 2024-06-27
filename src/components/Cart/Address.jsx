import { FormContainer, InputWrapper, InputLabel } from "./form.styled";
import InputField from "./InputField";

const Address = () => {
  return (
    <FormContainer>
      <InputWrapper>
        <InputLabel>姓名</InputLabel>
        <InputField
          placeholder="請輸入姓名"
          name="customerName"
          type="text"
          maxLength={20}
        />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>電話</InputLabel>
        <InputField
          placeholder="請輸入電話號碼"
          name="phoneNumber"
          type="text"
          maxLength={10}
        />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>電子郵件</InputLabel>
        <InputField
          placeholder="請輸入電子郵件"
          name="email"
          type="text"
          maxLength={30}
        />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>地址</InputLabel>
        <InputField
          placeholder="請輸入地址"
          name="address"
          type="text"
          maxLength={30}
        />
      </InputWrapper>
    </FormContainer>
  );
};

export default Address;
