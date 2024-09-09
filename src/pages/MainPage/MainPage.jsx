import React from "react";
import Nav from "../../components/Nav/Nav";
import Content from "../../components/Content/Content";
import styles from "./MainPage.module.scss";
import About from "../../components/About/About";
import MenuPiece from "../../components/MenuPiece/MenuPiece";
import Review from "../../components/Review/Review";
import Mail from "../../components/Mail/Mail";
import Footer from "../../components/Footer/Footer";
function Main() {
  return (
    <>
      <header className={styles.header}>
        <Nav />
        <Content />
      </header> 
      <main>
        <About/>
        <MenuPiece/>
        <Review/>
        <Mail/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
export default Main;
