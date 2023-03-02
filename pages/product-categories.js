import React from "react";
import CategoriesPageBanders from "../components/Banners/CategoriesPageBanders";
import CategoriesPageLayOut from "../components/categoriesPage/CategoriesPageLayOut";
import LayOut from "../components/LayOut";

export default function ProductCategories() {
  return (
    <>
      <LayOut>
        <CategoriesPageBanders />
        <CategoriesPageLayOut />
      </LayOut>
    </>
  );
}
