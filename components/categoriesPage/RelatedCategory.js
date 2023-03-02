import React from "react";
import style from "./css/Categories.module.css";

const categoriesList = [
  "Tissue Paper Making Machine",
  "Paper Making Machines",
  "Paper Napkin Making Machine",
  "Paper Mill Machinery",
  "Paper Folding Machines",
  "Paper Roll Making Machine",
  "Waste Paper Recycling Machine",
  "Paper Slitting Machines",
  "Paper Corrugating Machine",
  "Paper Cover Making Machine",
  "Used Paper Cup Machines",
  "Sheet Metal Folding Machine",
  "Paper Coating Machine",
  "Kraft Paper Making Machine",
  "Facial Tissue & Wet Wipe Making Machine",
];

export default function RelatedCategory() {
  const listOfCategories = () => {
    return categoriesList.map((el, i) => {
      return (
        <>
          <p>{el}</p>
        </>
      );
    });
  };

  return (
    <div className={`${style.related_categories_box}`}>
      <h4>Related categories</h4>
      <div>{listOfCategories()}</div>
    </div>
  );
}
