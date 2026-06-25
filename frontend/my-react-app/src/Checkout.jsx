import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Checkout() {
  const { state } = useLocation();
  const cart = state?.cart || [];

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const total = cart.reduce((t, i) => t + Number(i.price), 0);
const navigate = useNavigate();
  const handlePayment = () => {
    if (paymentMethod === "cod") {
     navigate("/order-success");
      return;
    }

    const options = {
      key: "rzp_test_T5sm3Ze46yoFBr",
      amount: total * 100,
      currency: "INR",
      name: "AK Mart",
      description: "Grocery Purchase",

      handler: function (response) {
        alert(
          "✅ Payment Successful!: " +
            response.razorpay_payment_id
        );
      },

      prefill: {
        name: "Customer",
        email: "customer@example.com",
        contact: "9999999999",
      },

      theme: {
        color: "#156028",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "20px auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#156028",
          color: "#fff",
          padding: "15px",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0 }}>AK Mart</h2>
        <h3 style={{ margin: 0 }}>🧾 Checkout</h3>
      </div>

      {/* Cart Section */}
      <div
        style={{
          marginTop: "20px",
          background: "#fff",
          borderRadius: "12px",
          padding: "15px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h3>🛒 Cart Items</h3>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <span>{item.name}</span>
              <strong>₹{item.price}</strong>
            </div>
          ))
        )}
      </div>

      {/* Total */}
      <div
        style={{
          marginTop: "20px",
          background: "#f8f8f8",
          padding: "15px",
          borderRadius: "12px",
        }}
      >
        <h2>Total Amount: ₹{total}</h2>
      </div>

      {/* Payment Options */}
      <div
        style={{
          marginTop: "20px",
          background: "#fff",
          padding: "15px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h3>💳 Select Payment Method</h3>

        <label
          style={{
            display: "block",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          {" "}Cash on Delivery
        </label>

        <label
          style={{
            display: "block",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          <input
            type="radio"
            name="payment"
            value="online"
            checked={paymentMethod === "online"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          {" "}Online Payment (Razorpay)
        </label>
      </div>

      {/* Place Order Button */}
      <button
        onClick={handlePayment}
        disabled={cart.length === 0}
        style={{
          width: "100%",
          marginTop: "25px",
          padding: "15px",
          border: "none",
          borderRadius: "12px",
          background: "#156028",
          color: "#fff",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {paymentMethod === "cod"
          ? "Place Order"
          : `Pay ₹${total}`}
      </button>
    </div>
  );
}