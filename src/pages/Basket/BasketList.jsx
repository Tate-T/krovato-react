import React, { Fragment } from "react";
import promoIcon from '../../images/basket/promo.svg'
import checkIcon from '../../images/basket/check.svg'
//import Container from "../../components/Container/Container";
import styles from './Basket.module.scss'
import spartaImg from '../../images/basket/sparta.jpg'
const validPromoCodes = {
    "DISCOUNT10": 10,
    "SPRING20": 20,
    "FREESHIP": 0,
};
const imgBedroom = [
    { img: spartaImg, alt: "sparta-bedroom", description: "Ліжко Спарта / Sparta з підйомним механізмом", size: "Розмір: 61 x 184 x 2130 мм", price: "15 400 грн.", svg: checkIcon },
    { img: spartaImg, alt: "sparta-bedroom", description: "Ліжко Спарта / Sparta з підйомним механізмом", size: "Розмір: 61 x 184 x 2130 мм", price: "15 400 грн.", svg: checkIcon },
    { img: spartaImg, alt: "sparta-bedroom", description: "Ліжко Спарта / Sparta з підйомним механізмом", size: "Розмір: 61 x 184 x 2130 мм", price: "15 400 грн.", svg: checkIcon }
]
function applyPromo() {
    const input = document.getElementById("promoInput").value.trim().toUpperCase();
    const messageEl = document.getElementById("message");

    if (validPromoCodes.hasOwnProperty(input)) {
        const discount = validPromoCodes[input];
        if (discount > 0) {
            messageEl.textContent = `Промокод застосовано! Знижка ${discount}%`;
        } else {
            messageEl.textContent = `Промокод застосовано! Безкоштовна доставка`;
        }
    } else {
        messageEl.textContent = "Недійсний промокод";
    }
}
class BasketList extends React.Component {
    state = {
        counts: imgBedroom.map(() => 1)
    }
    handleAddItem = (index) => {
        const counts = [...this.state.counts];
        counts[index]++;
        this.setState({ counts });
    }
    handleMinusItem = (index) => {
       const counts = [...this.state.counts];
        if (counts[index] > 1) { 
            counts[index]--; 
            this.setState({ counts });
        }
    }
    render() {
        return (
            <Fragment>
                <section>
                    <div className={styles.wrapperBasket}>
                        <p className={styles.textBasket}>
                            Ваш кошик
                            <span className={styles.textBasketNumber}> 4 </span>
                        </p>
                        <ul>
                            {imgBedroom.map((bed, index) => (
                                <li key={index} className={styles.containerBed}>
                                    <div className={styles.containerDescription}>
                                        <img src={bed.img} alt={bed.alt} className={styles.imgBed} />
                                        <div className={styles.containerCount}>
                                             <button onClick={() => this.handleAddItem(index)}>+</button>
                                            <p>{this.state.counts[index]}</p>
                                         <button onClick={() => this.handleMinusItem(index)}>-</button>
                                        </div>
                                    </div>
                                    <div className={styles.containerDescription}>
                                        <p className={styles.textBed}>{bed.size}</p>
                                        <p className={styles.textDescription}>{bed.description}</p>
                                        <div className={styles.bedStatus}>
                                            <img src={bed.svg} alt="icon-check" />
                                            <p className={styles.textBed}>В наявності</p>
                                        </div>
                                        <p className={styles.textPrice}>{bed.price}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.containerPromocode}>
                            <img src={promoIcon} alt="promo-icon" />
                            <p>Є промокод?</p>
                            <input type="text" placeholder="Введіть код" className={styles.inputPromocode} id="promoInput" />
                            <button className={styles.buttonPromocode} onClick={applyPromo}>Ок</button>
                        </div>
                        <p id="message"></p>
                        <div>
                            <p>Разом</p>
                            <ul className={styles.listContainer}>
                                <li className={styles.togetherSum}>
                                    <p className={styles.textSum}>4 товари на суму:</p>
                                    <div className={styles.lineDotted}></div>
                                    <p>540 269 грн.</p>
                                </li>
                                <li className={styles.togetherSum}>
                                   <p className={styles.textSum}> Вартість доставки:</p>
                                    <div className={styles.lineDotted}></div>
                                    <p>За тарифами оператора</p>
                                </li>
                                 <li className={styles.togetherSum}>
                                    <p className={styles.textSum}>До оплати:</p>
                                    <div className={styles.lineDotted}></div>
                                    <p>540 269 грн.</p>
                                </li>
                            </ul>
                            <div className={styles.containerBed}>
                            <input type="checkbox" />
                            <p>Не передзвонюйте мені для підтвердження замовлення</p>
                            </div>
                        </div>
                            <button className={styles.btnOrder} onClick={this.props.orderButton}>ОФОРМИТИ ЗАМОВЛЕННЯ</button>
                        <p>Підтверджуючи замовлення, я приймаю умови <span className={styles.userOkay}>Угоди користувача</span></p>
                    </div>
                </section>
            </Fragment>
        )
    }
}
export default BasketList;