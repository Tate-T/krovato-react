import styles from './Form.module.scss';
import React from 'react';
import Basket from './Basket';
import Modal from './Modal';
import infoCircle from '../../images/basket/icon-info-mobile.svg';
import iconComment from '../../images/basket/icon-comment-mobile.svg';
import iconDelivery from '../../images/basket/icon-dostavka-mobile.svg';
import checkCircle from '../../images/basket/check-circle-mobile.svg';
import location from '../../images/basket/location-mobile.svg';
import novaPoshta from '../../images/basket/novaposhta-mobile.svg';
import deliveryMan from '../../images/basket/deliveryman.svg'
import masterCard from '../../images/basket/mastercard-logo-mobile.svg'
import visaCard from '../../images/basket/visa-card-logo.svg';
import privatPay from '../../images/basket/privat-pay-logo.svg';
import creditLogo from '../../images/basket/privaty-credit-logo.svg';
import monobankLogo from '../../images/basket/monobank.svg';
import iconPay from '../../images/basket/icon-oplata.svg';
import btnLogo from '../../images/basket/map.svg';
const cardDelivery = [
    { text: "Самовивіз із магазину", description: "Бесплатно", img: checkCircle, alt: "check-icon" },
    { text: "Графік роботи: щодня з 9:00 до 18:00", description: "м. Київ, пров. Ізяславський 52, пов. 2", img: location, alt: "location-icon", map: "На мапі", mapIcon: btnLogo },
    { text: "Доставка Нова Пошта", description: "≈ від 500 грн", img: novaPoshta, alt: "novaposhta-icon" },
    { text: "Доставка кур'єром", description: "≈ від 200 грн", img: deliveryMan, alt: "deliveryman-icon" }
]
const paymentOption = [
    { text: "Готівкою при отриманні (Післясплата)" },
    { text: "Оплата карткою на сайті", pay: masterCard, pay2: visaCard, alt: "mastercard-icon", alt2: "visacard-icon" },
    { text: "Privat Pay", pay: privatPay, alt: "privatpay-icon" },
    { text: "Кредит від Krovato" },
    { text: "Оплата частинами ПриватБанк", pay: creditLogo, alt: "privaticon" },
    { text: "Оплата частинами МоноБанк", pay: monobankLogo, alt: "monobankicon" },
]

