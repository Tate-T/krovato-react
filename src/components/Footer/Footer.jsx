import style from './Footer.module.scss'
import containerStyle from "../Container/Container.module.scss"

export const Footer = () => {
  return (
    <section className={style.footer}>
      <div className={style.footerMobSec}>
        {/* <div className={`${style.footerLogoBox} ${style.footerLogoBoxMob}`}>
          <svg className={style.footerLogoSofa}>
            <use href="./images/symbol-defs.svg#icon-logo-sofa"></use>
          </svg>
          <svg className={style.footerLogoText}>
            <use href="./images/symbol-defs.svg#icon-footer-logo-text"></use>
          </svg>
        </div> */}
        <div className={style.footerMenu}>
          <ul className={style.footerMenuList}>
            <li className={style.footerMenuItem}>
              <input
                className={style.footerMenuInput}
                type="checkbox"
                name="footer__input-name"
                id="fimput1"
              />
              <label className={style.footerMenuLabel} htmlFor="fimput1">
                <h3 className={style.footerMenuTitle}>Категорії</h3>
                <svg className={style.footerMenuArrow}>
                  <use href="./images/symbol-defs.svg#icon-arrow"></use>
                </svg>
              </label>
              <div className={style.footerMenuParagraph}>
                <ul className={style.footerMenuCategories}>
                  <li className={style.footerMenuCategorie}>
                    <a href="#" className={style.footerMenuLink}>Ліжка</a>
                  </li>
                  <li className={style.footerMenuCategorie}>
                    <a href="#" className={style.footerMenuLink}>Матраци</a>
                  </li>
                  <li className={style.footerMenuCategorie}>
                    <a href="#" className={style.footerMenuLink}>М’які меблі</a>
                  </li>
                  <li className={style.footerMenuCategorie}>
                    <a href="#" className={style.footerMenuLink}>Шафи</a>
                  </li>
                  <li className={style.footerMenuCategorie}>
                    <a href="#" className={style.footerMenuLink}>Комоди</a>
                  </li>
                  <li className={style.footerMenuCategorie}>
                    <a href="#" className={style.footerMenuLink}>Тумби</a>
                  </li>
                  <li className={style.footerMenuCategorie}>
                    <a href="#" className={style.footerMenuLink}>Столи</a>
                  </li>
                  <li className={style.footerMenuCategorie}>
                    <a href="#" className={style.footerMenuLink}>Стільці</a>
                  </li>
                  <li className={style.footerMenuCategorie}>
                    <a href="#" className={style.footerMenuLink}>Меблеві стіни</a>
                  </li>
                  <li className={style.footerMenuCategorie}>
                    <a href="#" className={style.footerMenuLink}>Кухні</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className={style.footerMenuItem}>
              <input
                className={style.footerMenuInput}
                type="checkbox"
                name="footer__input-name"
                id="fimput2"
              />
              <label className={style.footerMenuLabel} htmlFor="fimput2">
                <h3 className={style.footerMenuTitle}>Інформація</h3>
                <svg className={style.footerMenuArrow}>
                  <use href="./images/symbol-defs.svg#icon-arrow"></use>
                </svg>
              </label>
              <div className={style.footerMenuParagraph}>
                <ul className={style.footerMenuInformations}>
                  <li className={style.footerMenuInformation}>
                    <a href="./about-us.html" className={style.footerMenuLink}>Про нас</a>
                  </li>
                  <li className={style.footerMenuInformation}>
                    <a href="./pay.html" className={style.footerMenuLink}>Оплата</a>
                  </li>
                  <li className={style.footerMenuInformation}>
                    <a href="./delivery.html" className={style.footerMenuLink}>Доставка та збірка</a>
                  </li>
                  <li className={style.footerMenuInformation}>
                    <a href="./reviews.html" className={style.footerMenuLink}>Відгуки</a>
                  </li>
                  <li className={style.footerMenuInformation}>
                    <a href="./blog-page.html" className={style.footerMenuLink}>Блог</a>
                  </li>
                  <li className={style.footerMenuInformation}>
                    <a href="./contacts.html" className={style.footerMenuLink}>Контакти</a>
                  </li>
                  <li className={style.footerMenuInformation}>
                    <a href="./contacts.html" className={style.footerMenuLink}>Мапа сайту</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className={style.footerMenuItem}>
              <input
                className={style.footerMenuInput}
                type="checkbox"
                name="footer__input-name"
                id="fimput3"
              />
              <label className={style.footerMenuLabel} htmlFor="fimput3">
                <h3 className={style.footerMenuTitle}>Клієнтам</h3>
                <svg className={style.footerMenuArrow}>
                  <use href="./images/symbol-defs.svg#icon-arrow"></use>
                </svg>
              </label>
              <div className={style.footerMenuParagraph}>
                <ul className={style.footerMenuCustomers}>
                  <li className={style.footerMenuCustomer}>
                    <a href="#" className={style.footerMenuLink}>Акції</a>
                  </li>
                  <li className={style.footerMenuCustomer}>
                    <a href="#" className={style.footerMenuLink}>Розпродаж</a>
                  </li>
                  <li className={style.footerMenuCustomer}>
                    <a href="#" className={style.footerMenuLink}>Купити в кредит</a>
                  </li>
                  <li className={style.footerMenuCustomer}>
                    <a href="#" className={style.footerMenuLink}>Обмін і повернення товару</a>
                  </li>
                  <li className={style.footerMenuCustomer}>
                    <a href="#" className={style.footerMenuLink}>Часто задавані питання</a>
                  </li>
                  <li className={style.footerMenuCustomer}>
                    <a href="#" className={style.footerMenuLink}>Умови покупки</a>
                  </li>
                  <li className={style.footerMenuCustomer}>
                    <a href="#" className={style.footerMenuLink}>Політика конфіденційності</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className={containerStyle.container}>
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