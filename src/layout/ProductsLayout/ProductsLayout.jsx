import React from "react";
import DescriptionSection from "./Components/DescriptionSection";
import ProductsHeaderSection from "./Components/ProductsHeaderSection";
import ProductsSection from "./Components/ProductsSection";

function ProductsLayout() {
  return (
    <div>
      <ProductsHeaderSection />
      <ProductsSection />
      <DescriptionSection />
    </div>
  );
}

export default ProductsLayout;
