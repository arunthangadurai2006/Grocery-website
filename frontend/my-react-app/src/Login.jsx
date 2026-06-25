
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  ////////////////mobile reponsive
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []); 

     const handleLogin = async () => {
    try {
const response = await fetch(
  "https://grocery-website-tzz5.onrender.com/api/v1/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Login Success 🎉");
        navigate("/Home");
      } else {
        alert("Invalid Email or Password");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};

  return (
   
    
    <div
  style={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    background: "#f5f5f5",
  }}
>

  {/* MOBILE TOP IMAGE */}
  {isMobile && (
    <div
      style={{
        width: "100%",
        height: "180px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542838132-92c53300491e')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  )}

  {/* LEFT IMAGE (desktop only) */}
  {!isMobile && (
    <div
      style={{
        flex: 1,
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542838132-92c53300491e')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    />
  )}

  {/* RIGHT SIDE / FORM */}
  <div
    style={{
      flex: 1,
      padding: isMobile ? "25px" : "50px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      background: "#fff",
    minHeight: isMobile ? "auto" : "100vh",
    }}
  >

    {/* TITLE (always top on mobile) */}
    <h1
      style={{
        color: "#2e7d32",
        marginBottom: "10px",
        fontSize: isMobile ? "28px" : "40px",
        textAlign: isMobile ? "center" : "left",
      }}
    >
      FreshMart 🛒
    </h1>

    <p style={{ color: "#666", marginBottom: "30px", textAlign: isMobile ? "center" : "left" }}>
      Welcome back! Login to continue shopping.
    </p>

    {/* rest of your form stays SAME */}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "12px",
                border: "none",
                background: "none",
                cursor: "pointer",
                color: "#2e7d32",
                fontWeight: "bold",
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
              fontSize: "14px",
            }}
          >
            <label>
              <input type="checkbox" /> Remember Me
            </label>

            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "#2e7d32",
              }}
            >
              Forgot Password?
            </a>
          </div>

          <button
            onClick={handleLogin}
            style={{
              background: "#2e7d32",
              color: "#fff",
              border: "none",
              padding: "14px",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Login
          </button>

          <div
            style={{
              textAlign: "center",
              margin: "20px 0",
              color: "#777",
            }}
          >
            ─── OR ───
          </div>

          <button
            style={{
              background: "#fff",
              border: "1px solid #ddd",
              padding: "14px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            Continue with Google
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: "25px",
            }}
          >
            Don't have an account?{" "}
            <a
              href="/Signup"
              style={{
                color: "#2e7d32",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    
  );
}