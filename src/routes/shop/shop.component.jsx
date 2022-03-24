import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";

import { ProductsContainer } from "./shop.style";

import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductsContext)

  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductsContainer>
  );
};

export default Shop;
