import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Garos() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalAmount = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      product.category?.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // ✅ ACTIVE CATEGORY STYLE FIX
  const getCategoryStyle = (category) => ({
    background: selectedCategory === category ? "green" : "white",
    color: selectedCategory === category ? "white" : "black",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "10px",
    cursor: "pointer",
    textAlign: "center",
    border: "1px solid #ddd",
    transition: "0.2s",
  });

  return (
    <div style={{ background: "#bee6c8" }}>
      {/* Navbar */}
      <div
        style={{
          height: "60",
          background: "#156028",
          color: "white",
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
          gap: "20px",
           
    
    position: "sticky",
    top: "0px",
  
    alignSelf: "flex-start",
  
        }}
      >
        <h2 style={{ margin: 0 }}>Garos Supermarket</h2>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 1,
            padding: "8px 15px",
            borderRadius: "999px",
            border: "none",
            fontSize: "16px",
          }}
        />

        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
          <h2>Login</h2>
        </Link>
      </div>

      <div style={{ display: "flex", minHeight: "100vh" }}>
        
        {/* Sidebar */}
        <div
          style={{
            width: "200px",
            background: "#fff",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            //sticky
             position: "sticky",
    top: "70px",
    height: "fit-content",
    alignSelf: "flex-start",
          }}
        >
          <h3>Categories</h3>

          <button
            style={getCategoryStyle("all")}
            onClick={() => setSelectedCategory("all")}
          >
            All Products
          </button>

          <button
            style={getCategoryStyle("Vegetables")}
            onClick={() => setSelectedCategory("Vegetables")}
          >
            Fresh Vegetables
          </button>

          <button
            style={getCategoryStyle("Fruits")}
            onClick={() => setSelectedCategory("Fruits")}
          >
            Fresh Fruits
          </button>

          <button
            style={getCategoryStyle("Snacks")}
            onClick={() => setSelectedCategory("Snacks")}
          >
            Snacks
          </button>

          <button
            style={getCategoryStyle("Masala")}
            onClick={() => setSelectedCategory("Masala")}
          >
            Masala Powders
          </button>
        </div>

        {/* Products */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
            gap: "5px",
            padding: "10px",
            height: "100"


          }}
        >
          {filteredProducts.length === 0 ? (
            <h3>No products found</h3>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "10px",
                  background: "#fff",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                <h3>{product.name}</h3>
               <h4> stock: {product.stock}</h4>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h2><span>₹{product.price}</span></h2>

                  <button
                    onClick={() => addToCart(product)}
                    style={{
                      padding: "8px 12px",
                      border: "1px solid green",
                      color: "green",
                      background: "white",
                      borderRadius: "5px",
                    }}
                  >
                    ADD
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart */}
        <div
          style={{
            width: "300px",
            background: "#fff",
            padding: "15px",
            borderLeft: "1px solid #ddd",
             position: "sticky",
             
    top: "70px",
    height: "fit-content",
    alignSelf: "flex-start",
          }}
        >
          <h2>🛒 Cart</h2>

          {cart.length === 0 ? (
            <p>No items added</p>
          ) : (
            cart.map((item, index) => (
              <div key={index}>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
            ))
          )}

          <hr />
          <h3>Total: ₹{totalAmount}</h3>

          <button
            style={{
              width: "100%",
              padding: "10px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              display: "flex",
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}