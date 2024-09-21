import React from 'react'
import styles from './SuccessOrder.module.scss'
import Container from '../Container/Container'
import { useDispatch, useSelector } from 'react-redux'
import { productActions } from '../../store'
import { Link } from 'react-router-dom'
function SuccessOrder() {
    const dispatch = useDispatch()

    const handleReload = () =>{
        dispatch(productActions.pageReload())
    }
    
    return(
        <Container>
        <div className={styles.order}>
           <div className={styles.orderContent}>
            <div>
            <h2>Спасибо За Заказ</h2>
            <p>Мы свяжемся с вами в течении 5 минут для уточнения всех деталей</p>
            <Link to='/'>
            <button onClick={handleReload}>На главную</button>
            </Link>
            </div>
            <img src="/images/thanksImg.png" alt="thanksImg" />
           </div>
        </div> 
       
        </Container>
    )
}
export default SuccessOrder