
import { Link } from "react-router-dom";
import React,{useState,useEffect} from "react";
import HorizontalScroll from "./HorizontalScroll";
import {useNavigate} from "react-router-dom";
import "./navbar.css";
import "./product1.css";
import "./frame1.css";




export default function Home(){
  const navigate =useNavigate();
 const shopRoutes = {
  "vallioor, garos supermarket": "/Garos",
  "vallioor, national supermarket":"/National",
  "vallioor,jpr supermarket":"/Jpr",
  "vallioor,matha Mart":"/Matha",
  "vallioor,nagalakshmi supermarket":"/Naga"
 };
const [search, setSearch] = useState("");
const filteredShops = Object.keys(shopRoutes).filter(shop =>
  shop.toLowerCase().startsWith(search.toLowerCase())
);

const [menuOpen, setMenuOpen] = useState(false);
    
     const Groceries = [
  { id: 1, name: "Rice", category: "Groceries", price: 65, img: "https://tse4.mm.bing.net/th/id/OIP.DTFMsz1aVUpGjZhhQxnAcAHaE7?pid=Api&P=0&h=180" },

{ id: 2, name: "Wheat Flour", category: "Groceries", price: 55, img: "https://tse3.mm.bing.net/th/id/OIP.dspxk-oazk7qImK8f55hrQHaFO?pid=Api&P=0&h=180" },

{ id: 3, name: "Sugar", category: "Groceries", price: 45, img: "https://tse3.mm.bing.net/th/id/OIP.I1UanPT1KpZV21s87LPQ7wHaFc?pid=Api&P=0&h=180" },

{ id: 4, name: "Salt", category: "Groceries", price: 20, img: "https://tse2.mm.bing.net/th/id/OIP.xPIJq5q9F5B6H_n7q3ZHdgHaE8?pid=Api&P=0&h=180" },

{ id: 5, name: "Toor Dal", category: "Groceries", price: 120, img: "https://tse3.mm.bing.net/th/id/OIP.NPc2jgTrFL1keKsT6q96NwHaHa?pid=Api&P=0&h=180" },





{ id: 9, name: "Sunflower Oil", category: "Groceries", price: 180, img: "https://tse2.mm.bing.net/th/id/OIP.QQpgw6eKiO_iIoMH7hJv1wHaGc?pid=Api&P=0&h=180" },

{ id: 10, name: "Groundnut Oil", category: "Groceries", price: 220, img: "https://tse3.mm.bing.net/th/id/OIP.ZL5zCR2A_C0HSsPczVUCXAHaJH?pid=Api&P=0&h=180" },

{ id: 11, name: "Tea Powder", category: "Groceries", price: 90, img: "https://tse3.mm.bing.net/th/id/OIP.PkwHBfMTgK39_SowhTOMWAHaGE?pid=Api&P=0&h=180" },



{ id: 13, name: "Turmeric Powder", category: "Groceries", price: 35, img: "https://tse4.mm.bing.net/th/id/OIP.XJmwsZ6VB0LptQrqDCKahAHaE8?pid=Api&P=0&h=180" },

{ id: 14, name: "Chilli Powder", category: "Groceries", price: 70, img: "https://tse2.mm.bing.net/th/id/OIP.-tsGgctqicCrars6wQlVQgHaHa?pid=Api&P=0&h=180" },


];

const snacks = [
{ id: 1, name: "Lays Classic Chips", price: 20, brand: "Lays", img: "https://tse3.mm.bing.net/th/id/OIP.4ODMvlW6i4tt8u9KbCXKCAHaFj?pid=Api&P=0&h=180" },

{ id: 2, name: "Kurkure Masala Munch", price: 20, brand: "Kurkure", img: " https://tse3.mm.bing.net/th/id/OIP.LzdbCBudTpFue-5tacrXWwHaHa?pid=Api&P=0&h=180 " },

{ id: 3, name: "Bingo Mad Angles", price: 25, brand: "Bingo", img: " https://tse1.mm.bing.net/th/id/OIP.QgCWt_-Ki3dE6vjd5lJr4QHaHa?pid=Api&P=0&h=180 " },

{ id: 4, name: "Good Day Biscuits", price: 35, brand: "Britannia", img: "https://tse4.mm.bing.net/th/id/OIP.6hE7X5ZYGQLPZy-9QhKniwHaHa?pid=Api&P=0&h=180  " },

{ id: 5, name: "Hide & Seek", price: 40, brand: "Parle", img: " https://tse4.mm.bing.net/th/id/OIP.eGdnXcdytsywawKsNUC5egHaD4?pid=Api&P=0&h=180 " },

{ id: 6, name: "Little Hearts", price: 20, brand: "Britannia", img: " https://tse1.mm.bing.net/th/id/OIP.a5dIuKbj0Grfb6oaq7Do6QAAAA?pid=Api&P=0&h=180 " },

{ id: 7, name: "Parle-G Biscuits", price: 10, brand: "Parle", img: " https://tse4.mm.bing.net/th/id/OIP.qSXtP_kMlmhwr3sEUTrOlwHaHa?pid=Api&P=0&h=180 " },

{ id: 8, name: "Marie Gold", price: 35, brand: "Britannia", img: "https://tse4.mm.bing.net/th/id/OIP.n0FsrFT4bJem8NKRLu3o-wAAAA?pid=Api&P=0&h=180 " },

{ id: 9, name: "Coca-Cola", price: 40, brand: "Coca-Cola", img: "https://tse3.mm.bing.net/th/id/OIP.paODoUoekVVtoS6qLHSzbwHaHa?pid=Api&P=0&h=180  " },

{ id: 10, name: "Sprite", price: 40, brand: "Coca-Cola", img: " https://tse3.mm.bing.net/th/id/OIP.JXluEVY8C8tPQclYj8JYwwHaHa?pid=Api&P=0&h=180 " },

{ id: 11, name: "Fanta Orange", price: 40, brand: "Coca-Cola", img: " https://tse1.mm.bing.net/th/id/OIP.ykUGqTW7CNk-cGRhaWX5AwHaH6?pid=Api&P=0&h=180" },

{ id: 12, name: "Pepsi", price: 40, brand: "Pepsi", img: "https://tse2.mm.bing.net/th/id/OIP.cAXWwIworpI6OWKZdIah9gHaHa?pid=Api&P=0&h=180  " },

{ id: 13, name: "7UP", price: 40, brand: "PepsiCo", img: "https://tse2.mm.bing.net/th/id/OIP.rMjZJnE6byxjUG6MlHDiuwHaHa?pid=Api&P=0&h=180  " },

{ id: 14, name: "Maaza Mango Drink", price: 45, brand: "Maaza", img: " https://tse4.mm.bing.net/th/id/OIP.FeR3VYsz54G_p11QzgOFHQHaHa?pid=Api&P=0&h=180 " },

{ id: 15, name: "Slice Mango Drink", price: 45, brand: "Slice", img: "  https://tse3.mm.bing.net/th/id/OIP.vil-ie5KUtYSTDeIPhHI_gHaHa?pid=Api&P=0&h=180" }
];
const snack = [{ id: 8, name: "Marie Gold", price: 35, brand: "Britannia", img: "https://tse4.mm.bing.net/th/id/OIP.n0FsrFT4bJem8NKRLu3o-wAAAA?pid=Api&P=0&h=180 " },

{ id: 9, name: "Coca-Cola", price: 40, brand: "Coca-Cola", img: "https://tse3.mm.bing.net/th/id/OIP.paODoUoekVVtoS6qLHSzbwHaHa?pid=Api&P=0&h=180  " },

{ id: 10, name: "Sprite", price: 40, brand: "Coca-Cola", img: " https://tse3.mm.bing.net/th/id/OIP.JXluEVY8C8tPQclYj8JYwwHaHa?pid=Api&P=0&h=180 " },

{ id: 11, name: "Fanta Orange", price: 40, brand: "Coca-Cola", img: " https://tse1.mm.bing.net/th/id/OIP.ykUGqTW7CNk-cGRhaWX5AwHaH6?pid=Api&P=0&h=180" },

{ id: 12, name: "Pepsi", price: 40, brand: "Pepsi", img: "https://tse2.mm.bing.net/th/id/OIP.cAXWwIworpI6OWKZdIah9gHaHa?pid=Api&P=0&h=180  " },

{ id: 13, name: "7UP", price: 40, brand: "PepsiCo", img: "https://tse2.mm.bing.net/th/id/OIP.rMjZJnE6byxjUG6MlHDiuwHaHa?pid=Api&P=0&h=180  " },

{ id: 14, name: "Maaza Mango Drink", price: 45, brand: "Maaza", img: " https://tse4.mm.bing.net/th/id/OIP.FeR3VYsz54G_p11QzgOFHQHaHa?pid=Api&P=0&h=180 " },

{ id: 1, name: "Lays Classic Chips", price: 20, brand: "Lays", img: "https://tse3.mm.bing.net/th/id/OIP.4ODMvlW6i4tt8u9KbCXKCAHaFj?pid=Api&P=0&h=180" },

{ id: 2, name: "Kurkure Masala Munch", price: 20, brand: "Kurkure", img: " https://tse3.mm.bing.net/th/id/OIP.LzdbCBudTpFue-5tacrXWwHaHa?pid=Api&P=0&h=180 " },

{ id: 3, name: "Bingo Mad Angles", price: 25, brand: "Bingo", img: " https://tse1.mm.bing.net/th/id/OIP.QgCWt_-Ki3dE6vjd5lJr4QHaHa?pid=Api&P=0&h=180 " },

{ id: 4, name: "Good Day Biscuits", price: 35, brand: "Britannia", img: "https://tse4.mm.bing.net/th/id/OIP.6hE7X5ZYGQLPZy-9QhKniwHaHa?pid=Api&P=0&h=180  " },

{ id: 5, name: "Hide & Seek", price: 40, brand: "Parle", img: " https://tse4.mm.bing.net/th/id/OIP.eGdnXcdytsywawKsNUC5egHaD4?pid=Api&P=0&h=180 " },

{ id: 6, name: "Little Hearts", price: 20, brand: "Britannia", img: " https://tse1.mm.bing.net/th/id/OIP.a5dIuKbj0Grfb6oaq7Do6QAAAA?pid=Api&P=0&h=180 " },

{ id: 7, name: "Parle-G Biscuits", price: 10, brand: "Parle", img: " https://tse4.mm.bing.net/th/id/OIP.qSXtP_kMlmhwr3sEUTrOlwHaHa?pid=Api&P=0&h=180 " },


{ id: 15, name: "Slice Mango Drink", price: 45, brand: "Slice", img: "  https://tse3.mm.bing.net/th/id/OIP.vil-ie5KUtYSTDeIPhHI_gHaHa?pid=Api&P=0&h=180" }
];


   const grocery1 = [
{ id: 1, name: "Aachi Chilli Powder", price: 65, brand: "Aachi", img: "  https://tse1.mm.bing.net/th/id/OIP.kkclAJxOFNgqWN0eWKpU_AHaHa?pid=Api&P=0&h=180 " },

{ id: 2, name: "Sakthi Turmeric Powder", price: 45, brand: "Sakthi", img: " https://tse2.mm.bing.net/th/id/OIP.HULEgBTcWy_7jKnomm4jnQHaHa?pid=Api&P=0&h=180 " },

{ id: 3, name: "Aachi Coriander Powder", price: 55, brand: "Aachi", img: " https://tse3.mm.bing.net/th/id/OIP.E3EXLWLIK3pEt4h4k8Ow4gHaHa?pid=Api&P=0&h=180 " },

{ id: 4, name: "Sakthi Sambar Powder", price: 70, brand: "Sakthi", img: "  https://tse3.mm.bing.net/th/id/OIP.5PUv_ogsTRjl-HepMYeJTgAAAA?pid=Api&P=0&h=180" },

{ id: 5, name: "777 Rasam Powder", price: 60, brand: "777", img: " https://tse2.mm.bing.net/th/id/OIP._1Oh8eMSPNWTV1hHXnfoeAHaHa?pid=Api&P=0&h=180 " },

{ id: 6, name: "Lion Dates Syrup", price: 180, brand: "Lion", img: "https://tse2.mm.bing.net/th/id/OIP.vJtbhskUYi8CudBiaBbGngHaHa?pid=Api&P=0&h=180  " },

{ id: 7, name: "Idhayam Gingelly Oil", price: 230, brand: "Idhayam", img: " https://tse3.mm.bing.net/th/id/OIP.pR8vPYqA9BixfMgT71WavwHaHa?pid=Api&P=0&h=180" },

{ id: 8, name: "Anil Vermicelli", price: 45, brand: "Anil", img: " https://tse1.mm.bing.net/th/id/OIP.hUnAEJVz_36JcQ1qRZFDhQHaHa?pid=Api&P=0&h=180 " },

{ id: 9, name: "Anil Pasta", price: 85, brand: "Anil", img: "https://tse3.mm.bing.net/th/id/OIP.fEhCXLkY2AFNLnccTr_P9AAAAA?pid=Api&P=0&h=180   " },

{ id: 10, name: "Aachi Garam Masala", price: 80, brand: "Aachi", img: " https://tse2.mm.bing.net/th/id/OIP.IhXxQ39mmidOlId4Q92voQHaHa?pid=Api&P=0&h=180" },

{ id: 11, name: "Sakthi Pepper ", price: 75, brand: "Sakthi", img: " https://tse3.mm.bing.net/th/id/OIP.Tfr60oBmcPp-aiPUBUR6ygHaHa?pid=Api&P=0&h=180 " },


{ id: 13, name: "GRB Ghee", price: 320, brand: "GRB", img: " https://tse1.mm.bing.net/th/id/OIP.-lOFozdnFhqRJByt2zViiAHaHa?pid=Api&P=0&h=180 " },

{ id: 14, name: "Naga Rava", price: 55, brand: "Naga", img: " https://tse4.mm.bing.net/th/id/OIP.4fszOrEfs6-iwz6aEunoaAHaF7?pid=Api&P=0&h=180 " },


];
  
    const banner=[
     { img:"https://tse4.mm.bing.net/th/id/OIP.JNqiwzWqv-4vZ8bEqxB0fwHaDe?pid=Api&P=0&h=180" },
    
    {img:"https://img.freepik.com/free-vector/online-grocery-store-banner-design_23-2150091033.jpg"},
    {img:"https://media.istockphoto.com/id/1459390845/photo/online-grocery-shopping-and-delivery-banner.jpg?s=170667a&w=0&k=20&c=_r4iF2akM1DtMHu88yqh2O1-yCdWGU0m1hlqD0HzLts="}]
    const[index,setIndex]= useState(0);
    useEffect(() =>{
      const interval = setInterval(() => {
        setIndex((prev)=> (prev + 1)% banner.length);
      },1500);
      return () => clearInterval(interval);
    },[banner.length]);
  
      const categories = [
  
  {
    title: "Rice Flour",
    img: "https://img.freepik.com/premium-photo/flour-wheat-stalks-metal-table_319172-3795.jpg"
  },
  {
    title: "Salt",
    img: "https://static.toiimg.com/photo/68483689.cms"
  },
  {
    title: "Sugar",
    img: "https://s-i.huffpost.com/gen/2592330/images/o-SUGAR-facebook.jpg"
  },
  {
    title: "Wheat",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ee727d205048921.66b3d6758fa1a.jpg"
  },
  {
    title: "Maida",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/11/TV/XW/HL/162481078/maida-refined-wheat-flour-1000x1000.jpeg"
  },
  {
    title: "Corn Flour",
    img: "https://thecoconutmama.com/wp-content/uploads/2023/04/What-Is-Corn-Flour-jpg.webp"
  },
  {
    title: "Chilli Powder",
    img: "https://www.pentastar.in/wp-content/uploads/2024/02/red-chilli-powder-min.jpg"
  },
  {
    title: "Masoor Dal",
    img: "https://femina.wwmindia.com/content/2021/nov/face-011636718341.jpg"
  },
  {
    title: "Green Gram",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ee727d205048921.66b3d6758fa1a.jpg"
  },
  {
    title: "Rice",
    img: "https://tse4.mm.bing.net/th/id/OIP.DTFMsz1aVUpGjZhhQxnAcAHaE7?pid=Api&P=0&h=180"
  },
  {
    title: "Wheat Flour",
    img: "https://tse3.mm.bing.net/th/id/OIP.dspxk-oazk7qImK8f55hrQHaFO?pid=Api&P=0&h=180"
  },
  {
    title: "Sugar",
    img: "https://tse3.mm.bing.net/th/id/OIP.I1UanPT1KpZV21s87LPQ7wHaFc?pid=Api&P=0&h=180"
  },
  {
    title: "Salt",
    img: "https://tse2.mm.bing.net/th/id/OIP.xPIJq5q9F5B6H_n7q3ZHdgHaE8?pid=Api&P=0&h=180"
  },
  {
    title: "Toor Dal",
    img: "https://tse3.mm.bing.net/th/id/OIP.NPc2jgTrFL1keKsT6q96NwHaHa?pid=Api&P=0&h=180"
  },
  {
    title: "Sunflower Oil",
    img: "https://tse2.mm.bing.net/th/id/OIP.QQpgw6eKiO_iIoMH7hJv1wHaGc?pid=Api&P=0&h=180"
  },
  {
    title: "Groundnut Oil",
    img: "https://tse3.mm.bing.net/th/id/OIP.ZL5zCR2A_C0HSsPczVUCXAHaJH?pid=Api&P=0&h=180"
  },
  {
    title: "Tea Powder",
    img: "https://tse3.mm.bing.net/th/id/OIP.PkwHBfMTgK39_SowhTOMWAHaGE?pid=Api&P=0&h=180"
  },
  {
    title: "Sakthi Pepper ",
    img: "https://tse3.mm.bing.net/th/id/OIP.Tfr60oBmcPp-aiPUBUR6ygHaHa?pid=Api&P=0&h=180"
  },
  {
    title: "GRB Ghee",
    img: "https://tse1.mm.bing.net/th/id/OIP.-lOFozdnFhqRJByt2zViiAHaHa?pid=Api&P=0&h=180"
  },
  {
    title: "Aachi Chilli Powder",
    img: "https://tse1.mm.bing.net/th/id/OIP.kkclAJxOFNgqWN0eWKpU_AHaHa?pid=Api&P=0&h=180"
  },
  {
    title: "Naga Rava",
    img: "https://tse4.mm.bing.net/th/id/OIP.4fszOrEfs6-iwz6aEunoaAHaF7?pid=Api&P=0&h=180"
  }

      ]
   const brand2 = [  "https://tse2.mm.bing.net/th/id/OIP.x-KyR2FOS_16-lRmxgd2ZAHaE8?pid=Api&P=0&h=180" , "https://tse4.mm.bing.net/th/id/OIP.8Mk_-lBUDi2N5fz4WjJtfgHaHa?pid=Api&P=0&h=180",
     "https://tse3.mm.bing.net/th/id/OIP.1MEGTJWj0pyF-6Woib2vdwHaFb?pid=Api&P=0&h=180" ,
      "https://tse4.mm.bing.net/th/id/OIP.FxRpUZ1X5jvwyxjDJXeX4wHaGL?pid=Api&P=0&h=180"
   ]
   
const brand1 = [  "https://tse2.mm.bing.net/th/id/OIP.JfvA1UHsY9760vCqFCf9GAHaHa?pid=Api&P=0&h=180" , "https://tse2.mm.bing.net/th/id/OIP.m407uzBglOolPPMZ_xyVQAHaE8?pid=Api&P=0&h=180" ,
     " https://tse2.mm.bing.net/th/id/OIP.7JdoOICL6DQG4qX8cRye5wHaE8?pid=Api&P=0&h=180  " ,
      " https://tse2.mm.bing.net/th/id/OIP.UMuXR0ONVg3sAqs77DMxFAHaFj?pid=Api&P=0&h=180 "
   ]
   const brand3 = [  "https://tse1.mm.bing.net/th/id/OIP.6P-XZXlGplybfg_AXpkeLwHaGG?pid=Api&P=0&h=180" , "  https://tse4.mm.bing.net/th/id/OIP.LVXePaXrUG6xxQuNMlLjRwHaFL?pid=Api&P=0&h=180" ,
     " https://tse1.mm.bing.net/th/id/OIP.jr80zz132JYq-43J_dVBDgHaGH?pid=Api&P=0&h=180 " ,
      " https://tse2.mm.bing.net/th/id/OIP.S89VBzCUuRsM1wzzP525QQHaHa?pid=Api&P=0&h=180 "
   ]
  
   
   
   
   return(
    
     <>
     <div style={{background: " #bee6c8"}}>
     
    <div style={{ background: "#bee6c8" }}>
  
  {/* NAVBAR */}
  <div className= "nav">
  
  <div style={{ paddingTop: "70px" }}>
  {/* Rest of your page */}
</div>
    {/* Logo */}
    <h2 style={{ margin: "0 20px  0" }}>Akmart</h2>

    {/* Search */}
   <div
  style={{
    position: "relative",
    flex: 1
  }}
>
  <input
  type="text"
  placeholder="Search shops..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      const matchedShop = Object.keys(shopRoutes).find(
        shop => shop.toLowerCase() === search.toLowerCase()
      );

      if (matchedShop) {
        navigate(shopRoutes[matchedShop]);
      }
    }
  }}
  style={{
    width: "90%",
    padding: "10px 15px",
    borderRadius: "999px",
    border: "none",
    fontSize: "16px",
    flex: 1
  }}
