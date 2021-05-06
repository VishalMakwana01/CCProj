import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { CartDropdownWrapper, CartItems, Button } from "./styles";
import firebase from "firebase/app";
import store from "../../redux/store"
import 'firebase/firestore'
const CartDropdown = () => {
  const [state, setState] = useState([])
  const [storState, setStore] = useState(store.getState())
  useEffect(() => {
    if (storState.user) {
      fetchCart();
    }
  })
  const fetchCart = async () => {
    firebase.firestore().collection("cart").doc(storState.user.currentUser.currentUser.id)
      .get()
      .then(data => {
        setState(data.data() && data.data().items ? data.data().items : [])
      });
  }
  const cartitem = [
    {
      id: 1,
      name: "Brown Brim",
      imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      price: 25,
    },
    {
      id: 6,
      name: "Palm Tree Cap",
      imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
      price: 14,
    },
    {
      id: 2,
      name: "Adidas Yeezy",
      imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
      price: 280,
    },
  ]

  return (
    <>
      {() => fetchCart()}
      <CartDropdownWrapper>
        <CartItems>
          <div style={{ display: "flex", flexDirection: "row" }} >
            <span style={{ width: "20%" }}>
            </span><h5 style={{ width: "55%" }}>Name</h5><h5 style={{ width: "20%" }}>Price</h5></div>
          {state && state
            .map((item) => (

              <div key={item.id} style={{ display: "flex", flexDirection: "row" }} >
                <span style={{ width: "20%" }}><img src={item.imageUrl} width="30px" height="30px"></img>
                </span><h5 style={{ width: "55%" }}>{item.name}</h5><h5 style={{ width: "20%" }}>{item.price}$</h5></div>

            ))}
        </CartItems>
        <Button><Link to="/checkout">GO TO CHECKOUT</Link></Button>
      </CartDropdownWrapper>
    </>
  );
};

export default CartDropdown;
