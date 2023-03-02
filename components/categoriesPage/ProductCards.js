import React from "react";
import style from "./css/Categories.module.css";
import Image from "next/image";
import productImage1 from "../../public/product-images/Jig fixture-2.png";

const cardsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const cardsList = () => {
  return cardsNumbers.map((el, i) => {
    return (
      <>
        <div className={`${style.product_card_container}`}>
          {/* Image part start */}
          <div className={`${style.product_Image_Container}`}>
            <Image src={productImage1} width={200} height={200} />
          </div>
          {/* Image part End */}
          {/* product content part start */}
          <div className={`${style.card_container}`}>
            <h2>Special Purpose Machineries</h2>
            <h2 style={{ marginTop: "10px" }}>₹ 1 Lakh</h2>
            <p style={{ marginTop: "10px" }}>
              We are leading manufacturer and exporter of Special Purpose
              Machineries and our product is made up of good quality.
            </p>
            <button className={`${style.get_best_deal_btn}`}>
              Get Best Deal
            </button>
          </div>
          {/* product content part End */}
          {/* suplere part start */}
          <div className={`${style.suppliner_part}`}>
            <h5>Metal Power Analytical Private Limited</h5>
            <p>Andheri East, Mumbai</p>
            <div className={`${style.suppler_number_container}`}>
              <h3 style={{ marginTop: "50px" }}>Call 08048966938</h3>
            </div>

            <div className={style.supplier_contact_btn_container}>
              <button>Contact to supplier</button>
            </div>
          </div>
          {/* suplere part End */}
        </div>
      </>
    );
  });
};

export default function ProductCards() {
  return (
    <>
      <div>{cardsList()}</div>
    </>
  );
}
