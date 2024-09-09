import React from 'react'
import Nav from '../../components/Nav/Nav'
import styles from './AboutPage.module.scss'
import CaptionAbout from '../../components/CaptionAbout/CaptionAbout'
import ContentAbout from '../../components/ContentAbout/ContentAbout'
import CarouselAbout from '../../components/CarouselAbout/CarouselAbout'
import Mail from '../../components/Mail/Mail'
import Footer from '../../components/Footer/Footer'

function AboutPage() {
    return(
        <>
        <div className={styles.aboutPage}>
            <Nav/>
            <CaptionAbout/>
        </div>
        <ContentAbout/>
        <CarouselAbout/>
        <Mail/>
        <Footer/>
        </>

    )
}
export default AboutPage