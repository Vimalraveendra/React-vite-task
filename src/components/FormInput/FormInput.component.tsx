import { InputHTMLAttributes,FC } from "react";

import "./FormInput.styles.css"

type FormInputProps={
legend:string
}&  InputHTMLAttributes<HTMLInputElement>

const FormInput:FC<FormInputProps> = ({ legend, ...otherProps }) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <input {...otherProps} />
    </fieldset>
  );
};

export default FormInput;