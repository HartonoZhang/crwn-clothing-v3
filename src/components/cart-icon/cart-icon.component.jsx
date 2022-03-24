import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIconImg,
} from "./cart-icon.style";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer>
      <ShoppingIconImg onClick={toggleCartOpen} />
      <ItemCount>0</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
