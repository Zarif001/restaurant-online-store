import React from "react";
import Container from "../Container/Container";
import star from "/images/star.svg";
import styles from "./About.module.scss";
import about1 from '/images/about1.png'
import about2 from '/images/about2.png'
import about3 from '/images/about3.png'
import about4 from '/images/about4.png'
export default function About() {
  return (
    <>
      <Container>
        <div className={styles.about}>
          <div className={styles.content}>
            <h2>О нас</h2>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              feugiat est a elit tristique efficitur. Phasellus sodales lectus
              ut tincidunt sodales. Pellentesque viverra mattis mattis. Donec
              pretium posuere enim, id tincidunt elit scelerisque vel. Etiam
              consectetur fermentum odio euismod ullamcorper.
            </p>

            <p className={styles.p}>
              Pellentesque at urna dui. Donec vestibulum maximus tempus. Donec
              vehicula, augue quis maximus vestibulum, arcu eros facilisis nunc,
              blandit fringilla enim elit vel odio. Nam ut turpis pretium,
              placerat lectus nec, placerat arcu. Nunc vehicula arcu vel mollis
              scelerisque. Nulla tincidunt at turpis vitae malesuada. Quisque in
              velit orci. Pellentesque sed consequat sapien.
            </p>

            <p className={styles.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              feugiat est a elit tristique efficitur. Phasellus sodales lectus
              ut tincidunt sodales. Pellentesque viverra mattis mattis. Donec
              pretium posuere enim, id tincidunt elit scelerisque vel. Etiam
              consectetur fermentum odio euismod ullamcorper.
            </p>
            <div className={styles.box}>
              <div className={styles.starBoxes}>
                <img src={star} alt="star-svg" />
                <p>Lorem ipsum dolor sit amet, consectetur </p>
              </div>
              <div className={styles.starBoxes}>
                <img src={star} alt="star-svg" />
                <p>Lorem ipsum dolor sit amet, consectetur </p>
              </div>
              <div className={styles.starBoxes}>
                <img src={star} alt="star-svg" />
                <p>Lorem ipsum dolor sit amet, consectetur </p>
              </div>
              <div className={styles.starBoxes}>
                <img src={star} alt="star-svg" />
                <p>Lorem ipsum dolor sit amet, consectetur </p>
              </div>
            </div>
          </div>
          <div className={styles.contentImage}>
           <img className={styles.img} src={about1} alt="first about picture" />
           <img className={styles.img} src={about2} alt="second about picture" />
           <img className={styles.img} src={about3} alt="third about picture" />
          <img className={styles.img} src={about4} alt="fourth about picture" />
          </div>
        </div>
      </Container>
    </>
  );
}
