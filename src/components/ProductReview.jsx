import { Fab, Rating } from "@mui/material";
import { useContext, useState } from "react";
import Button from "./Button";
import appAxios from "../utils/AxiosConfig";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { existUserContext } from "../context/UserContext";

function ProductReview({setAddComment}) {
  const [open, setOpen] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const {existUser}=useContext(existUserContext)
  function handleSubmitComment(event) {
    event.preventDefault();
    toast.loading('loading')
      appAxios
        .post("/api/comment/addcomment/" + params.id, {
          comment: event.target.comment.value,
          rating: event.target["size-large"].value,
        },{headers:{Authorization:existUser.token}}).then(res=>{
          toast.dismiss()
          toast.success('message added ')
        setAddComment(Math.random())
        })
        .catch((error) => {
      
          if (error.response.data.message == "unauthorized") {
            toast.dismiss()
            toast.error('you must login')
            navigate("/login");
          }
        })
      
  
  }

  return (
    <div className="product-review">
      <div className="open-review">
        <Fab
          className="button"
          onClick={() => setOpen(!open)}
          color="primary"
          aria-label="add"
        >
          {open ? "-" : "+"}
        </Fab>
      </div>

      <form
        onSubmit={handleSubmitComment}
        className={
          open ? "add-review-open add-review" : "add-review-close add-review"
        }
      >
        <div className="input">
          <h4>Add your comment</h4>
          <textarea
            name="comment"
            placeholder="your comment here ..."
          ></textarea>
        </div>
        <div>
          <h5>rate this product</h5>
          <Rating name="size-large" defaultValue={0} size="large" />
        </div>
        <Button>add comment</Button>
      </form>
    </div>
  );
}

export default ProductReview;
