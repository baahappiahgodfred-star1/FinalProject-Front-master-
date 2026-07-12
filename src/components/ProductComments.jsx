import React, { useContext } from "react";
import useFetchProduct from "../customHooks/useFetchProduct";
import { existUserContext } from "../context/UserContext";
import appAxios from "../utils/AxiosConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ProductComments({comments,setAddComment}) {
const navigate=useNavigate()
const {existUser}=useContext(existUserContext)
function handleDeleteComment(id){
  appAxios.delete("/api/comment/delete/"+id,{headers:{Authorization:existUser.token}})
  .then(res=>{setAddComment(Math.random())})
  .catch(e=>{
    toast.error('somthing went wrong')
    navigate('/login')
  })
}
  return (
    <div className="comments-container">
        <h1> Custemurs  Reviews</h1>
      {comments.map((comment) => {
        return (
          <div className="comment">
            <h4>{comment.userId._id==existUser?.user?._id?"me":comment.userId.name} :</h4>
            <p>{comment.comment} </p>
            {comment.userId._id==existUser?.user?._id ? <button style={{width:"150px"}} onClick={(e)=>handleDeleteComment(comment._id)}>delete</button>:null}
          </div>
        );
      })}
    </div>
  );
}

export default ProductComments;
