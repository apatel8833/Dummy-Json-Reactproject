import "./App.css";
import Navbar from "./Components/Navbar";
import Demo from "./Pages/Demo";
import  Home  from "./Pages/Home";
import { Route,Routes } from "react-router-dom";
import UserDetails from "./Pages/UserDetails";
import Cart from "./Pages/Cart";
import DisplayProduct from "./Pages/DisplayProduct";
import ProductDetails from "./Pages/ProductDetails";
import NewCart from "./Pages/NewCart";

function App() {
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path="/demo" element={<Home/>}>
        </Route>
        <Route path="/user" element={<Demo/>}></Route>
        <Route path="/cart/:id" element={<Cart/>}></Route>
        <Route path="/user/:id" element={<UserDetails/>}>
        </Route>
        <Route path="/" element={<DisplayProduct/>}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<NewCart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;