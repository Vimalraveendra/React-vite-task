import { ButtonHTMLAttributes, FC } from "react";
import "./Button.styles.css";


type Enum<T> = T[keyof T];
const  BUTTON_TYPE_CLASS={
  primary: "primary",
  secondary: "secondary",
  danger: "danger",
} as const ;

type buttonTypeEnum = Enum<typeof BUTTON_TYPE_CLASS>; 

export type ButtonProps={
    children:React.ReactNode;
   buttonType:buttonTypeEnum;
}& ButtonHTMLAttributes<HTMLButtonElement>

const Button:FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASS[buttonType]} `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;