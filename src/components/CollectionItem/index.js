import React, { useState } from 'react';
import firebase from "firebase/app";
import store from "../../redux/store"
import 'firebase/firestore'
import { useHistory } from "react-router-dom"
import {
  CollectionItemWrapper,
  Name,
  Price,
  Image,
  CollectionFooter,
} from "./styles";



const CollectionItem = ({ id, name, imageUrl, price }) => {
  var items = []
  const [storState, setStore] = useState(store.getState())
  let history = useHistory()
  const addCart = async (id, name, imageUrl, price) => {

    if (storState.user.currentUser == null) {
      history.push("/signin")
    }
    else {
      firebase.firestore().collection("cart").doc(storState.user.currentUser.currentUser.id)
        .update({ 'items': firebase.firestore.FieldValue.arrayUnion({ 'id': id, 'name': name, 'imageUrl': imageUrl, 'price': price, 'Quantity': 1 }) })
        .then(res => {
          console.log("Added to Cart")
          alert("Added to Cart")
        })
    }
  }

  return (
    <CollectionItemWrapper>
      <Image image={imageUrl} />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </CollectionFooter>
      <button onClick={() => addCart(id, name, imageUrl, price)} style={{ marginTop: "10px" }}>Add to Cart</button>
    </CollectionItemWrapper>
  );
};

export default CollectionItem;
