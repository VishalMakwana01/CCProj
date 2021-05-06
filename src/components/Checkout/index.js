import React, { useState, useEffect } from 'react';
import CustomButton from "../CustomButton";
import firebase from "firebase/app";
import "./styles.css"
import 'firebase/firestore'
import { Buttons } from "./styles"
import { Link } from "react-router-dom"
import store from "../../redux/store"
const Checkout = () => {
  const [state, setState] = useState([])
  const [storState, setStore] = useState(store.getState())
  useEffect(() => {
    fetchCart();
  })
  const fetchCart = async () => {
    firebase.firestore().collection("cart").doc(storState.user.currentUser.currentUser.id)
      .get()
      .then(data => {
        setState(data.data().items)
      });
  }
  const removeItem =async(item)=>{
    firebase.firestore().collection("cart").doc(storState.user.currentUser.currentUser.id)
    .update({ 'items': firebase.firestore.FieldValue.arrayRemove(item)
    .then(res => {
      console.log("Added to Cart")
      alert("Removed from Cart")
    })
  })}
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
  let total_cost = 0;
  const calculateTotalCost = (cost) => {
    total_cost += cost;
  }
  return (
    <>
      <table style={{ textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total price</th>
          </tr>
        </thead>
        <tbody>
          {state && state
            .map((item) => (
              <tr key={item.id}>

                <td style={{ width: "300px" }}><img src={item.imageUrl} height="250px" widht="250px" />
                </td><td style={{ width: "250px" }}>{item.name}</td><td style={{ width: "150px" }}>{item.price}$</td>
                <td>{item.Quantity}</td> <td>{item.price * item.Quantity}$</td>
                {calculateTotalCost(item.price * item.Quantity)}
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total Price :{total_cost}$ </td>
          </tr>
        </tfoot>
      </table>
      <div style={{marginTop:"50px", display:"flex", flexDirection:"row",width:"930px"}}>
        <div style={{width:"50%"}}>
        <label style={{marginRight:"10px"}}>Address</label>
        <input style={{width:"300px", height:"100px"}}placeholder="Enter Address"></input>
        </div>
        <div>
        <label for="cars">Choose Payment Method:</label>

<select name="cars" id="cars">
  <option value="volvo">COD</option>
  <option value="saab">Credit Card</option>
  <option value="mercedes">Debit Card</option>
  <option value="audi">UPI</option>
</select>
</div>
      </div>
      <div style={{ marginLeft: "30%", marginTop: "50px", textAlign: "center" }}>
        <Buttons>
        <Link to="/OrderPlaced">
          <CustomButton>
            
              Place Order
            
          </CustomButton>
          </Link>
        </Buttons>
      </div>
    </>
  );
};

export default Checkout;