class Form extends React.Component {
    state = {
        surnames: JSON.parse(localStorage.getItem("surname")) || [],
        surnameValue: "",
        names: JSON.parse(localStorage.getItem("name")) || [],
        nameValue: "",
        paternals: JSON.parse(localStorage.getItem("paternal")) || [],
        paternalValue: "",
        phones: JSON.parse(localStorage.getItem("phone")) || [],
        phoneValue: "",
        emails: JSON.parse(localStorage.getItem("email")) || [],
        emailValue: "",
        isPerson: JSON.parse(localStorage.getItem("isPerson")) || false,
        comments: JSON.parse(localStorage.getItem("comment")) || [],
        commentValue: "",
        selectedPayment: "",
        isModalOpen: false,
        modalMessage: "",
        selectedDelivery: ""
    }
    handleModalMessage = (message) => {
        this.setState({
            modalMessage: message,
            isModalOpen: true

        })
    }
    handleCloseModal = () => {
        this.setState({
            modalMessage: "",
            isModalOpen: false
        })
    }
    handleSurname = ({ target: { value } }) => {
        this.setState({
            surnameValue: value
        })
    }
    handleName = ({ target: { value } }) => {
        this.setState({
            nameValue: value
        })
    }
    handlePaternal = ({ target: { value } }) => {
        this.setState({
            paternalValue: value
        })
    }
    handlePhone = ({ target: { value } }) => {
        this.setState({
            phoneValue: value
        })
    }
    handleEmail = ({ target: { value } }) => {
        this.setState({
            emailValue: value
        })
    }
    handleChecked = ({ target: { checked } }) => {
        this.setState({
            isPerson: checked
        });
    }
    handleComment = ({ target: { value } }) => {
        this.setState({
            commentValue: value
        })
    }
    handlePay = (text) => {
        this.setState({ selectedPayment: text });
    };
    handleDelivery = (text) => {
        this.setState({ selectedDelivery: text })
    }
    handleInfoOrder = () => {
        const { surnames, surnameValue, names, nameValue, paternals, paternalValue, phones, phoneValue, emails, emailValue, comments, commentValue, selectedPayment, selectedDelivery } = this.state
        const updateSurname = [...surnames, surnameValue]
        const updateName = [...names, nameValue]
        const updatePaternal = [...paternals, paternalValue]
        const updatePhone = [...phones, phoneValue]
        const updateEmail = [...emails, emailValue]
        const updateComment = [...comments, commentValue]
        if (!surnameValue || !nameValue || !paternalValue || !phoneValue || !emailValue || !commentValue) {
            this.handleModalMessage("Заповніть поля!")
            return;
        }
        if (!emailValue.includes("@")) {
            this.handleModalMessage("Email має містити знак @")
            return;
        }
        if (selectedPayment === "") {
            this.handleModalMessage("Будь ласка, оберіть спосіб оплати");
            return;
        }
        if (selectedDelivery === "") {
            this.handleModalMessage("Будь ласка , оберіть спосіб доставки")
            return;
        }
        const infoOrder = {
            surname: surnameValue,
            name: nameValue,
            paternal: paternalValue,
            phone: phoneValue,
            email: emailValue,
            comment: commentValue,
            methodPay: selectedPayment,
            methodDelivery: selectedDelivery
        }
        fetch("http://localhost:3000/info", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                infoOrder
            })
        })
        this.handleModalMessage("Успішно")
        this.setState({
            surnames: updateSurname,
            names: updateName,
            paternals: updatePaternal,
            phones: updatePhone,
            emails: updateEmail,
            comments: updateComment
        })
        localStorage.setItem("surname", JSON.stringify(updateSurname))
        localStorage.setItem("name", JSON.stringify(updateName))
        localStorage.setItem("paternal", JSON.stringify(updatePaternal))
        localStorage.setItem("phone", JSON.stringify(updatePhone))
        localStorage.setItem("email", JSON.stringify(updateEmail))
        localStorage.setItem("comment", JSON.stringify(updateComment))
        this.setState({
            surnameValue: "",
            nameValue: "",
            paternalValue: "",
            phoneValue: "",
            emailValue: "",
            commentValue: "",
            selectedPayment: "",
            selectedDelivery: ""
        });
        const deliveryOption = document.querySelector(".deliveryButton")
        console.log(deliveryOption)
    }
    render() {
        return (
            <div className={styles.mainWrapper}>
                <Modal modalMessage={this.state.modalMessage}
                    isModalOpen={this.state.isModalOpen}
                    handleCloseModal={this.handleCloseModal} />
                <div className={styles.basketWrapper}>
                    <div className={styles.titleContainer}>
                        <img src={infoCircle} alt="icon-info" />
                        <p className={styles.titleOptions}>Інформація про покупця</p>
                    </div>
                    <form className={styles.formInfo} >
                        <label>
                            <input type='text' placeholder="Прізвище" className={styles.inputForm} onChange={this.handleSurname} value={this.state.surnameValue} />
                        </label>
                        <label>
                            <input type='tel' placeholder="Контактний телефон" className={styles.inputForm} onChange={this.handlePhone} value={this.state.phoneValue} />
                        </label>
                        <label>
                            <input type='text' placeholder="Ім'я" className={styles.inputForm} onChange={this.handleName} value={this.state.nameValue} />
                        </label>
                        <label>
                            <input type='email' placeholder="E-mail" className={styles.inputForm} onChange={this.handleEmail} value={this.state.emailValue} />
                        </label>
                        <label>
                            <input type='text' placeholder="По батькові" className={styles.inputForm} onChange={this.handlePaternal} value={this.state.paternalValue} />
                        </label>
                        <div className={styles.titleContainer}>
                            <input type='checkbox' checked={this.state.isPerson} onChange={this.handleChecked} />
                            <p className={styles.textPerson}>Отримуватиме замовлення інша людина</p>
                        </div>
                    </form>
                    <hr className={styles.dash} />
                    <div className={styles.mainWrapperDelivery}>
                        <div className={styles.titleContainer}>
                            <img src={iconDelivery} alt="icon-delivery" />
                            <p className={styles.titleOptions}>Вибір способу доставки</p>
                        </div>
                        {cardDelivery.map((elem, index) => (
                            <button
                                key={index}
                                className={`${styles.deliveryButton} ${this.state.selectedDelivery === elem.text ? styles.selected : ''}`}
                                onClick={() => this.handleDelivery(elem.text)}>
                                <img src={elem.img} alt={elem.alt} />
                                <div>
                                    <p className={styles.textLocation}>{elem.text}</p>
                                    
                                    <p className={styles.textDescription}>{elem.description}</p>
                                </div>
                                {elem.map && (
                                    <a href='https://maps.app.goo.gl/N2bf9k6Ws4Ujx3Wd6'>
                                    <button className={styles.btnMap} type="button">
                                        <img src={elem.mapIcon} alt={elem.alt}/>
                                        <p className={styles.textMap}>{elem.map}</p>
                                    </button>
                                    </a>
                                )}
                            </button>
                        ))}
                    </div>
                    <hr className={styles.dash} />
                    <ul >
                        <div className={styles.titleContainer}>
                            <img src={iconPay} alt="icon-pay" />
                            <p className={styles.titleOptions}>Вибір способу оплати</p>
                        </div>
                        {paymentOption.map((elem, index) => (
                            <li key={index} className={styles.wrapperPayment}>
                                <label className={styles.customCheckbox}>
                                    <input type='checkbox' className={styles.checkPay} checked={this.state.selectedPayment === elem.text}
                                        onChange={() => this.handlePay(elem.text)} />
                                    <span className={styles.circle}></span>
                                    <p className={styles.textPay}>{elem.text}</p>
                                </label>
                                <img src={elem.pay} alt={elem.alt} />
                                <img src={elem.pay2} alt={elem.alt2} />
                            </li>
                        ))}
                    </ul>
                    <hr className={styles.dash} />
                    <div>
                        <div className={styles.titleContainer}>
                            <img src={iconComment} alt="icon-comment" />
                            <p className={styles.titleOptions}>Коментар до замовлення</p>
                        </div>
                        <textarea placeholder="Ваш коментар" className={styles.commentInput} onChange={this.handleComment} value={this.state.commentValue}></textarea>
                    </div>
                </div>
                <Basket orderButton={this.handleInfoOrder} />
            </div>
        )
    }
}
export default Form;