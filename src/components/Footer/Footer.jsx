import React from 'react'
import Container from '../Container/Container'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'
import logo from "/images/logo.png";
import call from "/images/call.svg";
import location from "/images/location.svg";
function Footer() {
    return (
        <div className={styles.line}>
        <Container>
        <footer className={styles.footer}>
          <>
            <Link to='/'><img className={styles.img} src={logo} alt="logo-image"/></Link>
          </>
          <ul className={styles.list}>
            <Link to='/'><li>Главная</li></Link>
            <Link to='/menu'><li>Меню</li></Link>
            <Link to='/about'><li>О ресторане</li></Link>
            <Link to='/gallery'><li>Галерея</li></Link>
            <Link to='/contact'><li>Контакты</li></Link>
           
          </ul>
          <div style={{display: 'flex', flexDirection: 'column', }}>
          <div className={styles.call}>
              <img src={call} alt="call-svg" />
              <span>(77) 777-77-77</span>
            </div>
            <div className={styles.call}>
              <img src={location} alt="call-svg"/>
              <span>Новосибирск, улица</span>
            </div>
          </div>
        
        </footer>
      </Container>
      </div>
    )
}
export default Footer