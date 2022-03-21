import { CategoryContainer, BackgroundImage, CategoryBodyContainer } from "./category-item.style";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <CategoryContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;