/>

  {search && (
    <div
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        background: "#fff",
        borderRadius: "10px",
        marginTop: "5px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        zIndex: 100,
        width:"90%"
      }}
    >
      {filteredShops.map((shop, index) => (
        <div
          key={index}
          onClick={() =>{
            setSearch(shop)
          navigate(shopRoutes[shop])} }
          style={{
            padding: "12px",
            cursor: "pointer",
            borderBottom: "1px solid #eee",
            color:"black"
          }}
      
        >
          {shop}
        </div>
      ))}
    </div>
  )}
</div>

    {/* Menu */}
    {/* Right side */}
<div className="right-section">

  <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
    ☰
  </div>

  <div className={`menu ${menuOpen ? "open" : ""}`}>
    <Link to="/About" onClick={() => setMenuOpen(false)}>About</Link>
    <Link to="/Login" onClick={() => setMenuOpen(false)}>Login</Link>
  </div>

</div>
       
  </div>

  {/* BANNER */}
  <img
    src={banner[index].img}
    alt="banner"
    style={{
      width: "100%",
      height: "auto", 
      maxHeight: "300px",
      objectFit: "cover",
    }}
  />

     {/* PRODUCTS */} {/*page*/}
   <div style={{ padding: "2px" }}>
  <h2 style={{ marginBottom: "15px" }}>
    National store, Vallioor
  </h2>

  {/* PRODUCTS GRID */}
  {/* PRODUCTS GRID */}
