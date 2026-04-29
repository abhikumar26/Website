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
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div>
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div>
          <label>Phone:</label>
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
          />
        </div>

        <button type="submit" onClick={()=>alert("Your details are finally submitted")}>Submit</button>
      </form>
    </div>
  );
};

export default Accountdetails;
