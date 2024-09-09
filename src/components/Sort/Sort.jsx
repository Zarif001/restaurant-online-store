import React from "react";
import styles from "./Sort.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productActions } from "../../store";
export default function Sort() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.products.selectedCategory);

  const handleCategoryChange = (category) => {
    dispatch(productActions.filteredByCategory(category));
    console.log(selectedCategory);
  };

  return (
    <>
      <ul className={styles.list}>
        <li
          className={selectedCategory == null ? `${styles.active}` : ""}
          onClick={() => handleCategoryChange(null)}
        >
          Все
        </li>
        <li
          className={selectedCategory == "turk" ? `${styles.active}` : ""}
          onClick={() => handleCategoryChange("turk")}
        >
          Турецские блюда
        </li>
        <li
          className={selectedCategory == "soup" ? `${styles.active}` : ""}
          onClick={() => handleCategoryChange("soup")}
        >
          Супы
        </li>
        <li
          className={selectedCategory == "secfood" ? `${styles.active}` : ""}
          onClick={() => handleCategoryChange("secfood")}
        >
          Вторые блюда
        </li>
        <li
          className={selectedCategory == "pizza" ? `${styles.active}` : ""}
          onClick={() => handleCategoryChange("pizza")}
        >
          Пицца
        </li>
        <li
          className={selectedCategory == "salad" ? `${styles.active}` : ""}
          onClick={() => handleCategoryChange("salad")}
        >
          Салаты
        </li>
        <li
          className={selectedCategory == "drinks" ? `${styles.active}` : ""}
          onClick={() => handleCategoryChange("drinks")}
        >
          Напитки
        </li>
        <li
          className={selectedCategory == "bread" ? `${styles.active}` : ""}
          onClick={() => handleCategoryChange("bread")}
        >
          Хлеб
        </li>
      </ul>
    </>
  );
}
