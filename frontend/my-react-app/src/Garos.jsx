import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Matha() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);

  // ✅ SAFE FOR VERCEL
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navigate = useNavigate();
  const API = "https://grocery-website-tzz5.onrender.com/api/v1";

useEffect(() => {
  fetch(`${API}/products`)
    .then((res) => res.json())
    .then((data) => {
      console.log("API DATA:", data);

      const list =
        data?.products || data?.data || [];

      setProducts(list);
    })
    .catch((err) => console.log("FETCH ERROR:", err));
}, []);

  // ✅ SAFE RESIZE (ONLY RUNS IN BROWSER)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const addToCart = (p) => setCart((c) => [...c, p]);

  const totalAmount = cart.reduce((t, i) => t + Number(i.price || 0), 0);

  // ✅ SAFE FILTER (prevents crash)
  const filteredProducts = products.filter((p) => {
    const name = (p.name || "").toLowerCase();
    const s = name.includes(search.toLowerCase());

    const c =
      selectedCategory === "all" ||
      (p.category || "").toLowerCase() === selectedCategory.toLowerCase();

    return s && c;
  });

  const buttonStyle = (cat) => ({
    background: selectedCategory === cat ? "#198754" : "#fff",
    color: selectedCategory === cat ? "#fff" : "#000",
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: "12px",
    cursor: "pointer",
    minWidth: isMobile ? 120 : "100%",
    fontWeight: 600,
  });

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const cartView = (
    <>
      {cart.length === 0 ? (
        <p>No items added</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "10px 0",
              borderBottom: "1px solid #eee",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong>{item.name}</strong>
              <div>₹{item.price}</div>
            </div>

            <button
              onClick={() => removeFromCart(index)}
              style={{
                width: "30px",
                height: "30px",
                border: "none",
                borderRadius: "50%",
                background: "red",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
        ))
      )}

      <h3>Total: ₹{totalAmount}</h3>

      <button
        onClick={() => navigate("/checkout", { state: { cart } })}
        style={{
          width: "100%",
          padding: 12,
          border: "none",
          background: "#198754",
          color: "#fff",
          borderRadius: 8,
          marginTop: 10,
        }}
      >
        Checkout
      </button>
    </>
  );

  return (
    <div style={{ background: "#bee6c8", minHeight: "100vh" }}>
      {/* HEADER */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "#156028",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          gap: 20,
          padding: "10px 15px",
          flexWrap: "wrap",
        }}
      >
        
        <h3 style={{ margin: 0 }}>Garos Supermarket</h3>

       <Link
  to="/about"
  style={{
    color: "#ffffff",
    fontWeight: "bold",
   
  }}
>
  Login
</Link>

        <Link
  to="/about"
  style={{
    color: "#ffffff",
    fontWeight: "bold",
    marginRight: "10px",
    marginLeft:"15px"
  }}
>
  About
</Link>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 20,
            border: "none",
          }}
        />

        {isMobile && (
          <button
            onClick={() => setShowCart(true)}
            style={{
              border: "none",
              borderRadius: 20,
              padding: "8px 16px",
              background: "#fff",
              color: "#198754",
            }}
          >
            🛒 {cart.length}
          </button>
        )}
      </div>

      {/* BODY */}
      <div style={{ display: isMobile ? "block" : "flex" }}>
        {/* CATEGORY */}
       <div
  style={{
    width: isMobile ? "100%" : 220,
    display: "flex",
    flexDirection: isMobile ? "row" : "column",
    gap: 10,
    padding: 10,
    background: "#fff",

    // ✅ FIX ADDED
    overflowX: isMobile ? "auto" : "visible",
    whiteSpace: isMobile ? "nowrap" : "normal",
  }}
>
          {["all", "Vegetables", "Fruits", "Snacks", "Masala"].map((c) => (
            <button
              key={c}
              style={buttonStyle(c)}
              onClick={() => setSelectedCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: isMobile
              ? "repeat(2,1fr)"
              : "repeat(auto-fill,minmax(220px,1fr))",
            gap: 15,
            padding: 15,
          }}
        >
          {filteredProducts.length === 0 ? (
            <h3>No products found</h3>
          ) : (
            filteredProducts.map((p) => (
              <div
                key={p._id}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: 12,
                }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: 170,
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />

                <h3>{p.name}</h3>
                <div>Stock: {p.stock}</div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <strong>₹{p.price}</strong>

                  <button
                    onClick={() => addToCart(p)}
                    style={{
                      padding: "8px 12px",
                      border: "1px solid #198754",
                      color: "#198754",
                      background: "#fff",
                      borderRadius: 6,
                    }}
                  >
                    ADD
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* MOBILE CART */}
      {isMobile && showCart && (
        <div
          onClick={() => setShowCart(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.35)",
            zIndex: 2000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              background: "#fff",
              padding: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              maxHeight: "70vh",
              overflowY: "auto",
            }}
          >
            <h2>🛒 Cart</h2>
            {cartView}
          </div>
        </div>
      )}
    </div>
  );
}