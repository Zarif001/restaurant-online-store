import React from 'react'
import Container from '../Container/Container'
import styles from './Content.module.scss'
import contentImg from '/images/contentImg.png'

function Content() {
    return <Container>
       <div className={styles.content}>
        <div className={styles.caption}>
        <h1>Ресторан <br /> кавказской кухни</h1>
        <p>Добро пожаловать в "Хинкали DJAN" - место, где каждое блюдо рассказывает свою историю. Откройте для себя ароматы и вкусы кавказской кухни, уникальные и вдохновляющие.</p>
        <button>ЗАБРОНИРОВАТЬ СТОЛ</button>
        </div>
        <div>
            <img src={contentImg} alt="contentImage" />
        </div>

       </div>
    </Container>
}
export default Content