import React from "react";

export default function HorizontalScroll({ title, data, onClick }) {
   

  return (
    <div style={{ marginBottom: 40 }}>
      
      {/* TITLE */}
      <h2 style={{ paddingLeft: 20 }}>{title}</h2>

      {/* SCROLL AREA */}
      <div
        onClick={onClick}
        style={{
          display: "flex",
          overflowX: "auto",
          gap: 20,
          padding: 20,
          scrollBehavior: "smooth",
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              minWidth: 160,
              background: "#fff",
              padding: 15,
              borderRadius: 12,
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              cursor: "pointer",
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                height: 120,
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
            <p style={{ fontWeight: "bold", marginTop: 10 }}>
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}