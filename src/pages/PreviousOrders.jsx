import React from "react";
import { useNavigate } from "react-router-dom";
import PrevOrderBox from "../components/PrevOrderBox";
import "../styles/prevorderspage.css"
import useFectOrdes from "../customHooks/useFectOrdes";


function PreviousOrders() {
  const navigate = useNavigate();
  const prevOrders=useFectOrdes()
  return (
    <div className="oldorders-container">
      <h2>orders </h2>

      <div className="oldorders-boxes">
        {prevOrders.map((order) => (
   
          <PrevOrderBox order={order}  />
        ))}
      </div>
      <div className="back">
        <h4 onClick={() => navigate(-1)}>
          <i class="fa-solid fa-arrow-left"></i>
        </h4>
      </div>
    </div>
    
  );
}

export default PreviousOrders;
