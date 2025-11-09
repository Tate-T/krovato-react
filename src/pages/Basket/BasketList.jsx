import { Fragment } from 'react'
import promoIcon from '../../images/basket/promo.svg'
import checkIcon from '../../images/basket/check.svg'
import arrowShow from '../../images/basket/arrow-show.svg'
import deleteSvg from '../../images/basket/delete.svg'
import { useState, useEffect, useContext } from 'react'
import styles from './BasketList.module.scss'
import { ContextBasketList } from './ContextBasketList'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { subtractItemCount, addItemCount, applyPromo } from '../../redux/basket/basketListSlice'
import {
	fetchBasket,
	addToBasket,
	deleteFromBasket,
} from "../../redux/basket/basketListSlice";
export const BasketList = () => {
	const [showAll, setShowAll] = useState(false)
	const [promoInputValue, setPromoInputValue] = useState('')
	const dispatch = useDispatch()
	const items = useSelector(state => state.basketList.items)
	const counts = useSelector(state => state.basketList.counts)
	const discountPercent = useSelector(state => state.basketList.discount)
	const promoMessage = useSelector(state => state.basketList.promoMessage)
	const handleAddItem = (index) => {
		dispatch(addItemCount(index))
		console.log(index)
	}
	console.log(items)
	console.log(counts)
	const handleMinusItem = (index) => {
		dispatch(subtractItemCount(index))
	}
	const toggleShowAll = () => {
		setShowAll((prev) => !prev)
	}
	const getTotalPrice = () => {
		const total = items.reduce((acc, item, index) => {
			const price = Number(String(item.price).replace(/\D/g, '')) || 0
			return acc + price * (counts[index] || 1)
		}, 0)

		if (discountPercent > 0) {
			return total * (1 - discountPercent / 100)
		}

		return total
	}
	useEffect(() => {
		dispatch(fetchBasket());
	}, [dispatch]);
	useEffect(() => {
		localStorage.setItem("activeProducts", JSON.stringify(items));
		localStorage.setItem("basketCounts", JSON.stringify(counts));
	}, [items, counts]);

	const { orderButton } = useContext(ContextBasketList)
	return (
		<Fragment>
			<section>
				<div className={styles.wrapperBasket}>
					<p className={styles.textBasket}>
						Ваш кошик
						<span className={styles.textBasketNumber}>
							{counts.reduce((acc, count) => acc + count, 0)}
						</span>
					</p>
					<ul>
						{items.map((bed, index) => {
							const isHidden = !showAll && index >= 2
							return (
								<>
									<li
										key={index}
										className={`${styles.containerBed} ${isHidden ? styles.hiddenOnMobile : ''
											}`}
									>
										<div className={styles.containerDescription}>
											<img
												src={bed.image.src}
												alt={bed.alt}
												className={styles.imgBed}
											/>
											<div className={styles.containerCount}>
												<button
													onClick={() => handleMinusItem(index)}
													className={styles.btnMath}
												>
													-
												</button>
												<p>{counts[index] || 1}</p>
												<button
													onClick={() => handleAddItem(index)}
													className={styles.btnMath}
												>
													+
												</button>
											</div>
										</div>
										<div className={styles.containerDescription}>
											<p className={styles.textBed}>{bed.size}</p>
											<p className={styles.titleBed}>{bed.title}</p>
											<p className={styles.textDescription}>
												{bed.description}
											</p>
											<div className={styles.bedStatus}>
												<img src={bed.svg || checkIcon} alt='icon-check' />
												<p className={styles.textBed}>
													{bed.isStock ? 'Не в наявності' : 'В наявності'}
												</p>
											</div>
											<p className={styles.textPrice}>{bed.price}</p>
										</div>
										<button
											className={styles.btnDelete}
											onClick={() => dispatch(deleteFromBasket(bed.id))}
										>
											<img src={deleteSvg} alt='deleteSvg' style={{ maxWidth: 24 }} />
										</button>
									</li>
									<hr className={styles.dash} />
								</>
							)
						})}
						<div className={styles.shadowContainer}>
							{!showAll && <div className={styles.shadowFade}></div>}
							<button onClick={toggleShowAll} className={styles.buttonShowAll}>
								{showAll ? 'Сховати' : 'Показати всі'}
								<img
									src={arrowShow}
									alt='arrow-show'
									className={`${styles.arrowIcon} ${showAll ? styles.rotated : ''
										}`}
								/>
							</button>
						</div>
					</ul>
					<div className={styles.containerPromocode}>
						<div className={styles.promocodeDecription}>
							<img src={promoIcon} alt='promo-icon' />
							<p>Є промокод?</p>
						</div>
						<div className={styles.promocodeDecription}>
							<input
								type='text'
								placeholder='Введіть код'
								className={styles.inputPromocode}
								value={promoInputValue}
								disabled={items.length === 0}
								onChange={(e) => setPromoInputValue(e.target.value)}
							/>
							<button className={styles.buttonPromocode} onClick={() => dispatch(applyPromo(promoInputValue))}>
								Ок
							</button>
						</div>
					</div>
					<p id='message'>{promoMessage}</p>
					<hr className={styles.dash} />
					<div style={{ marginLeft: 20 }}>
						<p className={styles.textTogether} style={{ marginBottom: 28 }}>
							Разом:
						</p>
						<ul className={styles.listContainer}>
							<li className={styles.togetherSum}>
								<p className={styles.textSum}>
									{counts.reduce((acc, count) => acc + count, 0)} товари на
									суму:
								</p>
								<div className={styles.lineDotted}></div>
								<p>{getTotalPrice().toLocaleString('uk-UA')} грн</p>
							</li>
							<li className={styles.togetherSum}>
								<p className={styles.textSum}> Вартість доставки:</p>
								<div className={styles.lineDotted}></div>
								<p>За тарифами оператора</p>
							</li>
							<li className={styles.togetherSum}>
								<p className={styles.textSum}>До оплати:</p>
								<div className={styles.lineDotted}></div>
								<p className={styles.textTogether}>
									{getTotalPrice().toLocaleString('uk-UA')} грн.
								</p>
							</li>
						</ul>
					</div>
					<div className={styles.containerBed}>
						<input type='checkbox' className={styles.checkboxes} />
						<p style={{ textAlign: 'left' }}>
							Не передзвонюйте мені для підтвердження замовлення
						</p>
					</div>
					<button className={styles.btnOrder} onClick={orderButton}>
						ОФОРМИТИ ЗАМОВЛЕННЯ
					</button>
					<p>
						Підтверджуючи замовлення, я приймаю умови{' '}
						<span className={styles.userOkay}>
							<Link to='/agree' style={{ color: '#FFBC57' }}>
								Угоди користувача
							</Link>
						</span>
					</p>
				</div>
			</section>
		</Fragment>
	)
}
