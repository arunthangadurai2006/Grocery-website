import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div
      style={{
        background: "#0aa84f",
        minHeight: "100vh",
        color: "#fff",
        textAlign: "center",
        paddingTop: "30px",
      }}
    >
      <p>You will be redirected in {count} seconds</p>

      <h1>🎉 Order Confirmed</h1>

      <div
        style={{
          fontSize: "100px",
          marginTop: "80px",
        }}
      >
        ✅
      </div>

      <div
        style={{
          background: "#fff",
          color: "#000",
          margin: "80px auto",
          width: "320px",
          borderRadius: "15px",
          padding: "20px",
          textAlign: "left",
        }}
      >
        <h2>AK Mart</h2>

        <p>
          Your order has been placed successfully.
        </p>

        <p>
          Payment Method:
          <strong> Cash on Delivery</strong>
        </p>

        <hr />

        <small>
          Thank you for shopping with AK Mart
        </small>
      </div>
    </div>
  );
}