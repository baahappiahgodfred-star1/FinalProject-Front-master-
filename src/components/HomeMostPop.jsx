import ProductBox from "./ProductBox"
import '../styles/homeselection.css'
import { useEffect, useState } from "react"
import appAxios from "../utils/AxiosConfig"

function HomeMostPop() {
  const [mostPop,setMostPop]=useState([])
  useEffect(()=>{
    appAxios.get("/api/product/mostpopular")
    .then(res=>setMostPop(res.data.data))
  },[])

  return (
    <div className="home-selection">
        <h2>MOST POPULAR PRODUCTS</h2>
        <div>
            {mostPop.map((element,i)=><ProductBox key={i} product={element}/>)}
        </div>
        
    </div>
  )
}

export default HomeMostPop