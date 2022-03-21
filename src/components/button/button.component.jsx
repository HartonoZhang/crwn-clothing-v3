import { ButtonContainer } from "./button.style";

const Button = ({ children, ...otherProps }) => {
  return <ButtonContainer {...otherProps}>{children}</ButtonContainer>;
};

export default Button;
