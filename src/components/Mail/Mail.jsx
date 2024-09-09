import React from "react";
import styles from "./Mail.module.scss";
import Container from "../Container/Container";

function Mail() {
  return (
    <div className={styles.mailBg}>
      <Container>
        <div className={styles.mail}>
          <div className={styles.left}>
            <h3>Забронируйте стол</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              feugiat est a elit tristique efficitur
            </p>
            <div className={styles.box}>
              <img src="/images/call.svg" alt="call" loading="lazy"/>
              <span>+7 (863) 283-27-37 <br /> +7 (960) 470-88-82</span>
            </div>
            <div className={styles.box}>
              <img src="/images/location.svg" alt="call"loading="lazy" />
              <span>
                г. Ростов-на-Дону, ул. 8-я Линия, 1/37 <br />  г. Ростов-на-Дону, пр.
                Коммунистический, 30
              </span>
            </div>
            <div className={styles.box}>
              <img src="/images/time.svg" alt="call" loading="lazy"/>
              <span>Ежедневно | 12:00 — 00:00</span>
            </div>
          </div>
          <form className={styles.form}>
            <input type="text" placeholder="Имя" />
            <input type="number" placeholder="Номер телефона" />
            <button type="submit">Забронировать</button>
          </form>
        </div>
      </Container>
    </div>
  );
}
export default Mail;
