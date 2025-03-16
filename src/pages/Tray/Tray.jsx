export const Tray = () => {
  return (
    <section className="tray">
      <div className="container">
        <div className="tray__container">
          <div className="left-side">
            <nav className="tray__navigation">
              <a className="tray__main-link" href="#">
                Головна
              </a>
              <svg className="tray__icon">
                <use href="./images/symbol-defs.svg#icon-arrow"></use>
              </svg>
              <a className="tray__tray-link" href="../">
                Ліжка
              </a>
            </nav>
            <h2 className="tray__title">Оформлення замовлення</h2>

            <div className="tray__order">
              <div className="tray__order-information">
                <div className="title-box">
                  <div className="tray__icon-arrow-box">
                    <svg className="tray__icon-arrow">
                      <use href="./images/symbol-defs.svg#icon-info"></use>
                    </svg>
                  </div>
                  <h3 className="tray__information-text">
                    Інформація про покупця
                  </h3>
                </div>
                <div className="forms-container">
                  <div className="form-first-container">
                    <form className="tray__form-first">
                      <input
                        type="text"
                        id="surname"
                        name="surname"
                        placeholder="Прізвище"
                      />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Ім’я"
                      />
                      <input
                        type="text"
                        id="patronymic"
                        name="patronymic"
                        placeholder="По батькові"
                      />
                      <div className="other-people-box">
                        <input type="checkbox" id="checkbox" name="checkbox" />
                        <label
                          className="tray__label-people"
                          htmlFor="checkbox"
                        >
                          Отримуватиме замовлення інша людина
                        </label>
                      </div>
                    </form>
                  </div>
                  <div className="form-first-second">
                    <form className="tray__form-second">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Контактний телефон"
                      />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="E-mail"
                      />
                    </form>
                  </div>
                </div>
              </div>

              <div className="tray__delivery">
                <div>
                  <svg className="tray__delivery-svg">
                    <use href="./images/symbol-defs.svg#icon-small-bus"></use>
                  </svg>
                  <h3 className="tray__information-text">
                    Вибір способу доставки
                  </h3>
                </div>
                <ul className="tray__delivery-list">
                  <li className="tray__delivery-item active">
                    <svg className="tray__delivery-check">
                      <use href="./images/symbol-defs.svg#icon-check"></use>
                    </svg>
                    <h3 className="tray__delivery-title">
                      Самовивіз із магазину
                    </h3>
                    <p className="tray__delivery-descr">Бесплатно</p>
                  </li>
                  <li className="tray__delivery-adress-mobile">
                    <svg className="delivery-svg">
                      <use href="./images/symbol-defs.svg#icon-adres"></use>
                    </svg>
                    <div>
                      <p className="tray__adress-title">
                        Графік роботи: щодня з 9:00 до 18:00
                      </p>
                      <h3 className="tray__adress-descr">
                        {" "}
                        м. Київ, пров. Ізяславський 52, пов. 2
                      </h3>
                    </div>
                    <a
                      href="https://www.google.com/maps/place/Lak+Studio/@50.3958698,30.4242712,15z/data=!4m2!3m1!1s0x0:0x9d24277dcc3d5ff1?sa=X&ved=1t:2428&ictx=111"
                      className="tray__delivery-btn-mobile"
                    >
                      <svg>
                        <use href="./images/symbol-defs.svg#icon-map"></use>
                      </svg>
                      На мапі
                    </a>
                  </li>
                  <li className="tray__delivery-item">
                    <svg className="tray__delivery-np">
                      <use href="./images/symbol-defs.svg#icon-nova-poshta"></use>
                    </svg>
                    <h3 className="tray__delivery-title">
                      Доставка Нова Пошта
                    </h3>
                    <p className="tray__delivery-descr">≈ від 500 грн</p>
                  </li>
                  <li className="tray__delivery-item">
                    <svg className="tray__delivery-man">
                      <use href="./images/symbol-defs.svg#icon-man"></use>
                    </svg>
                    <h3 className="tray__delivery-title">Доставка кур'єром</h3>
                    <p className="tray__delivery-descr">≈ від 200 грн</p>
                  </li>
                </ul>
                <div className="tray__delivery-adress">
                  <svg className="delivery-svg">
                    <use href="./images/symbol-defs.svg#icon-adres"></use>
                  </svg>
                  <div>
                    <p className="tray__adress-title">
                      Графік роботи: щодня з 9:00 до 18:00
                    </p>
                    <h3 className="tray__adress-descr">
                      {" "}
                      м. Київ, пров. Ізяславський 52, пов. 2
                    </h3>
                  </div>
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/%D0%9A%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D0%BE/@50.3958002,30.4240371,20z/data=!4m14!1m7!3m6!1s0x40d4c96eaae816b9:0x9d24277dcc3d5ff1!2sLak+Studio!8m2!3d50.3958698!4d30.4242712!16s%2Fg%2F11dz242_p1!3m5!1s0x40d4c985b50a7e6d:0x3d3fa41b01332a2a!8m2!3d50.3960037!4d30.4237898!16s%2Fg%2F11h18zp7_1?entry=ttu"
                    className="tray__delivery-btn"
                  >
                    <svg>
                      <use href="./images/symbol-defs.svg#icon-map"></use>
                    </svg>
                    На мапі
                  </a>
                </div>
              </div>

              <div className="tray__pay">
                <div>
                  <svg className="tray__icon-arrow">
                    <use href="./images/symbol-defs.svg#icon-wallet-сard"></use>
                  </svg>
                  <h3 className="tray__information-text">
                    Вибір способу оплати
                  </h3>
                </div>
                <form className="tray__pay-form">
                  <div>
                    <input
                      type="radio"
                      id="cashOnDelivery"
                      name="paymentMethod"
                      className="tray__page-cash"
                    />
                    <label htmlFor="cashOnDelivery">
                      Готівкою при отриманні (Післясплата)
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="cardOnline"
                      name="paymentMethod"
                      className="tray__page-cash"
                      checked
                    />
                    <label htmlFor="cardOnline">Оплата карткою на сайті</label>
                    <svg className="pay-mc">
                      <use href="./images/symbol-defs.svg#icon-mastercard-color"></use>
                    </svg>
                    <svg className="pay-visa">
                      <use href="./images/symbol-defs.svg#icon-visa-card-logo"></use>
                    </svg>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="privatPay"
                      name="paymentMethod"
                      className="tray__page-cash"
                    />
                    <label htmlFor="privatPay">Privat Pay</label>
                    <svg className="pay-privat">
                      <use href="./images/symbol-defs.svg#icon-privat-pay-logo"></use>
                    </svg>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="creditKrovatoPay"
                      name="paymentMethod"
                      className="tray__page-cash"
                    />
                    <label htmlFor="creditKrovatoPay">Кредит від Krovato</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="creditPrivatPay"
                      name="paymentMethod"
                      className="tray__page-cash"
                    />
                    <label htmlFor="creditPrivatPay">
                      Оплата частинами ПриватБанк
                    </label>
                    <svg className="pay-credit">
                      <use href="./images/symbol-defs.svg#icon-privaty-credit-logo"></use>
                    </svg>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="creditMonoPay"
                      name="paymentMethod"
                      className="tray__page-cash"
                    />
                    <label htmlFor="creditMonoPay">
                      Оплата частинами МоноБанк
                    </label>
                    <svg className="pay-mono">
                      <use href="./images/symbol-defs.svg#icon-mono-bank-logo"></use>
                    </svg>
                  </div>
                </form>
              </div>

              <div className="tray__comment">
                <div>
                  <svg className="tray__icon-arrow">
                    <use href="./images/symbol-defs.svg#icon-chat-check"></use>
                  </svg>
                  <h3 className="tray__information-text">
                    Коментар до замовлення
                  </h3>
                </div>
                <form>
                  <textarea
                    className="tray__comment-input"
                    placeholder="Ваш коментар"
                  ></textarea>
                </form>
              </div>
            </div>
          </div>

          <div className="tray__right">
            <div className="tray__right-beds">
              <h3 className="tray__right-text">
                Ваш кошик <span className="tray__right-span">4</span>
              </h3>
              <ul className="tray__right-list">
                <li className="tray__right-item">
                  <div className="tray__right-item-container">
                    <div>
                      <img
                        className="tray__right-img"
                        src="./images/main-page/bed-sparta@1x.webp"
                        alt="Bed Sparta"
                      />
                      <div className="tray__right-counter">
                        <button>–</button>
                        <p className="tray__right-counter-text">1</p>
                        <button>+</button>
                      </div>
                    </div>
                    <div className="tray__right-information">
                      <p className="tray__right-size">
                        Розмір: 61 x 184 x 2130 мм
                      </p>
                      <h3 className="tray__right-name">
                        Ліжко Спарта / Sparta з підйомним механізмом
                      </h3>
                      <div className="tray__svg-box">
                        <div className="tray__svg">
                          <svg className="tray_svg-buy">
                            <use href="./images/symbol-defs.svg#icon-check"></use>
                          </svg>
                        </div>
                        <p className="tray__paragraph">В наявності</p>
                      </div>
                      <div className="tray__right-price-box">
                        <h3 className="tray__right-price">15 400 грн.</h3>
                        <p className="tray__right-discount">25 400 грн.</p>
                      </div>
                      <svg className="tray__icon-close">
                        <use href="./images/symbol-defs.svg#icon-circle-close"></use>
                      </svg>
                    </div>
                  </div>
                  <div className="tray__right-line"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
