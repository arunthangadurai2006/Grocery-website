// Due to response size limits, paste your existing imports.
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Matha() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const API = "https://grocery-website-tzz5.onrender.com/api/v1";
  fetch(`${API}/products`)
  .then(res => res.json())
  .then((data) => setProducts(data || []))
  .catch(console.error);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const addToCart = (p) => setCart((c) => [...c, p]);

  const totalAmount = cart.reduce((t, i) => t + Number(i.price), 0);

  const filteredProducts = products.filter((p) => {
    const s = p.name.toLowerCase().includes(search.toLowerCase());
    const c =
      selectedCategory === "all" ||
      p.category?.toLowerCase() === selectedCategory.toLowerCase();
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
     
      {cart.length===0 ? <p>No items added</p> :
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
      }
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
    marginTop: 10
  }}
>
  Checkout
</button>
    </>
  );

  return (
    <div style={{background:"#bee6c8",minHeight:"100vh"}}>
      <div style={{
        position:"sticky",top:0,zIndex:1000,
        background:"#156028",color:"#fff",
        display:"flex",alignItems:"center",
        gap:15,padding:"10px 15px",flexWrap:"wrap"
      }}>
        <div style={{display:"flex",alignItems:"center",gap:15}}>
          <h3 style={{margin:0}}>Garos Supermarket</h3>
          <Link to="/about" style={{color:"#fff",textDecoration:"none", marginLeft:"80px", fontWeight: "bold"}}>Login</Link>
            <Link to="/about" style={{color:"#fff",textDecoration:"none", marginLeft:"8px", fontWeight: "bold"}}>About</Link>
        </div>

        <input
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search products..."
          style={{
            flex:1,minWidth:0,
            padding:10,borderRadius:20,border:"none"
          }}
        />

        {isMobile && (
          <button
            onClick={()=>setShowCart(true)}
            style={{
              border:"none",borderRadius:20,
              padding:"8px 16px",background:"#fff",color:"#198754"
            }}
          >
            🛒 {cart.length}
          </button>
        )}
      </div>

      <div style={{display:isMobile?"block":"flex"}}>
        <div style={{
          width:isMobile?"100%":220,
          display:"flex",
          flexDirection:isMobile?"row":"column",
          overflowX:isMobile?"auto":"visible",
          gap:10,padding:10,background:"#fff",
          position:isMobile?"static":"sticky",
          top:70,height:"fit-content"
        }}>
          {["all","Vegetables","Fruits","Snacks","Masala"].map(c=>(
            <button key={c} style={buttonStyle(c)} onClick={()=>setSelectedCategory(c)}>
              {c==="all"?"All Products":c}
            </button>
          ))}
        </div>

        <div style={{
          flex:1,
          display:"grid",
          gridTemplateColumns:isMobile?"repeat(2,1fr)":"repeat(auto-fill,minmax(220px,1fr))",
          gap:15,padding:15
        }}>
          {filteredProducts.length===0 ? (
            <h3>No products found.</h3>
          ) : filteredProducts.map(p=>(
            <div key={p._id}
              style={{
                background:"#fff",borderRadius:12,padding:12,
                boxShadow:"0 2px 8px rgba(0,0,0,.08)"
              }}>
              <img src={p.image} alt={p.name}
                style={{
                  width:"100%",height:170,
                  objectFit:"cover",borderRadius:8
                }}/>
              <h3>{p.name}</h3>
              <div>Stock: {p.stock}</div>
              <div style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                marginTop:10
              }}>
                <strong>₹{p.price}</strong>
                <button
                  onClick={()=>addToCart(p)}
                  style={{
                    padding:"8px 12px",
                    border:"1px solid #198754",
                    color:"#198754",
                    background:"#fff",
                    borderRadius:6,
                    cursor:"pointer"
                  }}>
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>

        {!isMobile && (
          <div style={{
            width:300,padding:15,
            background:"#fff",
            position:"sticky",top:70,
            height:"fit-content"
          }}>
            {cartView}
          </div>
        )}
      </div>

      {isMobile && showCart && (
        <div
          onClick={()=>setShowCart(false)}
          style={{
            position:"fixed",inset:0,
            background:"rgba(0,0,0,.35)",
            zIndex:2000
          }}>
          <div
            onClick={(e)=>e.stopPropagation()}
            style={{
              position:"absolute",
              left:0,right:0,bottom:0,
              background:"#fff",
              padding:20,
              borderTopLeftRadius:20,
              borderTopRightRadius:20,
              maxHeight:"70vh",
              overflowY:"auto"
            }}>
            <div style={{
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center"
            }}>
              <h2>🛒 Cart</h2>
              <button onClick={()=>setShowCart(false)}>❌</button>
            </div>
            {cartView}
          </div>
        </div>
      )}
    </div>
  );
}
