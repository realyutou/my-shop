import { StyledInput } from "./form.styled";
import { useField, ErrorMessage } from "formik";

const InputField = ({ ...props }) => {
  const [field] = useField(props);

  return (
    <>
      <StyledInput {...props} {...field} />
      <ErrorMessage component="p" name={field.name} className="form-message" />
    </>
  );
};

export default InputField;
