import ProductBox from "./ProductBox"
import '../styles/homeselection.css'
import { useEffect, useState } from "react"
import appAxios from "../utils/AxiosConfig"

function HomeMostRated() {
  const [mostRated,setMostRated]=useState([])
  useEffect(()=>{
    appAxios.get("/api/product/mostrated")
    .then(res=>setMostRated(res.data.data))
  },[])

  return (
    <div className="home-selection">
        <h2>TOP RATED PRODUCTS</h2>
        <div>
            {mostRated.map((element,i)=><ProductBox key={i} product={element}/>)}
        </div>
        
    </div>
  )
}

export default HomeMostRated