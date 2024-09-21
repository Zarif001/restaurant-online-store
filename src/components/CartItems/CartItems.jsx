import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../Container/Container";
import styles from "./CartItems.module.scss";
import { productActions } from "../../store";
import { deleteItemFromDB } from "../../store/action";
import Forma from "./Forma";

function CartItems() {
  const cartItems = useSelector((state) => state.products.cartItems);

  const overallPrice = useSelector((state) => state.products.overallPrice);
  const dispatch = useDispatch();

  const removeItemHanlder = (id) => {
    dispatch(deleteItemFromDB(id));
  };

  const addItemHandler = (item) => {
    dispatch(productActions.addItem(item));
  };

  return (
    <Container>
      <div className={styles.cart}>
        <h3>Корзина</h3>
        {cartItems.map((item) => (
          <div className={styles.box} key={item.id}>
            <img 
            className={styles.img}
              src={item.image}
              alt={item.id + "image"}
            />
            <div>
              <h4>{item.name}</h4>
              <p>{item.describtion}</p>
            </div>

            <div className={styles.actions}>
              <button
                className={styles.minus}
                onClick={() => removeItemHanlder(item.id)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className={styles.plus}
                onClick={() => addItemHandler(item)}
              >
                +
              </button>
            </div>
            <p>{item.totalPrice.toFixed(2)}$</p>
          </div>
        ))}

        <div className={styles.texts}>
          <p className={styles.p}>
          Оставьте свои данные и мы свяжемся с вами для уточнения деталей заказа.
         <span style={{fontFamily: 'CB'}}> Обратите внимание, что оплата заказа осуществляется при получении</span>
          </p>
        <p className={styles.price}>Всего к оплате: {overallPrice.toFixed(2)}$</p>
        </div>

        <Forma/>

      </div>
    </Container>
  );
}
export default CartItems;
