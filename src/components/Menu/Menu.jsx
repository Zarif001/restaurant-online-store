import React from "react";
import styles from "./Menu.module.scss";
import Container from "../Container/Container";
import Sort from "../Sort/Sort";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productActions } from "../../store";

function Menu() {
  const products = useSelector((state) => state.products.products);
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const filteredProducts =
    selectedCategory == null
      ? products
      : products.filter((product) => product.category === selectedCategory);
  const cartItems = useSelector(state => state.products.cartItems)

  const dispatch = useDispatch()

  const getQuantityInCart = (productId) => {
    const cartItem = cartItems.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0; 
  };
  return (
    <div className={styles.menu}>
      <Container>
        <h1 className={styles.title}>Меню</h1>
        <Sort/>
        <div className={styles.items}>
          {filteredProducts.map((item) => {
            const quantityInCart = getQuantityInCart(item.id);

            return (
              <div className={styles.item} key={item.id}>
                <img src={item.image} alt="product image" />
                <h2>{item.name}</h2>
                <p>{item.describtion}</p>
                <div className={styles.info}>
                  <span>{item.price}$</span>
                  <button onClick={() => dispatch(productActions.addItem(item))}>
                    Добавить
                    {quantityInCart > 0 && ` (${quantityInCart})`}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>  
    </div>
  );
}
export default Menu;
