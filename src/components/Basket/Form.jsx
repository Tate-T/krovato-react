import styles from './Form.module.scss';
import React from 'react';
import  infoCircle from '../../images/basket/icon-info-mobile.svg';
import iconComment from '../../images/basket/icon-comment-mobile.svg';
import iconDelivery from '../../images/basket/icon-dostavka-mobile.svg';
import checkCircle from '../../images/basket/check-circle-mobile.svg'
import location from '../../images/basket/location-mobile.svg'
class Form extends React.Component {
    render(){
        return(
           <div>
             <p className={styles.textOrder}>Оформлення замовлення</p>
            <div className={styles.containerOrder}>
            <div className={styles.containerTitle}>
                    <img src={infoCircle} alt='infoCircle'/>
                    <p className={styles.textForm}>Інформація про покупця</p>
                    </div>
                <form className={styles.formInfo}>
                    <label>
                        <input type='text' placeholder="Прізвище" className={styles.inputForm}/>
                    </label>
                    <label>
                        <input type='tel' placeholder="Контактний телефон" className={styles.inputForm}/>
                    </label>
                    <label>
                        <input type='text' placeholder="Ім'я" className={styles.inputForm}/>
                    </label>
                    <label>
                        <input type='email' placeholder="E-mail" className={styles.inputForm}/>
                    </label>
                    <label>
                        <input type='text' placeholder="По батькові" className={styles.inputForm}/>
                    </label>
                    <label>
                        <input type='checkbox' />
                        <p className={styles.textPerson}>Отримуватиме замовлення інша людина</p>
                    </label>
                </form>
               
                <div className={styles.containerTitle}>
                    <img src={iconDelivery} alt='infoCircle'/>
                    <p className={styles.textForm}>Вибір способу доставки</p>
                    </div>
                    <div className={styles.containerDelivery}>
                    <div className={styles.freeDelivery}>
                        <img src={checkCircle} alt="checkCircle"/>
                        <p>Самовивіз із магазину</p>
                        <p>Бесплатно</p>
                    </div>
                    <div className={styles.containerMap}>
                        <img src={location} alt="location"/>
                        <p>Графік роботи: щодня з 9:00 до 18:00</p>
                        <p>м. Київ, пров. Ізяславський 52, пов. 2</p>
                        <button>На мапі</button>
                    </div>
                    <div className={styles.containerPostoffice}>
                        <p>Доставка Нова Пошта</p>
                        <p>≈ від 500 грн</p>
                    </div>
                    <div className={styles.containerPostoffice}>
                        <p>Доставка кур'єром</p>
                        <p>≈ від 200 грн</p>
                    </div>
                </div>
                <div className={styles.containerComment}>
                    <div className={styles.containerTitle}>
                        <img src={iconComment} alt="icon-comment"/>
                        <p className={styles.textForm}>Коментар до замовлення</p>
                    </div>
                    <textarea placeholder='Ваш коментар' className={styles.textareaForm}></textarea>
                </div>
            </div>
            </div>
        )
    }
    }
    export default  Form;