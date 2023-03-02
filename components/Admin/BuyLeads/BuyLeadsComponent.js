import React from "react";
import style from "../../Admin/css/BuyLeadsComponent.module.css";
import BuyLeadsCard from "./BuyLeadsCard";

export default function BuyLeadsComponent() {
  return (
    <>
      <div className={style.buy_Leads_main_container}>
        <div className={style.top_fillter_bar_container}>
          <div className={style.top_bar_leads_option_box}>Relevant Leads</div>
          <div className={style.top_bar_leads_option_box}>Recent Leads</div>
          <div className={style.top_bar_leads_option_box}>Export Leads</div>
          <div className={style.top_bar_leads_option_box}>consumer Leads</div>
        </div>

        <div className={`${style.leads_container}`}>
          <BuyLeadsCard />
        </div>
      </div>
    </>
  );
}
