import React, { useEffect, useState } from 'react'
import appAxios from "../utils/AxiosConfig"
import {toast} from "react-toastify"
function useFetchProduct(id,addcomment) {
    const [product,setProduct]=useState({})
      const [comments,setComments]=useState([])
    useEffect(()=>{
            // appAxios.get('/api/product/item/'+id)
            // .then((res)=>setProduct(res.data.data))
            // .catch(error=>toast.error(error.message))

            // appAxios.get('/api/comment/getcomments/'+id)
            // .then((res)=>setComments(res.data.data))
            // .catch(error=>toast.error(error.message))
            Promise.all([ appAxios.get('/api/product/item/'+id), appAxios.get('/api/comment/getcomments/'+id)])
            .then(res=>{setProduct(res[0].data.data);setComments(res[1].data.data)}).catch(e=>console.log(e))
    },[id,addcomment])
  return {product,comments}

}

export default useFetchProduct