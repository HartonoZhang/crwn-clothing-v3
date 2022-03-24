import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import { Footer, Name, Price, ProductCardContainer } from './product-card.style';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button inverted onClick={() => addItemToCart(product)}>Add to card</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;