import React from "react";
import style from "../Banners/Baner.module.css";
import Image from "next/image";
import addbaner from "../../public/ads-banner/banner-1.png";
export default function Baner() {
  return (
    <>
      <div className={`${style.banner_container}`}>
        <Image src={addbaner} width={900} height={150} />
      </div>
    </>
  );
}