<div className="products-grid">
  {categories.map((item, i) => (
    <Link key={i} to="/national" className="product-link">
      <div className="product-card">
        <img
          src={item.img}
          alt={item.title}
          className="product-image"
        />

        <p className="product-title">
          {item.title}
        </p>
      </div>
    </Link>
  ))}
</div>
    
       <HorizontalScroll
  title="Groceries"
  data={Groceries}
  onClick={() => navigate("/National")}
/>
        {/* PRODUCTS 4  1frame*/}
       <div className="frames">
  <div className="frame-space"></div>

  <div
    className="store-card"
    onClick={() => navigate("/Matha")}
  >
    <h2 className="store-heading">Matha Stores</h2>

    <div className="store-grid">
      {brand2.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="item"
          className="store-image"
        />
      ))}
    </div>
  </div>

      
      
               {/* PRODUCTS 4  2 frame*/}
         <div
    className="store-card"
    onClick={() => navigate("/naga")}
  >
    <h2 className="store-heading">Naga Stores</h2>

    <div className="store-grid">
      {brand1.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="item"
          className="store-image"
        />
      ))}
    </div>
  </div>
      
               {/* //////////////////PRODUCTS 4  3 frame*/}
       <div
    className="store-card"
    onClick={() => navigate("/Garos")}
  >
    <h2 className="store-heading">Garos super market</h2>

    <div className="store-grid">
      {brand3.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="item"
          className="store-image"
        />
      ))}
    </div>
  </div>
      </div>
      </div>
      
 <HorizontalScroll
  title="Naga store with branded products"
  data={grocery1}
  onClick={() => navigate("/Naga")}></HorizontalScroll>

