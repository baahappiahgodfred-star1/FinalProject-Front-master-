import React from "react";
import Button from "./Button";
import { baseURL } from "../utils/AxiosConfig";

function CartBox({item,incQuantity,decQuantity,deleteProduct}) {
  return (
    <div className="cart-box">
      <img src={baseURL+item.product.image} alt="" />
      <h4> {item.product.title}</h4>
      <p>price: {item.product.price*item.quantity}  DT</p>
      <div>
        <button onClick={()=>incQuantity(item.product._id)} >+</button>
        <h5>{item.quantity}</h5>
        <button onClick={()=>decQuantity(item.product._id)}  disabled={item.quantity>1?false:true}>-</button>
        <button onClick={deleteProduct(item.product._id)}>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default CartBox;
