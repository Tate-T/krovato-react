import React, { Fragment } from "react";
import promoIcon from "../../images/basket/promo.svg";
import checkIcon from "../../images/basket/check.svg";
import arrowShow from "../../images/basket/arrow-show.svg";
import styles from "./BasketList.module.scss";
import spartaImg from "../../images/basket/sparta.jpg";
import deleteSvg from "../../images/basket/delete.svg";
const validPromoCodes = {
  DISCOUNT10: 10,
  SPRING20: 20,
  FREESHIP: 0,
};

const imgBedroom = [
  {
    img: spartaImg,
    alt: "sparta-bedroom",
    description: "Ліжко Спарта / Sparta з підйомним механізмом",
    size: "Розмір: 61 x 184 x 2130 мм",
    price: "15 400 грн.",
    svg: checkIcon,
  },
  {
    img: spartaImg,
    alt: "sparta-bedroom",
    description: "Ліжко Спарта / Sparta з підйомним механізмом",
    size: "Розмір: 61 x 184 x 2130 мм",
    price: "15 400 грн.",
    svg: checkIcon,
  },
  {
    img: spartaImg,
    alt: "sparta-bedroom",
    description: "Ліжко Спарта / Sparta з підйомним механізмом",
    size: "Розмір: 61 x 184 x 2130 мм",
    price: "15 400 грн.",
    svg: checkIcon,
  },
];


class BasketList extends React.Component {
    state = {
        counts: imgBedroom.map(() => 1),
        showAll: false,
        discountPercent: 0,
        promoMessage: '',
    };

    handleAddItem = (index) => {
        const counts = [...this.state.counts];
        counts[index]++;
        this.setState({ counts });
    };

    handleMinusItem = (index) => {
        const counts = [...this.state.counts];
        if (counts[index] > 1) {
            counts[index]--;
            this.setState({ counts });
        }
    };

    toggleShowAll = () => {
        this.setState(prevState => ({ showAll: !prevState.showAll }));
    };

    applyPromo = () => {
        const input = document.getElementById("promoInput").value.trim().toUpperCase();

        if (validPromoCodes.hasOwnProperty(input)) {
            const discount = validPromoCodes[input];
            if (discount > 0) {
                this.setState({
                    discountPercent: discount,
                    promoMessage: `Промокод застосовано! Знижка ${discount}%`
                });
            } else {
                this.setState({
                    discountPercent: 0,
                    promoMessage: `Промокод застосовано! Безкоштовна доставка`
                });
            }
        } else {
            this.setState({
                discountPercent: 0,
                promoMessage: "Недійсний промокод"
            });
        }
    };

    getTotalPrice = () => {
        const total = imgBedroom.reduce((total, bed, index) => {
            const priceNumber = Number(bed.price.replace(/\D/g, ''));
            return total + priceNumber * this.state.counts[index];
        }, 0);

        if (this.state.discountPercent > 0) {
            return total * (1 - this.state.discountPercent / 100);
        }
        return total;
    };

    render() {
        return (
            <Fragment>
                <section>
                    <div className={styles.wrapperBasket}>
                        <p className={styles.textBasket}>
                            Ваш кошик
                            <span className={styles.textBasketNumber}>
                                {this.state.counts.reduce((acc, count) => acc + count, 0)}
                            </span>
                        </p>
                        <ul>
                            {imgBedroom.map((bed, index) => {
                                const isHidden = !this.state.showAll && index >= 2;
                                return (
                                    <li key={index} className={`${styles.containerBed} ${isHidden ? styles.hiddenOnMobile : ''}`}>
                                        <div className={styles.containerDescription}>
                                            <img src={bed.img} alt={bed.alt} className={styles.imgBed} />
                                            <div className={styles.containerCount}>
                                                <button onClick={() => this.handleAddItem(index)} className={styles.btnMath}>+</button>
                                                <p>{this.state.counts[index]}</p>
                                                <button onClick={() => this.handleMinusItem(index)} className={styles.btnMath}>-</button>
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
                                        <button className={styles.btnDelete}>
                                            <img src={deleteSvg} alt="deleteSvg" />
                                        </button>
                                    </li>
                                )
                            })}
                            <div className={styles.shadowContainer}>
                                {!this.state.showAll && <div className={styles.shadowFade}></div>}
                                <button onClick={this.toggleShowAll} className={styles.buttonShowAll}>
                                    {this.state.showAll ? "Сховати" : "Показати всі"}
                                    <img
                                        src={arrowShow}
                                        alt="arrow-show"
                                        className={`${styles.arrowIcon} ${this.state.showAll ? styles.rotated : ''}`}
                                    />
                                </button>
                            </div>
                        </ul>
                        <div className={styles.containerPromocode}>
                            <div className={styles.promocodeDecription}>
                                <img src={promoIcon} alt="promo-icon" />
                                <p>Є промокод?</p>
                            </div>
                            <div className={styles.promocodeDecription}>
                                <input type="text" placeholder="Введіть код" className={styles.inputPromocode} id="promoInput" />
                                <button className={styles.buttonPromocode} onClick={this.applyPromo}>Ок</button>
                            </div>
                        </div>
                        <p id="message">{this.state.promoMessage}</p>
                        <div>
                            <p className={styles.textTogether}>Разом:</p>
                            <ul className={styles.listContainer}>
                                <li className={styles.togetherSum}>
                                    <p className={styles.textSum}>{this.state.counts.reduce((acc, count) => acc + count, 0)} товари на суму:</p>
                                    <div className={styles.lineDotted}></div>
                                    <p>{this.getTotalPrice().toLocaleString('uk-UA')} грн.</p>
                                </li>
                                <li className={styles.togetherSum}>
                                    <p className={styles.textSum}> Вартість доставки:</p>
                                    <div className={styles.lineDotted}></div>
                                    <p>За тарифами оператора</p>
                                </li>
                                <li className={styles.togetherSum}>
                                    <p className={styles.textSum}>До оплати:</p>
                                    <div className={styles.lineDotted}></div>
                                    <p className={styles.textTogether}>{this.getTotalPrice().toLocaleString('uk-UA')} грн.</p>
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
        );
    }
}


export default BasketList;
