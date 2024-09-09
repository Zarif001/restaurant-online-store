import React from "react";
import styles from "./Empty.module.scss";
import Container from "../Container/Container";
function EmptyCart() {
  return (
    <Container>
      <div className={styles.cart}>
      <h2 className={styles.title}>Корзина пуста
          <span className={styles.dot}>.</span>
          <span className={styles.dot}>.</span>
          <span className={styles.dot}>.</span>
        </h2>
        <img src="/images/bin.png" alt="bin" loading="lazy"/>
      </div>
    </Container>
  );
}
export default EmptyCart;
