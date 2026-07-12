import "../styles/productpage.css";
import ProductDiscription from "../components/ProductDiscription";
import ProductComments from "../components/ProductComments";
import ProductReview from "../components/ProductReview";
import { useEffect, useState } from "react";
import useFetchProduct from "../customHooks/useFetchProduct";
import {useParams} from "react-router-dom"
function ProductPage() {
  useEffect(()=>window.scrollTo(0, 0),[])
  const params=useParams()
  const [addComment,setAddComment]=useState()
  const {product,comments,}=useFetchProduct(params.id,addComment)
  return (
    <div className="product-page">
        <ProductDiscription product={product}/>
        <ProductComments setAddComment={setAddComment}  comments={comments}/>
        <ProductReview setAddComment={setAddComment}/>
    </div>
  );
}

export default ProductPage;
