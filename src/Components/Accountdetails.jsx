import React, { useState } from "react";

const Accountdetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account Created!\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`);
  };

  return (
    <div className="account-container">
      <h1>Please submit the following details!</h1>
      <form onSubmit={handleSubmit} className="account-form">
        
        <div>
          <label><b>Name:</b></label>
          <input 
            type="text" 
            name="name" 
            placeholder="Please enter your name"
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <br />

        <div>
          <label><b>Email:</b></label>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your password E-mail here!"
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <br />

        <div>
          <label><b>Password:</b></label>
          <input 
            type="password" 
            name="password"
            placeholder="Enter your password here!" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <br />

        <div>
          <label><b>Phone:</b></label>
          <input 
            type="tel" 
            name="phone" 
            placeholder="Enter your phone number here!"
            value={formData.phone} 
            onChange={handleChange} 
          />
        </div>
        <br />

        <button type="submit" onClick={()=>alert("Your details are finally submitted")}style={{color:"red", backgroundColor:"blue"}}>Submit</button>
      </form>
    </div>
  );
};

export default Accountdetails;
