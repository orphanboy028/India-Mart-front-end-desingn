import React from "react";
import AdminLayOut from "../components/Admin/AdminLayOut";
import LayOut from "../components/LayOut";
import BuyLeadsComponent from "../components/Admin/BuyLeads/BuyLeadsComponent";
export default function BuyLeads() {
  return (
    <div>
      <LayOut>
        <AdminLayOut>
          <BuyLeadsComponent />
        </AdminLayOut>
      </LayOut>
    </div>
  );
}
