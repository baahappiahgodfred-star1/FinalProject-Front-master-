import { MenuItem, Select } from "@mui/material";
import { useContext } from "react";
import { existUserContext } from "../context/UserContext";


function OrderConfirmation({
  handlePaymentChange,
  handleInfosChange,
  orderInfos,
  handleorderAddressChange,
  postOrder

}) {

  const {existUser}=useContext(existUserContext)


  return (
    <div className="order-confirm">
      <h2> complete your order</h2>
      <form onSubmit={postOrder}>
        <h4>select adress</h4>
        <div>
          <div>
            <label htmlFor="">your account adress:</label>
            <input
              type="radio"
              name="userAdress"
              value={"personal address"}
              onChange={handleInfosChange}
              
            />
            
          </div>
          <div
              className="hidden-input"
              style={{
                display:
                  orderInfos.address === "personal address" ? "block" : "none",
              }}
            >
              <select name="address" onChange={handleorderAddressChange}>
                <option selected>choose your address</option>
                {existUser.user.addresses.map(adress=><option value={adress}>{adress}</option>)}
              </select>
            </div>
          <div>
            <label htmlFor="">other adress</label>
            <input
              type="radio"
              name="userAdress"
              value={"other address"}
              onChange={handleInfosChange}
            />
     
          </div>

          <div
            className="hidden-input"
            style={{
              display:
                orderInfos.address === "other address" ? "block" : "none",
            }}
          >
            <input type="text" onChange={handleorderAddressChange}/>
          </div>
        </div>

        <div>
          <h2>payment method :</h2>
          <Select
            value={orderInfos.paymentMethod}
            onChange={handlePaymentChange}
            inputProps={{ "aria-label": "Without label" }}
          >

            <MenuItem selected={true} value={"on delivery"}  >on delivary</MenuItem>
            <MenuItem id="myRadioField" value={"paypal"}>paypal</MenuItem>
          </Select>
    
          <div id="paypal-button-container"></div>
        </div>
       
        <input type="submit" />
      </form>
    </div>
  );
}

export default OrderConfirmation;
