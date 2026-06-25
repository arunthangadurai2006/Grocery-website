import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import National from "./National";
import Matha from "./Matha";
import Garos from "./Garos";
import Jpr from "./Jpr";
import Naga from "./Naga";
import HorizontalScroll from "./HorizontalScroll";
import Signup from "./Signup";
import About from './About';
import Checkout from "./Checkout";
import OrderSuccess from "./OrderSuccess";
function App() {
  return (
    <Routes>
      {/* ✅ DEFAULT PAGE */}
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/National" element={<National />} />
      <Route path="/Matha" element={<Matha />} />
      <Route path="/Garos" element={<Garos />} />
      <Route path="/Jpr" element={<Jpr />} />
      <Route path="/Naga" element={<Naga />} />
      <Route path="/HorizontalScroll" element={<HorizontalScroll />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route
  path="/order-success"
  element={<OrderSuccess />}
/>
    </Routes>
  );
}

export default App;