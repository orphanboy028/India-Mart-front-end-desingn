import React from "react";
import style from "../Admin/css/Admin.module.css";
import Image from "next/image";
import home from "../../public/admin-icons/home.png";
import BuyLeads from "../../public/admin-icons/stats.png";
import Link from "next/link";
export default function SideBarOptions() {
  return (
    <>
      <div className={`${style.sideBar_container}`}>
        <div className={style.icons_box}>
          <Link href={"/admin-dash-board"}>
            <Image src={home} width={20} />
            <p style={{ marginTop: "10px" }}>Dash Board</p>
          </Link>
        </div>

        <div className={style.icons_box}>
          <Link href={"/buy-leads"}>
            <Image src={BuyLeads} width={20} />
            <p style={{ marginTop: "10px" }}>Buy Leads</p>
          </Link>
        </div>

        <div className={style.icons_box}>
          <Image src={home} width={20} />
          <p style={{ marginTop: "10px" }}>Dash Board</p>
        </div>

        <div className={style.icons_box}>
          <Image src={home} width={20} />
          <p style={{ marginTop: "10px" }}>Dash Board</p>
        </div>

        <div className={style.icons_box}>
          <Image src={home} width={20} />
          <p style={{ marginTop: "10px" }}>Dash Board</p>
        </div>

        <div className={style.icons_box}>
          <Image src={home} width={20} />
          <p style={{ marginTop: "10px" }}>Dash Board</p>
        </div>

        <div className={style.icons_box}>
          <Image src={home} width={20} />
          <p style={{ marginTop: "10px" }}>Dash Board</p>
        </div>
      </div>
    </>
  );
}
