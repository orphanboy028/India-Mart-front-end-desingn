import React from "react";
import Image from "next/image";
import baner1 from "../../public/categoroes-banner/building-construction.jpg";
import catimage from "../../public/categoroes-banner/Turning-Fixture-1.png";
import style from "./css/Home.module.css";
export default function IndustrialPlants() {
  return (
    <>
      <div>
        <div className={`${style.product_container}`}>
          <div className="Product_heading">
            <h1>Building Construction Material & Equipment</h1>
          </div>
          <div className={`${style.categories_container}`}>
            <div className={`${style.Categories_banner_part}`}>
              Category banner
            </div>
            <div className={`${style.categories_content_part}`}>
              {/* row start */}
              <div className={`${style.categroies_row}`}>
                <div className={`${style.categories_card}`}>
                  <div className={`${style.card_image}`}>
                    <Image src={catimage} width={100} height={100} />
                  </div>
                  <div className={`${style.card_content}`}>
                    <h3>Brick Making Machines</h3>
                    <p>
                      Fly Ash Brick Making Machine Clay Brick Making Machine
                      Cement Brick Making Machine
                    </p>
                  </div>
                </div>

                <div className={`${style.categories_card}`}>
                  <div className={`${style.card_image}`}>
                    <Image src={catimage} width={100} height={100} />
                  </div>
                  <div className={`${style.card_content}`}>
                    <h3>Brick Making Machines</h3>
                    <p>
                      Fly Ash Brick Making Machine Clay Brick Making Machine
                      Cement Brick Making Machine
                    </p>
                  </div>
                </div>

                <div className={`${style.categories_card}`}>
                  <div className={`${style.card_image}`}>
                    <Image src={catimage} width={100} height={100} />
                  </div>
                  <div className={`${style.card_content}`}>
                    <h3>Brick Making Machines</h3>
                    <p>
                      Fly Ash Brick Making Machine Clay Brick Making Machine
                      Cement Brick Making Machine
                    </p>
                  </div>
                </div>
              </div>
              {/* row end */}

              {/* row start */}
              <div className={`${style.categroies_row}`}>
                <div className={`${style.categories_card}`}>
                  <div className={`${style.card_image}`}>
                    <Image src={catimage} width={100} height={100} />
                  </div>
                  <div className={`${style.card_content}`}>
                    <h3>Brick Making Machines</h3>
                    <p>
                      Fly Ash Brick Making Machine Clay Brick Making Machine
                      Cement Brick Making Machine
                    </p>
                  </div>
                </div>

                <div className={`${style.categories_card}`}>
                  <div className={`${style.card_image}`}>
                    <Image src={catimage} width={100} height={100} />
                  </div>
                  <div className={`${style.card_content}`}>
                    <h3>Brick Making Machines</h3>
                    <p>
                      Fly Ash Brick Making Machine Clay Brick Making Machine
                      Cement Brick Making Machine
                    </p>
                  </div>
                </div>

                <div className={`${style.categories_card}`}>
                  <div className={`${style.card_image}`}>
                    <Image src={catimage} width={100} height={100} />
                  </div>
                  <div className={`${style.card_content}`}>
                    <h3>Brick Making Machines</h3>
                    <p>
                      Fly Ash Brick Making Machine Clay Brick Making Machine
                      Cement Brick Making Machine
                    </p>
                  </div>
                </div>
              </div>
              {/* row end */}
              {/* row start */}
              <div className={`${style.categroies_row}`}>
                <div className={`${style.categories_card}`}>
                  <div className={`${style.card_image}`}>
                    <Image src={catimage} width={100} height={100} />
                  </div>
                  <div className={`${style.card_content}`}>
                    <h3>Brick Making Machines</h3>
                    <p>
                      Fly Ash Brick Making Machine Clay Brick Making Machine
                      Cement Brick Making Machine
                    </p>
                  </div>
                </div>

                <div className={`${style.categories_card}`}>
                  <div className={`${style.card_image}`}>
                    <Image src={catimage} width={100} height={100} />
                  </div>
                  <div className={`${style.card_content}`}>
                    <h3>Brick Making Machines</h3>
                    <p>
                      Fly Ash Brick Making Machine Clay Brick Making Machine
                      Cement Brick Making Machine
                    </p>
                  </div>
                </div>

                <div className={`${style.categories_card}`}>
                  <div className={`${style.card_image}`}>
                    <Image src={catimage} width={100} height={100} />
                  </div>
                  <div className={`${style.card_content}`}>
                    <h3>Brick Making Machines</h3>
                    <p>
                      Fly Ash Brick Making Machine Clay Brick Making Machine
                      Cement Brick Making Machine
                    </p>
                  </div>
                </div>
              </div>
              {/* row end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
