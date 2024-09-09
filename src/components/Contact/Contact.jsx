import React from "react";
import styles from "./Contact.module.scss";
import Container from "../Container/Container";

function Contact() {
  return (
    <div className={styles.mailBg}>
      <Container>
        <div className={styles.mail}>
          <div className={styles.left}>
            <h3>ДОРОГИЕ ГОСТИ!</h3>
            <p>
            Ждем вас!Приходите и вы будете приятно удивлены!
            </p>
            <div className={styles.box}>
              <img src="/images/call.svg" alt="call" />
              <span>+7 (863) 283-27-37 <br /> +7 (960) 470-88-82</span>
            </div>
            <div className={styles.box}>
              <img src="/images/location.svg" alt="call" />
              <span>
                г. Ростов-на-Дону, ул. 8-я Линия, 1/37 <br />  г. Ростов-на-Дону, пр.
                Коммунистический, 30
              </span>
            </div>
            <div className={styles.box}>
              <img src="/images/time.svg" alt="call" />
              <span>Ежедневно | 12:00 — 00:00</span>
            </div>
          </div>
      <div className={styles.picture}>
        <img src="/images/gallery/gallery6.png" alt="photo6" />
      </div>
        </div>
      </Container>
    </div>
  );
}
export default Contact;
