import { Rating } from "@mui/material";
import { toast } from "react-toastify";


function ProductDiscription({ product }) {
  function handleAddToCart() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const addedProduct = cart.find(
      (element) => element.product._id === product._id
    );
    if (!addedProduct) {
      cart.push({ product:product, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    toast.success('added')
  }

  return (
    <div className="product-desc">
      <div className="right">
        <img src={product.image} alt="" />
        <div className="rating">
          <h4>Product Rating :</h4>
          <Rating
            name="read-only"
            size="large"
            value={Math.round(product.rate?.rating)}
            readOnly
          />
        </div>
      </div>
      <div className="left">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4>{product.price} $</h4>
        <h5
          className={
            product.totalQuantity - product.saleCount
              ? "available"
              : "not-available"
          }
        >
          {product.totalQuantity - product.saleCount
            ? "available"
            : "not abailable"}
        </h5>
        {product.totalQuantity - product.saleCount ? (
          <button onClick={handleAddToCart}>add to cart</button>
        ) : (
          <button className="b-not-available" disabled>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductDiscription;
