import React, { useContext, useEffect, useState } from "react";
import OrderInformations from "../components/OrderInformations";
import OrderConfirmation from "../components/OrderConfirmation";
import "../styles/orderpage.css";
import { useNavigate } from "react-router-dom";
import appAxios from "../utils/AxiosConfig";
import { existUserContext } from "../context/UserContext";
import { toast } from "react-toastify";

function OrderPage() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!cart.length) {
      navigate(-1);
    }
  }, [cart, navigate]);
  const [orderInfos, setOrderInfos] = useState({
    address: "",
    orderAddress: "",
    paymentMethod: "on delivary",
  });

  function handleInfosChange(e) {
    setOrderInfos({ ...orderInfos, address: e.target.value });
  }
  function handleorderAddressChange(e) {
    setOrderInfos({ ...orderInfos, orderAddress: e.target.value });
  }
  function handlePaymentChange(e) {
    setOrderInfos({ ...orderInfos, paymentMethod: e.target.value });
  }
  const { existUser } = useContext(existUserContext);
  function postOrder(e) {
    e.preventDefault();
    if (orderInfos.address === "other address") {
      appAxios
        .put(
          "/api/user/update/" + existUser.user._id,
          { address: orderInfos.orderAddress },
          { headers: { authorization: existUser.token } }
        )
        .then((res) => console.log(res.data.data, "user updated"))
        .catch((e) => console.log(e));
    }

    const orderdProducts = cart.map((item) => {
      return { productId: item.product._id, quantity: item.quantity };
    });

    toast.promise(
      appAxios
        .post(
          "/api/order/postorder",   {
            orderdProducts,
            address: orderInfos.orderAddress,
            paymentMethod: orderInfos.paymentMethod,
          },
          { headers: { authorization: existUser.token } },
       
        )
        .then((res) => {
         
          setCart([]);
          localStorage.removeItem("cart");
          
        }).catch(e=>console.log(e))
   ,
      { pending: "loading", success: "success", error: "error" }
    );
  }
  return (
    <div className="order-container">
      <OrderInformations cart={cart} />
      <OrderConfirmation
        postOrder={postOrder}
        orderInfos={orderInfos}
        handleorderAddressChange={handleorderAddressChange}
        handleInfosChange={handleInfosChange}
        handlePaymentChange={handlePaymentChange}
      />
    </div>
  );
}

export default OrderPage;

