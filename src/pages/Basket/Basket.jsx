import styles from './Basket.module.scss';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Modal } from './Modal';
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
import { BasketList } from './BasketList';
import { ContextBasketList } from './ContextBasketList';
import { ContextModal } from './ContextModal';
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
export const Basket = () => {
    const [surnames, setSurname] = useState(() => {
        const savedSurname = localStorage.getItem("surnames")
        return savedSurname ? JSON.parse(savedSurname) : []
    })
    const [surnameValue, setSurnameValue] = useState("")
    const [names, setNames] = useState(() => {
        const savedNames = localStorage.getItem("names")
        return savedNames ? JSON.parse(savedNames) : []
    })
    const [nameValue, setNameValue] = useState("")
    const [paternals, setPaternals] = useState(() => {
        const savedPaternals = localStorage.getItem("paternals")
        return savedPaternals ? JSON.parse(savedPaternals) : []
    })
    const [paternalValue, setPaternalValue] = useState("")
    const [phones, setPhones] = useState(() => {
        const savedPhones = localStorage.getItem("phones")
        return savedPhones ? JSON.parse(savedPhones) : []
    })
    const [phoneValue, setPhoneValue] = useState("")
    const [emails, setEmails] = useState(() => {
        const savedEmails = localStorage.getItem("emails")
        return savedEmails ? JSON.parse(savedEmails) : []
    })
    const [emailValue, setEmailValue] = useState("")
    const [isPerson, setIsPerson] = useState(() => {
        const saved = localStorage.getItem("isPerson")
        return saved ? JSON.parse(saved) : false
    })
    const [comments, setComments] = useState(() => {
        const savedComments = localStorage.getItem("comments")
        return savedComments ? JSON.parse(savedComments) : []
    })
    const [commentValue, setCommentValue] = useState("")
    const [selectedPayment, setPaymentValue] = useState("")
    const [isModal, setIsModal] = useState(false)
    const [message, setMessage] = useState("")
    const [selectedDelivery, setDeliveryValue] = useState("")
    useEffect(() => {
        localStorage.setItem("surnames", JSON.stringify(surnames))
        localStorage.setItem("names", JSON.stringify(names))
        localStorage.setItem("paternals", JSON.stringify(paternals))
        localStorage.setItem("phones", JSON.stringify(phones))
        localStorage.setItem("emails", JSON.stringify(emails))
        localStorage.setItem("isPerson", JSON.stringify(isPerson))
        localStorage.setItem("comments", JSON.stringify(comments))

    }, [surnames, names, paternals, phones, emails, isPerson, comments])
    const handleModalMessage = (message) => {
        setMessage(message)
        setIsModal(true)
    }
    const handleCloseModal = () => {
        setMessage("")
        setIsModal(false)
    }
    const handleSurname = ({ target: { value } }) => {
        setSurnameValue(value)
    }
    const handleName = ({ target: { value } }) => {
        setNameValue(value)
    }
    const handlePaternal = ({ target: { value } }) => {
        setPaternalValue(value)
    }
    const handlePhone = ({ target: { value } }) => {
        setPhoneValue(value)
    }
    const handleEmail = ({ target: { value } }) => {
        setEmailValue(value)
    }
    const handleChecked = ({ target: { checked } }) => {
        setIsPerson(checked)
    }
    const handleComment = ({ target: { value } }) => {
        setCommentValue(value)
    }
    const handlePay = (text) => {
        setPaymentValue(text)
    }
    const handleDelivery = (text) => {
        setDeliveryValue(text)
    }
    const orderButton = () => {
        const updateSurname = [...surnames, surnameValue]
        const updateName = [...names, nameValue]
        const updatePaternal = [...paternals, paternalValue]
        const updatePhone = [...phones, phoneValue]
        const updateEmail = [...emails, emailValue]
        const updateComment = [...comments, commentValue]
        const activeProducts = JSON.parse(localStorage.getItem("activeProducts")) || []
        if (activeProducts.length === 0) {
            handleModalMessage("Кошик порожній");
            return;
        }
        if (!surnameValue || !nameValue || !paternalValue || !phoneValue || !emailValue || !commentValue) {
            handleModalMessage("Заповніть поля!")
            return;
        }
        if (!emailValue.includes("@")) {
            handleModalMessage("Email має містити знак @")
            return;
        }
        if (selectedPayment === "") {
            handleModalMessage("Будь ласка, оберіть спосіб оплати");
            return;
        }
        if (selectedDelivery === "") {
            handleModalMessage("Будь ласка , оберіть спосіб доставки")
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
        axios.post("http://localhost:3000/info", { infoOrder })
            .then(() => handleModalMessage("Успішно"))
            .catch((err) => console.error("Помилка надсилання:", err));
        localStorage.setItem("surnames", JSON.stringify(updateSurname))
        localStorage.setItem("names", JSON.stringify(updateName))
        localStorage.setItem("paternals", JSON.stringify(updatePaternal))
        localStorage.setItem("phones", JSON.stringify(updatePhone))
        localStorage.setItem("emails", JSON.stringify(updateEmail))
        localStorage.setItem("comments", JSON.stringify(updateComment))
        setSurnameValue("");
        setNameValue("");
        setPaternalValue("");
        setPhoneValue("");
        setEmailValue("");
        setCommentValue("");
        setPaymentValue("");
        setDeliveryValue("");
        const deliveryOption = document.querySelector(".deliveryButton")
        console.log(deliveryOption)
    }
    return (
        <div className={styles.mainWrapper}>
            <ContextModal.Provider value={{ handleCloseModal, isModal, message }}>
                <Modal />
            </ContextModal.Provider>
            <div className={styles.basketWrapper}>
                <div className={styles.titleContainer}>
                    <img src={infoCircle} alt="icon-info" />
                    <p className={styles.titleOptions}>Інформація про покупця</p>
                </div>
                <form className={styles.formInfo} >
                    <label>
                        <input type='text' placeholder="Прізвище" className={styles.inputForm} onChange={handleSurname} value={surnameValue} />
                    </label>
                    <label>
                        <input type='tel' placeholder="Контактний телефон" className={styles.inputForm} onChange={handlePhone} value={phoneValue} />
                    </label>
                    <label>
                        <input type='text' placeholder="Ім'я" className={styles.inputForm} onChange={handleName} value={nameValue} />
                    </label>
                    <label>
                        <input type='email' placeholder="E-mail" className={styles.inputForm} onChange={handleEmail} value={emailValue} />
                    </label>
                    <label>
                        <input type='text' placeholder="По батькові" className={styles.inputForm} onChange={handlePaternal} value={paternalValue} />
                    </label>
                    <div className={styles.titleContainer} style={{gap:15}}>
                        <input type='checkbox' checked={isPerson} onChange={handleChecked} className={styles.checkboxes}/>
                        <p className={styles.textPerson}>Отримуватиме замовлення інша людина</p>
                    </div>
                </form>
                <hr className={styles.dash} />
                <div className={styles.titleContainer}>
                    <img src={iconDelivery} alt="icon-delivery" />
                    <p className={styles.titleOptions}>Вибір способу доставки</p>
                </div>
                <div className={styles.mainWrapperDelivery}>
                    {cardDelivery.map((elem, index) => (
                        <button
                            key={index}
                            className={`${styles.deliveryButton} ${selectedDelivery === elem.text ? styles.selected : ''}`}
                            onClick={() => handleDelivery(elem.text)}>
                            <img src={elem.img} alt={elem.alt} />
                            <div>
                                <p className={styles.textLocation}>{elem.text}</p>
                                <p className={styles.textDescription}>{elem.description}</p>
                            </div>
                            {elem.map && (
                                <a href='https://maps.app.goo.gl/N2bf9k6Ws4Ujx3Wd6'>
                                    <button className={styles.btnMap} type="button">
                                        <img src={elem.mapIcon} alt={elem.alt} />
                                        <p className={styles.textMap}>{elem.map}</p>
                                    </button>
                                </a>
                            )}
                        </button>
                    ))}
                </div>
                <hr className={styles.dash} />
                <ul style={{paddingBottom:30}}>
                    <div className={styles.titleContainer}>
                        <img src={iconPay} alt="icon-pay" />
                        <p className={styles.titleOptions}>Вибір способу оплати</p>
                    </div>
                    {paymentOption.map((elem, index) => (
                        <li key={index} className={styles.wrapperPayment}>
                            <label className={styles.customCheckbox}>
                                <input type='checkbox' className={styles.checkPay} checked={selectedPayment === elem.text}
                                    onChange={() => handlePay(elem.text)} />
                                <span className={styles.circle}></span>
                                <p className={styles.textPay}>{elem.text}</p>
                            </label>
                            <img src={elem.pay} alt={elem.alt} />
                            <img src={elem.pay2} alt={elem.alt2} />
                        </li>
                    ))}
                </ul>
                <hr className={styles.dash} />
                <div style={{paddingBottom:30}}>
                    <div className={styles.titleContainer}>
                        <img src={iconComment} alt="icon-comment" />
                        <p className={styles.titleOptions}>Коментар до замовлення</p>
                    </div>
                    <textarea placeholder="Ваш коментар" className={styles.commentInput} onChange={handleComment} value={commentValue}></textarea>
                </div>
            </div>
            <ContextBasketList.Provider value={{ orderButton  }}>
                <BasketList />
            </ContextBasketList.Provider>
        </div>
    )
}

