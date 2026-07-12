import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CartBox from "../components/CartBox";
import "../styles/cartpage.css";
import { useEffect, useState } from "react";

function CartPage() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart"))||[]);
  const navigate = useNavigate();

useEffect(()=>{
  if(!cart.length) {
    
     navigate(-1)}
},[cart,navigate])
  function incQuantity(id) {
    const newCart = cart.map((item) =>
      item.product._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  function decQuantity(id) {
    const newCart = cart.map((item) =>
      item.product._id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  function deleteProduct(id) {
    return function () {
      const newCart = cart.filter((item) => item.product._id !== id);
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    };
  }

  return (
    <div className="cart-container">
      <div className="cart-boxes">
        {cart.map((item) => (
          <CartBox
            item={item}
            incQuantity={incQuantity}
            deleteProduct={deleteProduct}
            decQuantity={decQuantity}
          />
        ))}
      </div>
      <div className="back">
        <h4 onClick={() => navigate(-1)}>
          <i class="fa-solid fa-arrow-left"></i>
        </h4>
        <h5>{Math.round(cart.reduce((acc,item)=>acc+item.product.price*item.quantity,0))}</h5>
        <Link to={"/order"}>
          {" "}
          <Button> order now</Button>
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
