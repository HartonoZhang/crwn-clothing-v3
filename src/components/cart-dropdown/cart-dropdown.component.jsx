import Button from '../button/button.component';
import { CartDropdownContainer, CartItems } from './cart-dropdown.style';

const CartDropdown = () => (
  <CartDropdownContainer>
    <CartItems />
    <Button>GO TO CHECKOUT</Button>
  </CartDropdownContainer>
);

export default CartDropdown;