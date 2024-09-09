import React from "react";
import Container from "../Container/Container";
import styles from "./Galleries.module.scss";
function Galleries() {
  return (
    <div className={styles.galleries}>
      <Container>
        <h3>Галлерея</h3>
        <div className={styles.pictures}>
          <img src="/images/gallery/gallery1.png" alt="gallery-img1" className={styles.img} />
          <img src="/images/gallery/gallery2.png" alt="gallery-img2" className={styles.img} />
          <img src="/images/gallery/gallery3.png" alt="gallery-img3" className={styles.img} />
          <img src="/images/gallery/gallery4.png" alt="gallery-img4" className={styles.img} />
          <img src="/images/gallery/gallery5.png" alt="gallery-img5" className={styles.img} />
          <img src="/images/gallery/gallery6.png" alt="gallery-img6" className={styles.img} />
          <img src="/images/gallery/gallery7.png" alt="gallery-img7" className={styles.img} />
          <img src="/images/gallery/gallery8.png" alt="gallery-img8" className={styles.img} />
          <img src="/images/gallery/gallery9.png" alt="gallery-img9" className={styles.img} />
          <img src="/images/gallery/gallery10.png" alt="gallery-img10" className={styles.img} />
          <img src="/images/gallery/gallery11.png" alt="gallery-img11" className={styles.img} />
          <img src="/images/gallery/gallery12.png" alt="gallery-img12" className={styles.img} />
        </div>
      </Container>
    </div>
  );
}
export default Galleries;
