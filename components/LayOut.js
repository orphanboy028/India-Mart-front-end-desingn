import React from "react";
import HeroSlide from "./heroSection/HeroSlide";
import NavBar from "./NavBar/NavBar";

export default function LayOut({ children }) {
  return (
    <>
      <div>
        <NavBar />
      </div>

      <div>
        <HeroSlide />
      </div>

      <div>{children}</div>

      <div id="footer_container">
        <p>Ftooter</p>
      </div>
    </>
  );
}
