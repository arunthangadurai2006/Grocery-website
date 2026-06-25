import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const response = await fetch(
      "https://grocery-website-tzz5.onrender.com/api/v1/user/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Registration failed");
      return;
    }

    alert("Account Created Successfully 🎉");
    navigate("/");
  } catch (error) {
    console.error(error);
    alert("Unable to connect to the server.");
  }
};

  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginTop: "5px",
    marginBottom: "15px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "600px",
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2e7d32",
            marginBottom: "10px",
          }}
        >
          Create Account 🛒
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "25px",
          }}
        >
          Join our grocery store and start shopping.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            required
            style={inputStyle}
            onChange={handleChange}
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            required
            style={inputStyle}
            onChange={handleChange}
          />

          <label>Mobile Number</label>
          <input
            type="tel"
            name="phone"
            required
            style={inputStyle}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            required
            style={inputStyle}
            onChange={handleChange}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            required
            style={inputStyle}
            onChange={handleChange}
          />

          <label>Delivery Address</label>
          <textarea
            name="address"
            rows="3"
            style={{
              ...inputStyle,
              resize: "none",
            }}
            onChange={handleChange}
          />

          <label>City</label>
          <input
            type="text"
            name="city"
            required
            style={inputStyle}
            onChange={handleChange}
          />

          <label>State</label>
          <input
            type="text"
            name="state"
            required
            style={inputStyle}
            onChange={handleChange}
          />

          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            required
            style={inputStyle}
            onChange={handleChange}
          />

          <div style={{ marginTop: "10px" }}>
            <label>
              <input type="checkbox" required /> I agree to the Terms &
              Conditions
            </label>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "14px",
              border: "none",
              borderRadius: "8px",
              background: "#2e7d32",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Create Account
          </button>

          <button
            type="button"
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "14px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            Continue with Google
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            Already have an account?{" "}
          <Link to="/login">
  Login
</Link>
          </p>
        </form>
      </div>
    </div>
  );
}