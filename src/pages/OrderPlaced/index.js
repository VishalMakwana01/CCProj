import React from "react";

import { Homepage } from "./styles";
import { Link } from "react-router-dom"

const OrderPlaced = () => {
  return (
    <Homepage>
      <h4>Your Order was placed</h4>
      <h4>Thank you for shopping with us.</h4>
      <h4><Link to="/shop">Check out more</Link></h4>
    </Homepage>
  );
};

export default OrderPlaced;
