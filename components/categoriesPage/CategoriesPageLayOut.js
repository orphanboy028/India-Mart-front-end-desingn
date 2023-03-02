import React from "react";
import style from "./css/Categories.module.css";
import ProductCards from "./ProductCards";
import RelatedCategory from "./RelatedCategory";

export default function CategoriesPageLayOut() {
  return (
    <>
      <div className={`${style.Item_Container}`}>
        <div className={`${style.sidePart}`}>
          <RelatedCategory />
        </div>
        <div className={`${style.product_container}`}>
          <ProductCards />
        </div>
      </div>
    </>
  );
}
