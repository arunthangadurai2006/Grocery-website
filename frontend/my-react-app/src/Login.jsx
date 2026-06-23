import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/login",
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
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f7f4",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "900px",
          maxWidth: "100%",
          background: "#fff",
          borderRadius: "20px",
          overflow: "hidden",
          display: "flex",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            flex: 1,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542838132-92c53300491e')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "600px",
          }}
        />

        {/* Right Side */}
        <div
          style={{
            flex: 1,
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              color: "#2e7d32",
              marginBottom: "10px",
            }}
          >
            FreshMart 🛒
          </h1>

          <p
            style={{
              color: "#666",
              marginBottom: "30px",
            }}
          >
            Welcome back! Login to continue shopping.
          </p>

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
    </div>
  );
}