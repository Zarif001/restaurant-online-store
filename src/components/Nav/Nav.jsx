import React from "react";
import styles from "./Nav.module.scss";
import Container from "../Container/Container";
import logo from "/images/logo.png";
import call from "/images/call.svg";
import cart from "/images/cart.svg";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";

export default function Nav() {
  const totalQuantity = useSelector((state) => state.products.totalQuantity);
  
  return (
    <Container>
      <nav className={styles.nav}>
        <>
          <Link to='/'><img className={styles.img} src={logo} alt="logo-image" /></Link>
          <div className={styles.call}>
            <img src={call} alt="call-svg" />
            <span>(77) 777-77-77</span>
          </div>
        </>
        <ul className={styles.list}>
          <Link to='/'><li>Главная</li></Link>
          <Link to='/menu'><li>Меню</li></Link>
          <Link to='/about'><li>О ресторане</li></Link>
          <Link to='/gallery'><li>Галерея</li></Link>
          <Link to='/contact'><li>Контакты</li></Link>
        </ul>
       
       <Link to='/cart'>
       <div className={styles.cart} >
          <img src={cart} alt="cart-svg" />
          <span>{totalQuantity}</span>
        </div>
       </Link>
      </nav>
    </Container>
  );
}
