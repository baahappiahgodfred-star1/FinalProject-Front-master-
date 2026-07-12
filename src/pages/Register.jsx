import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import appAxios from '../utils/AxiosConfig';
import { toast } from 'react-toastify';

const RegistrationPage = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log(formData)
    appAxios.post('/api/auth/register',formData)
    .then(res=>{
      if(res.data.status==="SUCCESS"){
        toast.success('registered succsessfuly')
      setTimeout(()=>  navigate('/login'),1000)
      }
      else{
        toast.error('somthing went Wrong')
      }
    }).catch(e=>console.log(e))
  };

  return (
    <div  className='register-login'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="name"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
     
        <button type="submit">Register</button>
      </form>
    <h4>already have account <span style={{color:"blue"}}><Link to={"/login"}> click here</Link></span></h4>

    </div>
  );
};

export default RegistrationPage;
