import style from "./Tray.module.scss"

export const Tray = () => {
  return (
<section className={style.tray}>
    <div className={style.container}>
        <div className={style.tray__container}>
            <div className={style.tray__leftSide}>
            <nav className={style.tray__navigation}>
              <a className={style.tray__mainLink} href="#">Головна</a>
              <svg className={style.tray__icon}>
                <use href="./images/symbol-defs.svg#icon-arrow"></use>
              </svg>
              <a className={style.tray__trayLink} href="./">Ліжка</a>
            </nav>
          <h2 className={style.tray__title}>Оформлення замовлення</h2>

          <div className={style.trayOrder}>
  <div className={style.tray__orderInformation}>
    <div className={style.tray__titleBox}>
      <div className={style.tray__iconArrowBox}>
        <svg className={style.tray__iconArrow}>
          <use href="./images/symbol-defs.svg#icon-info" />
        </svg>
      </div>
      <h3 className={style.tray__informationText}>Інформація про покупця</h3>
    </div>
    <div className={style.tray__formsContainer}>
      <div className={style.tray__formFirstContainer}>
        <form className={style.tray__formFirst}>
          <input type="text" id="surname" name="surname" placeholder="Прізвище" />
          <input type="text" id="name" name="name" placeholder="Ім’я" />
          <input type="text" id="patronymic" name="patronymic" placeholder="По батькові" />
          <div className={style.tray__otherPeopleBox}>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label className={style.tray__labelPeople} htmlFor="checkbox">
              Отримуватиме замовлення інша людина
            </label>
          </div>
        </form>
      </div>
      <div className={style.tray__formFirstSecond}>
        <form className={style.tray__formSecond}>
          <input type="text" id="phone" name="phone" placeholder="Контактний телефон" />
          <input type="text" id="email" name="email" placeholder="E-mail" />
        </form>
      </div>
    </div>
  </div>
</div>


          <div className={style.tray__delivery}>
            <div>
                <svg className={style.tray__deliverySvg}>
                    <use href="./images/symbol-defs.svg#icon-small-bus"></use>
                  </svg>
                  <h3 className={style.tray__informationText}>Вибір способу доставки</h3>
                </div>
                <ul className={style.tray__deliveryList}>
                    <li className={style.tray__deliveryItem}>
                        <svg className={style.tray__deliveryCheck}>
                            <use href="./images/symbol-defs.svg#icon-check"></use>
                        </svg>
                        <h3 className={style.tray__deliveryTitle}>Самовивіз із магазину</h3>
                        <p className={style.tray__deliveryDescr}>Бесплатно</p>
                    </li>
                    <li className={style.tray__deliveryAdressMobile}>
                        <svg className={style.tray__deliverySvg}>
                            <use href="./images/symbol-defs.svg#icon-adres"></use>
                        </svg>
                        <div>
                        <p className={style.tray__adressTitle}>Графік роботи: щодня з 9:00 до 18:00</p>
                        <h3 className={style.tray__adressDescr}> м. Київ, пров. Ізяславський 52, пов. 2</h3>
                        </div>
                            <a href="https://www.google.com/maps/place/Lak+Studio/@50.3958698,30.4242712,15z/data=!4m2!3m1!1s0x0:0x9d24277dcc3d5ff1?sa=X&ved=1t:2428&ictx=111" className={style.tray__deliveryBtnMobile}>
                        <svg>
                            <use href="./images/symbol-defs.svg#icon-map"></use>
                        </svg>На мапі</a>
                    </li>
                    <li className={style.tray__deliveryItem}>
                        <svg className={style.tray__deliveryNp}>
                            <use href="./images/symbol-defs.svg#icon-nova-poshta"></use>
                        </svg>
                        <h3 className={style.tray__deliveryTitle}>Доставка Нова Пошта</h3>
                        <p className={style.tray__deliveryDescr}>≈ від 500 грн</p>
                    </li>
                    <li className={style.tray__deliveryItem}>
                        <svg className={style.tray__deliveryMan}>
                            <use href="./images/symbol-defs.svg#icon-man"></use>
                        </svg>
                        <h3 className={style.tray__deliveryTitle}>Доставка кур'єром</h3>
                        <p className={style.tray__deliveryDescr}>≈ від 200 грн</p>
                    </li>
                </ul>
                    <div className={style.tray__deliveryAdress}>
                        <svg className={style.tray__deliverySvg}>
                            <use href="./images/symbol-defs.svg#icon-adres"></use>
                        </svg>
                        <div>
                        <p className={style.tray__adressTitle}>Графік роботи: щодня з 9:00 до 18:00</p>
                        <h3 className={style.tray__adressDescr}> м. Київ, пров. Ізяславський 52, пов. 2</h3>
                    </div>
                    <a target="_blank" href="https://www.google.com/maps/place/%D0%9A%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D0%BE/@50.3958002,30.4240371,20z/data=!4m14!1m7!3m6!1s0x40d4c96eaae816b9:0x9d24277dcc3d5ff1!2sLak+Studio!8m2!3d50.3958698!4d30.4242712!16s%2Fg%2F11dz242_p1!3m5!1s0x40d4c985b50a7e6d:0x3d3fa41b01332a2a!8m2!3d50.3960037!4d30.4237898!16s%2Fg%2F11h18zp7_1?entry=ttu" className={style.tray__deliveryBtn}>
                        <svg>
                            <use href="./images/symbol-defs.svg#icon-map"></use>
                        </svg>На мапі</a>
                    </div>
                  </div>
                  <div className={style.tray__pay}>
                    <div>
                        <svg className={style.tray__iconArrow}>
                            <use href="./images/symbol-defs.svg#icon-wallet-сard"></use>
                          </svg>
                          <h3 className={style.tray__informationText}>Вибір способу оплати</h3>
                        </div>
                        <form className={style.tray__payForm}>
                            <div>
                                <input type="radio" id="cashOnDelivery" name="paymentMethod" className={style.tray__pageCash}/>
                                <label for="cashOnDelivery">Готівкою при отриманні (Післясплата)</label>
                            </div>
                            <div>
                                <input type="radio" id="cardOnline" name="paymentMethod" className={style.tray__pageCash} checked/>
                                <label for="cardOnline">Оплата карткою на сайті</label>
                                <svg className={style.payMc}>
                                    <use href="./images/symbol-defs.svg#icon-mastercard-color"></use>
                                </svg>
                                <svg className={style.payVisa}>
                                    <use href="./images/symbol-defs.svg#icon-visa-card-logo"></use>
                                </svg>

                            </div>
                            <div>
                                <input type="radio" id="privatPay" name="paymentMethod" className={style.tray__pageCash}/>
                                <label for="privatPay">Privat Pay</label>
                                <svg className={style.payPrivat}>
                                    <use href="./images/symbol-defs.svg#icon-privat-pay-logo"></use>
                                </svg>
                            </div>
                            <div>
                                <input type="radio" id="creditKrovatoPay" name="paymentMethod" className={style.tray__pageCash}/>
                                <label for="creditKrovatoPay">Кредит від Krovato</label>
                            </div>
                            <div>
                                <input type="radio" id="creditPrivatPay" name="paymentMethod" className={style.tray__pageCash}/>
                                <label for="creditPrivatPay">Оплата частинами ПриватБанк</label>
                                <svg className={style.payCredit}>
                                    <use href="./images/symbol-defs.svg#icon-privaty-credit-logo"></use>
                                </svg>
                            </div>
                            <div>
                                <input type="radio" id="creditMonoPay" name="paymentMethod" className={style.tray__pageCash}/>
                                <label for="creditMonoPay">Оплата частинами МоноБанк</label>
                                <svg className={style.payMono}>
                                    <use href="./images/symbol-defs.svg#icon-mono-bank-logo"></use>
                                </svg>
                            </div>
                        </form>
                  </div>
                  <div className={style.tray__comment}>
                    <div>
                        <svg className={style.tray__iconArrow}>
                            <use href="./images/symbol-defs.svg#icon-chat-check"></use>
                          </svg>
                          <h3 className={style.tray__informationText}>Коментар до замовлення</h3>
                        </div>
                        <form>
                            <textarea className={style.tray__commentInput} type="text" placeholder="Ваш коментар"></textarea>
                        </form>
                  </div>
        </div>

        <div className={style.tray__right}>
            <div className={style.tray__rightBeds}>
            <h3 className={style.tray__rightText}>Ваш кошик <span className={style.tray__rightSpan}>4</span></h3>
            <ul className={style.tray__rightList}>
                <li className={style.tray__rightItem}>
                    <div className={style.tray__rightItemContainer}>
                    <div>
                        <img className={style.tray__rightImg} src="./images/main-page/bed-sparta@1x.webp" alt="Bed Sparta"/>
                        <div className={style.tray__rightCounter}>
                            <button>–</button>
                            <p className={style.tray__rightCounterText}>1</p>
                            <button>+</button>
                    </div>
                    </div>
                    <div className={style.tray__rightInformation}>
                    <p className={style.tray__rightSize}>Розмір: 61 x 184 x 2130 мм</p>
                    <h3 className={style.tray__rightName}>Ліжко Спарта / Sparta з підйомним механізмом</h3>
                    <div className={style.tray__svgBox}>
                        <div className={style.tray__svg}>
                        <svg className={style.tray_svgBuy}>
                          <use href="./images/symbol-defs.svg#icon-check"></use>
                        </svg>
                      </div>
                        <p className={style.tray__paragraph}>
                          В наявності
                        </p>
                      </div>
                    <div className={style.tray__rightPriceBox}>
                        <h3 className={style.tray__rightPrice}>15 400 грн.</h3>
                        <p className={style.tray__rightDiscount}>25 400 грн.</p>
                    </div>
                    <svg className={style.tray__iconClose}>
                        <use href="./images/symbol-defs.svg#icon-circle-close"></use>
                    </svg>
                </div>
            </div>
            <div className={style.tray__rightLine}></div>
            </li>
                <li className={style.tray__rightItem}>
                <div className={style.tray__rightItemContainer}>
                    <div>
                        <img className={style.tray__rightImg} src="./images/main-page/bed-sparta@1x.webp" alt="Bed Sparta"/>
                        <div className={style.tray__rightCounter2}>
                            <button>–</button>
                            <p className={style.tray__rightCounterText}>2</p>
                            <button>+</button>
                    </div>
                    </div>
                    <div className={style.tray__rightInformation}>
                    <p className={style.tray__rightSize}>Розмір: 61 x 184 x 2130 мм</p>
                    <h3 className={style.tray__rightName}>Ліжко Спарта / Sparta з підйомним механізмом</h3>
                    <div className={style.tray__svgBox}>
                        <div className={style.tray__svg}>
                        <svg className={style.tray_svgBuy}>
                          <use href="./images/symbol-defs.svg#icon-check"></use>
                        </svg>
                      </div>
                        <p className={style.tray__paragraph}>
                          В наявності
                        </p>
                      </div>
                        <h3 className={style.tray__rightPrice}>15 400 грн.</h3>
                    <svg className={style.tray__iconClose}>
                        <use href="./images/symbol-defs.svg#icon-circle-close"></use>
                    </svg>
                </div>
            </div>
            <div className={style.tray__shadow}>
                <div>
                <a className={style.tray__hide} href="#">Показати всі</a>
                <svg className={style.tray__topSvg}>
                  <use href="./images/symbol-defs.svg#icon-two-arrows-top"></use>
                </svg>
            </div>
              </div>
            <div className={style.tray__rightLine}></div>
            </li>
                <li className={style.tray__rightItem}>
                    <div className={style.tray__rightItemContainer}>
                    <div>
                        <img className={style.tray__rightImg} src="./images/main-page/bed-sparta@1x.webp" alt="Bed Sparta"/>
                        <div className={style.tray__rightCounter}>
                            <button>–</button>
                            <p className={style.tray__rightCcounterText}>1</p>
                            <button>+</button>
                    </div>
                    </div>
                    <div className={style.tray__rightInformation}>
                    <p className={style.tray__rightSize}>Розмір: 61 x 184 x 2130 мм</p>
                    <h3 className={style.tray__rightName}>Ліжко Спарта / Sparta з підйомним механізмом</h3>
                    <div className={style.tray__svgBox}>
                        <div className={style.tray__svg}>
                        <svg className={style.tray_svgBuy}>
                          <use href="./images/symbol-defs.svg#icon-check"></use>
                        </svg>
                      </div>
                        <p className={style.tray__paragraph}>
                          В наявності
                        </p>
                      </div>
                    <div className={style.tray__rightPriceBox}>
                        <h3 className={style.tray__rightPrice}>15 400 грн.</h3>
                    </div>
                    <svg className={style.tray__iconClose}>
                        <use href="./images/symbol-defs.svg#icon-circle-close"></use>
                    </svg>
                </div>
            </div>
                </li>
            </ul>
        </div>

            <div className={style.tray__rightPromo}>
                <div>
                <svg className={style.tray__rightSvgPromo}>
                    <use href="./images/symbol-defs.svg#icon-promo"></use>
                </svg>
                <h3 className={style.tray__rightPromoText}>Є промокод?</h3>
            </div>
            <div>
            <form>
            <input className={style.tray__rightPromoInput} type="text" placeholder="Введіть код"/>
            </form>
            <button className={style.tray__rightPromoBtn}>ОК</button>
        </div>
            </div>

            <div className={style.tray__rightPay}>
                <h2 className={style.tray__rightPayTitle}>Разом:</h2>
                <ul className={style.tray__rightPayList}>
                    <li className={style.tray__rightPayItem}>
                    <p className={style.tray__rightPayText}>4 товари на суму:</p>
                    <div className={style.payLine}></div>
                    <p className={style.tray__rightPayText}>540 269 грн.</p>
                </li>
                <li className={style.tray__rightPayItem}>
                    <p className={style.tray__rightPayText}>Вартість доставки:</p>
                    <div className={style.payLine}></div>
                    <p className={style.tray__rightPayText}>За тарифами оператора</p>
                </li>
                <li className={style.tray__rightPayItem}>
                    <p className={style.tray__rightPayText}>До оплати:</p>
                    <div className={style.payLine}></div>
                    <p className={style.tray__rightPayPrice}>540 269 грн.</p>
                </li>
                </ul>

                <form className={style.tray__rightPayForm}>
                    <div>
                    <input className={style.tray__rightPayCheckbox} id="trayRightCheckbox" type="checkbox" required/>
                    <label className={style.tray__rightPayLabel} for="trayRightCheckbox">Не передзвонюйте мені для підтвердження замовлення</label>
                </div>
                    <button className={style.tray__rightPayBtn}>ОФОРМИТИ ЗАМОВЛЕННЯ</button>
                </form>
                
                <p className={style.tray__rightPayTerms}>Підтверджуючи замовлення, я приймаю умови <span className={style.termsSpan}>Угоди користувача</span></p>
            </div>
        </div>
    </div>
    </div>
</section>
  );
};