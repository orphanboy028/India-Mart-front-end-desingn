import React, { useState } from "react";
import Image from "next/image";
import logoImg from "../../public/digitalUnifer.png";
import locationIcon from "../../public/location-pin.png";
import arrowIcon from "../../public/down-arrow.png";
import userImg from "../../public/user.png";
import lead from "../../public/selective.png";
import seller from "../../public/seller.png";

export default function NavBar() {
  const [dopDown, setDopDown] = useState(false);

  const showDropDown = () => {
    setDopDown(true);
  };

  const hideDropDown = () => {
    setDopDown(false);
  };
  return (
    <>
      {/* Navbar Main container Start */}
      <div id="main_container">
        <div className="left_Part">
          <div className="Brand_Box">
            <Image src={logoImg} alt="image" width={70} />
          </div>
          {/*Search part Start  */}
          <div className="search_box">
            <div className="searchBar_box">
              <div className="location_box">
                <div className="location_icon">
                  <Image src={locationIcon} alt="image" width={25} />
                </div>
                <div className="location_name">
                  <p> All India</p>
                </div>
                <div className="ClickArrow">
                  <Image src={arrowIcon} alt="image" width={20} />
                </div>
              </div>
              <div className="searchInput">
                <input
                  type="text"
                  placeholder="Enter Product / services to search"
                />
                <button className="Search_btn">Search</button>
              </div>
            </div>
          </div>
          {/*Search part End  */}
          <div className="getBestPrices_box">
            <button>Get Best Price</button>
          </div>
        </div>
        <div className="right_part">
          <div className="box-s1">
            <div className="MenuBox">
              <Image src={lead} alt="image" width={20} />
              <p>Leads</p>
            </div>
          </div>
          <div className="box-s1">
            <div className="MenuBox">
              <Image src={seller} alt="image" width={20} />
              <p>Seller</p>
            </div>
          </div>
          <div className="box-s1">
            <div
              className="MenuBox"
              onMouseEnter={showDropDown}
              onMouseLeave={hideDropDown}
            >
              <Image src={userImg} alt="image" width={20} />
              <p>Login</p>
            </div>
          </div>
        </div>
        {/* Droop Down Box start */}
        <div
          id="User_DopDown_Container"
          style={{ display: dopDown ? "flex" : "none" }}
          onMouseEnter={showDropDown}
          onMouseLeave={hideDropDown}
        >
          <p>PAWAN </p>
          <p>9813707848</p>
          <p>verified custome</p>
        </div>
        {/* Drop Down Box End */}
      </div>
      {/* Navbar Main container End */}
    </>
  );
}
