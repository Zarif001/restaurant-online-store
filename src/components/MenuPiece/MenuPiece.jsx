import React from "react";
import styles from "./MenuPiece.module.scss";
import arrow from "/images/arrow.svg";
import Container from "../Container/Container";
import { productActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";
function MenuPiece() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.products.cartItems);

  const getQuantityInCart = (productId) => {
    const cartItem = cartItems.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className={styles.menu}>
      <Container>
        <h1 className={styles.title}>Наше Меню</h1>

        <div className={styles.items}>
          {products
            .filter((item) => item.category === "turk")
            .map((item) => {
              const quantityId = getQuantityInCart(item.id)
            return (
              <div className={styles.item} key={item.id}>
              <img src={item.image} alt="product image" />
              <h2>{item.name}</h2>
              <div className={styles.info}>
                <span>{item.price}$</span>
                <button
                  onClick={() => dispatch(productActions.addItem(item))}
                >
                  Добавить{quantityId > 0 && `(${quantityId})`}
                </button>
              </div>
            </div>
            )
            })}
        </div>
        <div className={styles.more}>
          <a href="/menu">
            <p>Показать еще</p>
          </a>
          <span>
            <img src={arrow} alt="arrow-svg" />
          </span>
        </div>
      </Container>
    </div>
  );
}
export default MenuPiece;
