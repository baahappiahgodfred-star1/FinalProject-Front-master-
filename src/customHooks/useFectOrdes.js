import React, { useContext, useEffect, useState } from 'react'
import appAxios from '../utils/AxiosConfig'
import { existUserContext } from '../context/UserContext'
import { toast } from 'react-toastify'

function useFectOrdes() {
    const {existUser,setExistUser}=useContext(existUserContext)
    const [userOrders,setUserOrders]=useState([])
    useEffect(()=>{
    appAxios.get("/api/order/userorders",{headers:{Authorization:existUser.token}})
        .then(res=>{
            console.log(res)
            if(res.data.status=="SUCCESS")setUserOrders(res.data.data)
                else toast.error("somthing went wrong")
        })
        .catch(e=>{
          if(e.response.data.message=="unauthorized"){
            setExistUser(null)
            localStorage.removeItem('user')
          }
        })
    },[])
  return (
    userOrders
  )
}

export default useFectOrdes