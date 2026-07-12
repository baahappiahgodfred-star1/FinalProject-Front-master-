import React, { useContext, useState } from "react";
import "../styles/profilepage.css";
import { existUserContext } from "../context/UserContext";
import appAxios, { baseURL } from "../utils/AxiosConfig";


const ProfilePage = () => {
  const { existUser, setExistUser } = useContext(existUserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState(existUser.user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormValues({ ...formValues, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
    const formData=new FormData()
    formData.append("avatar",file)
    appAxios.put('/api/user/updateimage/'+existUser.user._id,formData,{headers:{Authorization:existUser.token}})
    .then(res=>  localStorage.setItem("user",JSON.stringify({token:existUser.token,user:res.data.data})))
    .then(()=> setExistUser(JSON.parse(localStorage.getItem("user"))))
    .catch(e=>console.log(e))
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    appAxios
      .put(
        "/api/user/update/" + existUser.user._id,
        {
          name: formValues.name,
          address: formValues.address,
          phone: formValues.phone,
        },
        { headers: { Authorization: existUser.token } }
      )
      .then((res) =>{console.log(res.data.data)
        localStorage.setItem("user",JSON.stringify({token:existUser.token,user:res.data.data}))
       
    }).then(res=>{      console.log(existUser)
      setExistUser(JSON.parse(localStorage.getItem("user")))})
      .catch((e) => console.log(e));
    setIsEditing(false);
  };

  const handleEdit = () => {
    setFormValues(existUser.user);
    setIsEditing(true);
  };
let [address,setAddress]=useState(formValues.addresses[formValues.addresses.length-1])
  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <img
        src={baseURL + existUser?.user?.avatar}
        alt="Avatar"
        className="avatar"
      />

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={address}

              onChange={(e)=>{handleInputChange(e);setAddress(e.target.value)}}
              
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              
            />
          </label>
          <label>
            Avatar:
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <div className="profile-info">
          <p>
            <strong>Name:</strong> {existUser?.user?.name}
          </p>
          <p>
            <strong>Address:</strong> {existUser?.user?.addresses[existUser?.user?.addresses.length-1]}
          </p>
          <p>
            <strong>Phone Number:</strong> {existUser?.user?.phone}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
