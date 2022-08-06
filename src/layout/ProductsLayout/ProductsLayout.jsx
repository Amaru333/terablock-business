import React from "react";
import DescriptionSection from "./Components/DescriptionSection";
import FeaturedInSection from "./Components/FeaturedInSection";
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
      <FeaturedInSection />
    </div>
  );
}

export default ProductsLayout;
