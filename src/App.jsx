import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing/Routing";
import { jwtDecode } from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { getJwt } from "./Services/userServices";
import { addToCartAPI, getCartAPI } from "./Services/cartServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

setAuthToken(getJwt());
const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const jwtUser = jwtDecode(jwt);
      if (Date.now() >= jwtDecode.exp * 1000) {
        localStorage.removeItem("token");
        location.reload();
      } else {
        setUser(jwtUser);
      }
    } catch (error) {}
  }, []);

  const addToCart = (product, quantity) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (item) => item.product._id === product._id
    );
    if (productIndex === -1) {
      updatedCart.push({ product: product, quantity: quantity });
    } else {
      updatedCart[productIndex].quantity += quantity;
    }

    setCart(updatedCart);
    addToCartAPI(product._id, quantity)
      .then((res) => {
        toast.success("Product Added Successfully ");
      })
      .catch((err) => {
        toast.error(" Failed To Add Product ");
        setCart(cart);
      });
  };

  const getCart = () => {
    getCartAPI()
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => {
        toast.error("Something Went Wrong!");
      });
  };

  useEffect(() => {
    if (user) {
      getCart();
    }
  }, [user]);

  return (
    <div className="app">
      <Navbar user={user} cartCount={cart.length} />
      <main>
        <ToastContainer position="bottom-right" />
        <Routing addToCart={addToCart} cart={cart} />
      </main>
    </div>
  );
};

export default App;
