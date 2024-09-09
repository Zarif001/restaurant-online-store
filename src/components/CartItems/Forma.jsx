import React from "react";
import styles from "./CartItems.module.scss";
import { clearFetchData } from "../../store/action";
import { useDispatch } from "react-redux";

function Forma() {
  const dispatch = useDispatch();

  const sumbitHandler = (event) =>{
    event.preventDefault()
    dispatch(clearFetchData())
  }

  return (
    <form className={styles.form} onSubmit={sumbitHandler}>
      <input type="text" placeholder="Имя" required />
      <input type="number" placeholder="Номер телефона" required />
      <input type="text" placeholder="Адрес доставки" required />
      <button type="submit">
        Заказать
      </button>
    </form>
  );
}

export default Forma;
