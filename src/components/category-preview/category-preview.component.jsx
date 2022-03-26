import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { CategoryPreviewContainer, PreviewContainer, TitleText } from "./category-preview.style";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(title);

  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleText onClick={onNavigateHandler}>{title.toUpperCase()}</TitleText>
      </h2>
      <PreviewContainer>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