<HorizontalScroll

 title=" Matha stores Snacks & Drinks"
  data={snacks} onClick={() => navigate("/Matha")}></HorizontalScroll>


<hr
  style={{
    marginTop: "40px",
    border: "none",
    height: "5px",
    backgroundColor: "#000000"
  }}
  
/>
</div>
        {/* PRODUCTS 4  1frame*/}
        <div className="frames">
  <div className="frame-space"></div>

  <div
    className="store-card"
    onClick={() => navigate("/Jpr")}
  >
    <h2 className="store-heading">JPR super market</h2>

    <div className="store-grid">
      {brand2.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="item"
          className="store-image"
        />
      ))}
    </div>
  </div>
      
      
               {/* PRODUCTS 4  2 frame*/}
         <div
    className="store-card"
    onClick={() => navigate("/National")}
  >
    <h2 className="store-heading">national super market</h2>

    <div className="store-grid">
      {brand2.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="item"
          className="store-image"
        />
      ))}
    </div>
  </div>
      
               {/* //////////////////PRODUCTS 4  3 frame*/}
         <div
    className="store-card"
    onClick={() => navigate("/Matha")}
  >
    <h2 className="store-heading">Matha Stores</h2>

    <div className="store-grid">
      {brand2.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="item"
          className="store-image"
        />
      ))}
    </div>
  </div>
       
      </div>
      
      <HorizontalScroll
  title="JPR store with  Best products"
  data={Groceries}
  onClick={() => navigate("/Jpr")}></HorizontalScroll>

 <HorizontalScroll

 title=" Garos storesst Snacks & Drinks"
  data={snack} onClick={() => navigate("/Garos")}></HorizontalScroll>


  
  
  <div style={{ padding:"10"}}>
 
  
  <footer
      style={{
        background: "#156028",
        color: "white",
        padding: "30px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <div>
        <h3>ABOUT</h3>
        <p>Contact Us</p>
        <p>About</p>
        <p>Career</p>
        <p>AKmart</p>
      </div>

      <div>
        <h3>GROUP COMPANIES</h3>
        <p>akmart watch website</p>
        <p>akmart online shipping</p>
        <p>akmart online courses</p>
        <p>AKmart grocery</p>
      </div>

      <div>
        <h3>HELP</h3>
        <p>Payment</p>
        <p>Shipping</p>
        <p>Returns</p>
        <p>FAQ</p>
      </div>

      <div>
        <h3>CONSUMER POLICY</h3>
        <p>Terms of Use</p>
        <p>Security</p>
        <p>Privacy</p>
        <p>Site Map</p>
      </div>

      <div
        style={{
          borderLeft: "2px solid gray",
          paddingLeft: "20px",
        }}
      >
        <h3>contact Us</h3>

        <p>📧
   email: arunthangadurai2006@gmail.com</p>
        
        <p>☎️ mobile: XXXXXXXXXX</p>
      </div>

     
    </footer>
 </div>

</div>
    </>
   );
  }
  
  
