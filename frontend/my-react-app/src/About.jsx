

import React from "react";

export default function About() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f8f8f8" }}>
      
      {/* Banner */}
      <div
        style={{
          width: "100%",
          height: "420px",
          backgroundImage:
            "url('https://img.freepik.com/free-photo/shopping-cart-filled-with-fresh-fruits-vegetables_23-2148949976.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.55)",
            padding: "40px",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ fontSize: "55px", marginBottom: "15px" }}>
            Welcome to AKmart
          </h1>

          <p style={{ fontSize: "22px" }}>
            Fresh Groceries • Fast Delivery • Best Prices
          </p>
        </div>
      </div>

      {/* About */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "50px auto",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#2e7d32", fontSize: "38px" }}>
          About AKmart
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "1.9",
            color: "#555",
            marginTop: "20px",
          }}
        >
          AKmart is your trusted online grocery shopping destination.
          We provide fresh vegetables, fruits, dairy products,
          groceries, snacks, beverages, and household essentials
          at affordable prices. Our goal is to make grocery shopping
          simple, fast, and convenient for every family.
        </p>
      </div>

      {/* Mission */}
      <div
        style={{
          background: "#ffffff",
          padding: "60px 30px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#2e7d32",
            marginBottom: "40px",
          }}
        >
          Our Mission
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "auto",
            textAlign: "center",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#666",
          }}
        >
          Our mission is to deliver quality groceries to your doorstep
          with excellent customer service. We work with trusted brands
          and local suppliers to ensure freshness, quality, and value
          in every order.
        </p>
      </div>

      {/* Features */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          padding: "60px 20px",
        }}
      >
        {[
          {
            icon: "🥬",
            title: "Fresh Products",
            text: "Farm fresh fruits, vegetables and groceries every day.",
          },
          {
            icon: "🚚",
            title: "Fast Delivery",
            text: "Quick and reliable doorstep delivery service.",
          },
          {
            icon: "💰",
            title: "Affordable Prices",
            text: "Best deals and discounts on daily essentials.",
          },
          {
            icon: "⭐",
            title: "Trusted Quality",
            text: "High-quality products from trusted brands.",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              width: "240px",
              background: "#fff",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,.15)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "50px" }}>{item.icon}</div>

            <h3>{item.title}</h3>

            <p style={{ color: "#666" }}>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div
        style={{
          background: "#2e7d32",
          color: "white",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h2>"Freshness Delivered, Happiness Guaranteed."</h2>

        <p style={{ fontSize: "18px", marginTop: "15px" }}>
          Thank you for choosing AKmart as your everyday grocery partner.
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          background: "#111",
          color: "#fff",
          textAlign: "center",
          padding: "20px",
        }}
      >
        © 2026 AKmart | Fresh Groceries | Fast Delivery | Trusted Quality
      </div>
    </div>
  );
}