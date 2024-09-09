import React from 'react'
import styles from './Review.module.scss'
import yandex from '/images/yandexRating.png'
import Container from '../Container/Container'
import CarouselRev from '../CarouselRev/CarouselRev'

function Review() {
    return(
        <Container>
        <div className={styles.review}>
            <div className={styles.caption}>
                <h2>отзывы наших дорогих гостей</h2>
                <div className={styles.rating}>
                <img src={yandex} alt="yandex-rating-picture" loading="lazy"/>
                <p>Смотреть все отзывы</p>
                </div>
            </div>
            <CarouselRev/>
        </div>
        </Container>
    )
}
export default Review