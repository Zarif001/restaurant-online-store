import React from "react";
import Nav from "../../components/Nav/Nav";
import CartItems from "../../components/CartItems/CartItems";
import { useSelector } from "react-redux";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import Footer from "../../components/Footer/Footer";
import SuccessOrder from "../../components/SuccessOrder/SuccessOrder";

export default function CartPage() {
  const order = useSelector((state) => state.products.order);
  const cartItems = useSelector((state) => state.products.cartItems);
  return (
    <div>
      <Nav />
      {order ? (
        <SuccessOrder />
      ) : cartItems.length > 0 ? (
        <CartItems  />
      ) : (
        <EmptyCart />
      )}
      <Footer />
    </div>
  );
}
