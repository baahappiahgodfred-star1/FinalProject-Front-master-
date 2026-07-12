import React, { useEffect, useRef, useState } from "react";
import ProductBox from "./ProductBox";
import PaginationButtons from "./PaginationButtons";
import appAxios from "../utils/AxiosConfig";
import Search from "./Search";
import { toast } from "react-toastify";

function Pagination({search}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  let productsCount = useRef(0);
  const postsPerPage = 10;
  const paginate = (value) => setCurrentPage(value);
const test=useRef(true)



  useEffect(() => {

    appAxios
      .get(`/api/product/pagination?page=${currentPage}&posts=${postsPerPage}&title=${search.title}&category=${search.category}`)
      .then((res) => {
        setProducts(res.data.data.products);
        productsCount.current = res.data.data.productsCount;
        test.current=true
      }).catch(e=>{
        if(e.response.data.status=="FAIL" && test.current===true){
          toast.dismiss(
          )
    toast.error(e.response.data.error)
            test.current=false
          setProducts([])
        }
      })
   
 
  }, [currentPage,search]);
  useEffect(()=>{
    setCurrentPage(1)
  },[search])

  return (

    <div className="pagination-container" id="pagination-container">

      <h1>shop now</h1>
      <div className="products">
        {products.map((prod) => (
          <ProductBox key={prod} product={prod} />
        ))}
      </div>
      <PaginationButtons
        productsPerPage={postsPerPage}
        currentPage={currentPage}
        totalPosts={productsCount.current}
        paginate={paginate}
      />
    </div>
  );
}

export default Pagination;
