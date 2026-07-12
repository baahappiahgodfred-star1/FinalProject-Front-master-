import React from "react";
import appAxios from "../utils/AxiosConfig";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function ValidateUser() {
  const { hash } = useParams();
  const navigate = useNavigate();
  appAxios
    .get("/api/auth/validateUser/" + hash)
    .then((res) => {
      if (res.data == "SUCCESS") {
        toast.success("success");
       setTimeout(()=> navigate("/login"),1000)
      }
    })
    .catch((e) => console.log(e));
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default ValidateUser;
