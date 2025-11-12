import styles from './Basket.module.scss'
import { useState, useEffect } from 'react'
import { Modal } from './Modal'
import infoCircle from '../../images/basket/icon-info-mobile.svg'
import iconComment from '../../images/basket/icon-comment-mobile.svg'
import iconDelivery from '../../images/basket/icon-dostavka-mobile.svg'
import checkCircle from '../../images/basket/check-circle-mobile.svg'
import location from '../../images/basket/location-mobile.svg'
import novaPoshta from '../../images/basket/novaposhta-mobile.svg'
import deliveryMan from '../../images/basket/deliveryman.svg'
import masterCard from '../../images/basket/mastercard-logo-mobile.svg'
import visaCard from '../../images/basket/visa-card-logo.svg'
import privatPay from '../../images/basket/privat-pay-logo.svg'
import creditLogo from '../../images/basket/privaty-credit-logo.svg'
import monobankLogo from '../../images/basket/monobank.svg'
import iconPay from '../../images/basket/icon-oplata.svg'
import btnLogo from '../../images/basket/map.svg'
import { BasketList } from './BasketList'
import { ContextBasketList } from './ContextBasketList'
import { ContextModal } from './ContextModal'
import { setSurname, setName, setPaternal, setPhone, setEmail, setComment, setPayment, setDelivery, setIsPerson } from '../../redux/basket/basketSlice'
import { useSelector, useDispatch } from 'react-redux'
import { sendOrder } from '../../redux/basket/basketSlice'
import { clearBasket } from '../../redux/basket/basketListSlice'
const cartDelivery = [
	{
		text: 'Самовивіз із магазину',
		description: 'Бесплатно',
		img: checkCircle,
		alt: 'check-icon',
	},
	{
		text: 'Графік роботи: щодня з 9:00 до 18:00',
		description: 'м. Київ, пров. Ізяславський 52, пов. 2',
		img: location,
		alt: 'location-icon',
		map: 'На мапі',
		mapIcon: btnLogo,
	},
	{
		text: 'Доставка Нова Пошта',
		description: '≈ від 500 грн',
		img: novaPoshta,
		alt: 'novaposhta-icon',
	},
	{
		text: "Доставка кур'єром",
		description: '≈ від 200 грн',
		img: deliveryMan,
		alt: 'deliveryman-icon',
	},
]
const paymentOption = [
	{ text: 'Готівкою при отриманні (Післясплата)' },
	{
		text: 'Оплата карткою на сайті',
		pay: masterCard,
		pay2: visaCard,
		alt: 'mastercard-icon',
		alt2: 'visacard-icon',
	},
	{ text: 'Privat Pay', pay: privatPay, alt: 'privatpay-icon' },
	{ text: 'Кредит від Krovato' },
	{ text: 'Оплата частинами ПриватБанк', pay: creditLogo, alt: 'privaticon' },
	{ text: 'Оплата частинами МоноБанк', pay: monobankLogo, alt: 'monobankicon' },
]
const basketCounts = JSON.parse(localStorage.getItem("basketCounts")) || [];
 const Basket = () => {
	const dispatch = useDispatch()
	const basket = useSelector((state) => state.basket)
	const [isModal, setIsModal] = useState(false)
	const [message, setMessage] = useState('')
	const [selectedPayment, setSelectedPayment] = useState("")
	const [selectedDelivery, setDeliveryValue] = useState("")
	useEffect(() => {
		if (basket.items?.length > 0) {
			localStorage.setItem("basket", JSON.stringify(basket));
		} else {
			localStorage.removeItem("basket");
		}
	}, [basket])
	const handleModalMessage = (message) => {
		setMessage(message)
		setIsModal(true)
	}
	const handleCloseModal = () => {
		setMessage('')
		setIsModal(false)
	}
	const handleSurname = (e) => {
		dispatch(setSurname(e.target.value))
	}
	const handleName = (e) => {
		dispatch(setName(e.target.value))
	}
	const handlePaternal = (e) => {
		dispatch(setPaternal(e.target.value))
	}
	const handlePhone = (e) => {
		dispatch(setPhone(e.target.value))
	}
	const handleEmail = (e) => {
		dispatch(setEmail(e.target.value))
	}
	const handleChecked = (e) => {
		dispatch(setIsPerson(e.target.checked))
	}
	const handleComment = (e) => {
		dispatch(setComment(e.target.value))
	}
	const handlePay = (text) => {
		setSelectedPayment(text)
		dispatch(setPayment(text))
	}
	const handleDelivery = (text) => {
		setDeliveryValue(text)
		dispatch(setDelivery(text))
	}
	const orderButton = () => {
		const activeProducts = JSON.parse(localStorage.getItem("activeProducts"))
		if (activeProducts.length === 0) {
			handleModalMessage("Заповніть кошик !")
			return;
		}
		if (!basket.name || !basket.surname || !basket.paternal || !basket.phone || !basket.email) {
			handleModalMessage("Заповніть всі поля !")
			return;
		}
		if (!basket.email.includes("@")) {
			handleModalMessage("Email має містити @ ")
			return;
		}
		if (!selectedPayment) {
			handleModalMessage("Будь ласка , виберіть спосіб оплати")
			return;
		}
		if (!selectedDelivery) {
			handleModalMessage("Будь ласка ,виберіть спосіб доставки ")
			return;
		}
		const infoOrder = {
			name: basket.name,
			surname: basket.surname,
			paternal: basket.paternal,
			phone: basket.phone,
			email: basket.email,
			comment: basket.comment,
			isPerson: basket.isPerson,
			methodPay: selectedPayment,
			methodDelivery: selectedDelivery,
			items: activeProducts.map((item, index) => ({
				id: item.id,
				title: item.title,
				price: item.price,
				count: basketCounts[index] || 1,
			})),
			totalItems: activeProducts.length,
		}
		dispatch(sendOrder(infoOrder))
			.then(() => {
				handleModalMessage("Замовлення успішно надіслано");
				dispatch(clearBasket())
			})
			.catch((err) => handleModalMessage(`Помилка надсилання : ${err}`))
		localStorage.removeItem("activeProducts")
		localStorage.removeItem("basketCounts")
		dispatch(clearBasket())
		dispatch(setName(""))
		dispatch(setSurname(""))
		dispatch(setEmail(""))
		dispatch(setPhone(""))
		dispatch(setPaternal(""))
		dispatch(setComment(""))
		dispatch(setIsPerson(false))
		setSelectedPayment("")
		setDeliveryValue("")
	}
	return (
		<div className={styles.mainWrapper}>
			<ContextModal.Provider value={{ handleCloseModal, isModal, message }}>
				<Modal />
			</ContextModal.Provider>
			<div className={styles.basketWrapper}>
				<div className={styles.titleContainer}>
					<img src={infoCircle} alt='icon-info' />
					<p className={styles.titleOptions}>Інформація про покупця</p>
				</div>
				<form className={styles.formInfo}>
					<label>
						<input
							type='text'
							placeholder='Прізвище'
							className={styles.inputForm}
							onChange={handleSurname}
							value={basket.surname}
						/>
					</label>
					<label>
						<input
							type='tel'
							placeholder='Контактний телефон'
							className={styles.inputForm}
							onChange={handlePhone}
							value={basket.phone}
						/>
					</label>
					<label>
						<input
							type='text'
							placeholder="Ім'я"
							className={styles.inputForm}
							onChange={handleName}
							value={basket.name}
						/>
					</label>
					<label>
						<input
							type='email'
							placeholder='E-mail'
							className={styles.inputForm}
							onChange={handleEmail}
							value={basket.email}
						/>
					</label>
					<label>
						<input
							type='text'
							placeholder='По батькові'
							className={styles.inputForm}
							onChange={handlePaternal}
							value={basket.paternal}
						/>
					</label>
					<div className={styles.titleContainer} style={{ padding: "0 0 0 40px" }}>
						<input
							type='checkbox'
							checked={basket.isPerson}
							onChange={handleChecked}
							className={styles.checkboxes}
						/>
						<p className={styles.textPerson}>
							Отримуватиме замовлення інша людина
						</p>
					</div>
				</form>
				<hr className={styles.dash} />
				<div className={styles.titleContainer}>
					<img src={iconDelivery} alt='icon-delivery' />
					<p className={styles.titleOptions}>Вибір способу доставки</p>
				</div>
				<div className={styles.mainWrapperDelivery}>
					{cartDelivery.map((elem, index) => (
						<button
							key={index}
							className={`${styles.deliveryButton} ${selectedDelivery === elem.text ? styles.selected : ''
								}`}
							onClick={() => handleDelivery(elem.text)}
						>
							<img src={elem.img} alt={elem.alt} />
							<div>
								<p className={styles.textLocation}>{elem.text}</p>
								<p className={styles.textDescription}>{elem.description}</p>
							</div>
							{elem.map && (
								<a href='https://maps.app.goo.gl/N2bf9k6Ws4Ujx3Wd6'>
									<button className={styles.btnMap} type='button'>
										<img src={elem.mapIcon} alt={elem.alt} />
										<p className={styles.textMap}>{elem.map}</p>
									</button>
								</a>
							)}
						</button>
					))}
				</div>
				<hr className={styles.dash} />
				<ul style={{ paddingBottom: 30 }}>
					<div className={styles.titleContainer}>
						<img src={iconPay} alt='icon-pay' />
						<p className={styles.titleOptions}>Вибір способу оплати</p>
					</div>
					{paymentOption.map((elem, index) => (
						<li key={index} className={styles.wrapperPayment}>
							<label className={styles.customCheckbox}>
								<input
									type='checkbox'
									className={styles.checkPay}
									checked={selectedPayment === elem.text}
									onChange={() => handlePay(elem.text)}
								/>
								<span className={styles.circle}></span>
								<p className={styles.textPay}>{elem.text}</p>
							</label>
							<img src={elem.pay} alt={elem.alt} />
							<img src={elem.pay2} alt={elem.alt2} />
						</li>
					))}
				</ul>
				<hr className={styles.dash} />
				<div style={{ paddingBottom: 30 }}>
					<div className={styles.titleContainer}>
						<img src={iconComment} alt='icon-comment' />
						<p className={styles.titleOptions}>Коментар до замовлення</p>
					</div>
					<textarea
						placeholder='Ваш коментар'
						className={styles.commentInput}
						onChange={handleComment}
						value={basket.comment}
					></textarea>
				</div>
			</div>
			<ContextBasketList.Provider value={{ orderButton }}>
				<BasketList />
			</ContextBasketList.Provider>
		</div>
	)
}
export default Basket;