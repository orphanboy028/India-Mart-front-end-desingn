import React from "react";
import style from "../Admin/css/Admin.module.css";
import SideBarOptions from "./SideBarOptions";
export default function AdminLayOut({ children }) {
  return (
    <>
      <div className={`${style.adminLayout_main_container}`}>
        <div className={style.sidebar_options_container}>
          <SideBarOptions />
        </div>

        <div className={style.options_feature_container}>{children}</div>
      </div>
    </>
  );
}
