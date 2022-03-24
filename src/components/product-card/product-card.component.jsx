import Button from '../button/button.component';
import { Footer, Name, Price, ProductCardContainer } from './product-card.style';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button inverted>Add to card</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;