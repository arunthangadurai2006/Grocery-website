import React from "react";

export default function ProductCard({ image, title, price }) {
  return (
    <div style={styles.card}>
      
      {/* Image */}
      <img src={image} alt="product" style={styles.image} />

      {/* Details */}
      <div style={styles.details}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.price}>₹{price}</p>

        <button style={styles.button}>Add to cart</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    padding: "15px",
    borderBottom: "1px solid #ddd",
    gap: "20px",
    alignItems: "center",
    background: "#fff",
  },
  image: {
    width: "150px",
    height: "150px",
    objectFit: "contain",
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#B12704",
  },
  button: {
    marginTop: "10px",
    padding: "8px 15px",
    background: "#FFD814",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};