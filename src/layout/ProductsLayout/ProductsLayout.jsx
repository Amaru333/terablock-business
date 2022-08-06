import React from "react";
import DescriptionSection from "./Components/DescriptionSection";
import ProductsHeaderSection from "./Components/ProductsHeaderSection";
import ProductsSection from "./Components/ProductsSection";
import RecentNewsSection from "./Components/RecentNewsSection";

function ProductsLayout() {
  return (
    <div>
      <ProductsHeaderSection />
      <ProductsSection />
      <DescriptionSection />
      <RecentNewsSection />
    </div>
  );
}

export default ProductsLayout;
