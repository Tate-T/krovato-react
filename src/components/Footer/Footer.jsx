import style from './Footer.module.scss'

export const Footer = () => {
    return (
        <section className={style.footer}>
            {/* <div className="footer-mob-sec">
    <div className="footer__logo-box footer__logo-box-mob">
      <svg className="footer__logo-sofa">
        <use href="./images/symbol-defs.svg#icon-logo-sofa"></use>
      </svg>
      <svg className="footer__logo-text">
        <use href="./images/symbol-defs.svg#icon-footer-logo-text"></use>
      </svg>
    </div>
    <div className="footer-menu">
      <ul className="footer-menu__list">
        <li className="footer-menu__item">
          <input
            className="footer-menu__input"
            type="checkbox"
            name="footer__input-name"
            id="fimput1"
          />
          <label className="footer-menu__label" for="fimput1">
            <h3 className="footer-menu__title">Категорії</h3>
            <svg className="footer-menu__arrow">
              <use href="./images/symbol-defs.svg#icon-arrow"></use>
            </svg>
          </label>
          <div className="footer-menu__paragraph">
            <ul className="footer-menu__categories">
              <li className="footer-menu__categorie">
                <a href="#" className="footer-menu__link">Ліжка</a>
              </li>
              <li className="footer-menu__categorie">
                <a href="#" className="footer-menu__link">Матраци</a>
              </li>
              <li className="footer-menu__categorie">
                <a href="#" className="footer-menu__link">М’які меблі</a>
              </li>
              <li className="footer-menu__categorie">
                <a href="#" className="footer-menu__link">Шафи</a>
              </li>
              <li className="footer-menu__categorie">
                <a href="#" className="footer-menu__link">Комоди</a>
              </li>
              <li className="footer-menu__categorie">
                <a href="#" className="footer-menu__link">Тумби</a>
              </li>
              <li className="footer-menu__categorie">
                <a href="#" className="footer-menu__link">Столи</a>
              </li>
              <li className="footer-menu__categorie">
                <a href="#" className="footer-menu__link">Стільці</a>
              </li>
              <li className="footer-menu__categorie">
                <a href="#" className="footer-menu__link">Меблеві стіни</a>
              </li>
              <li className="footer-menu__categorie">
                <a href="#" className="footer-menu__link">Кухні</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="footer-menu__item">
          <input
            className="footer-menu__input"
            type="checkbox"
            name="footer__input-name"
            id="fimput2"
          />
          <label className="footer-menu__label" for="fimput2">
            <h3 className="footer-menu__title">Інформація</h3>
            <svg className="footer-menu__arrow">
              <use href="./images/symbol-defs.svg#icon-arrow"></use>
            </svg>
          </label>
          <div className="footer-menu__paragraph">
            <ul className="footer-menu__informations">
              <li className="footer-menu__information">
                <a href="./about-us.html" className="footer-menu__link"
                  >Про нас</a
                >
              </li>
              <li className="footer-menu__information">
                <a href="./pay.html" className="footer-menu__link">Оплата</a>
              </li>
              <li className="footer-menu__information">
                <a href="./delivery.html" className="footer-menu__link"
                  >Доставка та збірка</a
                >
              </li>
              <li className="footer-menu__information">
                <a href="./reviews.html" className="footer-menu__link"
                  >Відгуки</a
                >
              </li>
              <li className="footer-menu__information">
                <a href="./blog-page.html" className="footer-menu__link"
                  >Блог</a
                >
              </li>
              <li className="footer-menu__information">
                <a href="./contacts.html" className="footer-menu__link"
                  >Контакти</a
                >
              </li>
              <li className="footer-menu__information">
                <a href="./contacts.html" className="footer-menu__link"
                  >Мапа сайту</a
                >
              </li>
            </ul>
          </div>
        </li>
        <li className="footer-menu__item">
          <input
            className="footer-menu__input"
            type="checkbox"
            name="footer__input-name"
            id="fimput3"
          />
          <label className="footer-menu__label" for="fimput3">
            <h3 className="footer-menu__title">Клієнтам</h3>
            <svg className="footer-menu__arrow">
              <use href="./images/symbol-defs.svg#icon-arrow"></use>
            </svg>
          </label>
          <div className="footer-menu__paragraph">
            <ul className="footer-menu__customers">
              <li className="footer-menu__customer">
                <a href="#" className="footer-menu__link">Акції</a>
              </li>
              <li className="footer-menu__customer">
                <a href="#" className="footer-menu__link">Розпродаж</a>
              </li>
              <li className="footer-menu__customer">
                <a href="#" className="footer-menu__link">Купити в кредит</a>
              </li>
              <li className="footer-menu__customer">
                <a href="#" className="footer-menu__link"
                  >Обмін і повернення товару</a
                >
              </li>
              <li className="footer-menu__customer">
                <a href="#" className="footer-menu__link">Часто задавані питання</a>
              </li>
              <li className="footer-menu__customer">
                <a href="#" className="footer-menu__link">Умови покупки</a>
              </li>
              <li className="footer-menu__customer">
                <a href="#" className="footer-menu__link"
                  >Політика конфіденційності</a
                >
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div> */}
            <div className={style.container}>
                <div className={style.footer__mainContainer}>
                    <div className={style.footer__container1}>
                        <div className={style.footer__logoBox}>
                            <svg className={style.footer__logoSofa}>
                                <use href="./images/symbol-defs.svg#icon-logo-sofa"></use>
                            </svg>
                            <svg className={style.footer__logoText}>
                                <use href="./images/symbol-defs.svg#icon-footer-logo-text"></use>
                            </svg>
                        </div>
                        <div className={style.footer__socialsBoxDesk}>
                            <p className={style.footer__textJoin}>Приєднуйтесь:</p>
                            <div className={style.footer__boxJoin}>
                                <a href="https://www.facebook.com" className={style.footer__iconLink}>
                                    <svg className={style.footer__svg + ' ' + style.footer__facebook}>
                                        <use href="./images/symbol-defs.svg#icon-facebook"></use>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com" className={style.footer__iconLink}>
                                    <svg className={style.footer__svg + ' ' + style.footer__instagram}>
                                        <use href="./images/symbol-defs.svg#icon-instagram"></use>
                                    </svg>
                                </a>
                            </div>
                            <p className={style.footer__textHelp}>Допомога і консультація:</p>
                            <div className={style.footer__boxHelp}>
                                <a href="https://web.whatsapp.com" className={style.footer__iconLink}>
                                    <div className={style.footer__svgBug}>
                                        <svg className={style.footer__svg + ' ' + style.footer__whatsapp}>
                                            <use href="./images/symbol-defs.svg#icon-whatsapp"></use>
                                        </svg>
                                    </div>
                                </a>
                                <a href="https://web.telegram.org" className={style.footer__iconLink}>
                                    <svg className={style.footer__svg + ' ' + style.footer__telegram}>
                                        <use href="./images/symbol-defs.svg#icon-telegram"></use>
                                    </svg>
                                </a>
                                <a href="https://account.viber.com" className={style.footer__iconLink}>
                                    <svg className={style.footer__svg + ' ' + style.footer__viber}>
                                        <use href="./images/symbol-defs.svg#icon-viber"></use>
                                    </svg>
                                </a>
                            </div>
                            <div className={style.footer__boxPay}>
                                <a href="#" className={style.footer__iconLink}>
                                    <svg className={style.footer__paySvg + ' ' + style.footer__paySvgVisa}>
                                        <use href="./images/symbol-defs.svg#icon-visa"></use>
                                    </svg>
                                </a>
                                <a href="#" className={style.footer__iconLink}>
                                    <svg className={style.footer__paySvg + ' ' + style.footer__paySvgMastercard}>
                                        <use href="./images/symbol-defs.svg#icon-mastercard"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <ul className={style.footer__mainList}>
                        <li className={style.footer__mainItem}>
                            <ul className={style.footer__informations}>
                                <li className={style.footer__informations}>
                                    <p className={style.footer__linkActive}>Інформація</p>
                                </li>
                                <li className={style.footer__informations}>
                                    <a href="./about-us.html" className={style.footer__link}>Про нас</a>
                                </li>
                                <li className={style.footer__informations}>
                                    <a href="./pay.html" className={style.footer__link}>Оплата</a>
                                </li>
                                <li className={style.footer__informations}>
                                    <a href="./delivery.html" className={style.footer__link}>Доставка та збірка</a>
                                </li>
                                <li className={style.footer__informations}>
                                    <a href="./reviews.html" className={style.footer__link}>Відгуки</a>
                                </li>
                                <li className={style.footer__informations}>
                                    <a href="./blog-page.html" className={style.footer__link}>Блог</a>
                                </li>
                                <li className={style.footer__informations}>
                                    <a href="./contacts.html" className={style.footer__link}>Контакти</a>
                                </li>
                                <li className={style.footer__informations}>
                                    <a href="./contacts.html" className={style.footer__link}>Мапа сайту</a>
                                </li>
                            </ul>
                        </li>
                        <li className={style.footer__mainItem}>
                            <ul className={style.footer__categories}>
                                <li className={style.footer__categorie}>
                                    <p className={style.footer__linkActive}>Категорії</p>
                                </li>
                                <li className={style.footer__categorie}>
                                    <a href="#" className={style.footer__link}>Ліжка</a>
                                </li>
                                <li className={style.footer__categorie}>
                                    <a href="#" className={style.footer__link}>Матраци</a>
                                </li>
                                <li className={style.footer__categorie}>
                                    <a href="#" className={style.footer__link}>М’які меблі</a>
                                </li>
                                <li className={style.footer__categorie}>
                                    <a href="#" className={style.footer__link}>Шафи</a>
                                </li>
                                <li className={style.footer__categorie}>
                                    <a href="#" className={style.footer__link}>Комоди</a>
                                </li>
                                <li className={style.footer__categorie}>
                                    <a href="#" className={style.footer__link}>Тумби</a>
                                </li>
                                <li className={style.footer__categorie}>
                                    <a href="#" className={style.footer__link}>Столи</a>
                                </li>
                                <li className={style.footer__categorie}>
                                    <a href="#" className={style.footer__link}>Стільці</a>
                                </li>
                                <li className={style.footer__categorie}>
                                    <a href="#" className={style.footer__link}>Меблеві стіни</a>
                                </li>
                                <li className={style.footer__categorie}>
                                    <a href="#" className={style.footer__link}>Кухні</a>
                                </li>
                            </ul>
                        </li>
                        <li className={style.footer__mainItem}>
                            <ul className={style.footer__customers}>
                                <li className={style.footer__customer}>
                                    <p className={style.footer__linkActive}>Клієнтам</p>
                                </li>
                                <li className={style.footer__customer}>
                                    <a href="#" className={style.footer__link}>Акції</a>
                                </li>
                                <li className={style.footer__customer}>
                                    <a href="#" className={style.footer__link}>Розпродаж</a>
                                </li>
                                <li className={style.footer__customer}>
                                    <a href="#" className={style.footer__link}>Купити в кредит</a>
                                </li>
                                <li className={style.footer__customer}>
                                    <a href="#" className={style.footer__link}>Обмін і повернення товару</a>
                                </li>
                                <li className={style.footer__customer}>
                                    <a href="#" className={style.footer__link}>Часто задавані питання</a>
                                </li>
                                <li className={style.footer__customer}>
                                    <a href="#" className={style.footer__link}>Умови покупки</a>
                                </li>
                                <li className={style.footer__customer}>
                                    <a href="#" className={style.footer__link}>Політика конфіденційності</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className={style.footer__box3}>
                        <div className={style.footer__call}>
                            <div className={style.footer__svgPhoneBorder}>
                                <svg className={style.footer__svgPhone}>
                                    <use href="./images/symbol-defs.svg#icon-telephone"></use>
                                </svg>
                            </div>
                            <div className={style.footer__numbers}>
                                <a href="tel:+380679294545" className={style.footer__number}>+38 067 929-45-45</a>
                                <a href="tel:+380501334545" className={style.footer__number}>+38 050 133-45-45</a>
                                <a href="tel:+380931707545" className={style.footer__number}>+38 093 170-75-45</a>
                                <a href="#" className={style.footer__callMe}>Передзвоніть мені</a>
                            </div>
                        </div>
                        <div className={style.footer__adress}>
                            <div className={style.footer__adressSvgBorder}>
                                <svg className={style.footer__adressSvg}>
                                    <use href="./images/symbol-defs.svg#icon-adres"></use>
                                </svg>
                            </div>
                            <a href="./contacts.html" className={style.footer__adressText}>м. Київ, провулок Ізяславський 52, поверх 2</a>
                        </div>
                        <div className={style.footer__schedule}>
                            <div className={style.footer__calendarBorder}>
                                <svg className={style.footer__calendar}>
                                    <use href="./images/symbol-defs.svg#icon-calendar"></use>
                                </svg>
                            </div>
                            <p className={style.footer__scheduleText}>Працюємо щодня з 9:00 до 18:00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footer__copyright}>
                <p className={style.footer__copyrightText}>
                    © KROVATO - Технології сну - 2022. Всі права захищені.
                </p>
            </div>
        </section>
    )
}