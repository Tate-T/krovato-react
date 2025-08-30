import { Link } from 'react-router-dom';

import style from './Footer.module.scss';
import containerStyle from "../Container/Container.module.scss";

import logo from '../../images/footer/logo-footer.svg';
import arrow from '../../images/footer/arrow.svg';
import facebook from '../../images/footer/facebook.svg';
import instagram from '../../images/footer/instagram.svg';
import whatsapp from '../../images/footer/whatsapp.svg';
import telegram from '../../images/footer/telegram.svg';
import viber from '../../images/footer/viber.svg';
import visa from '../../images/footer/visa.svg';
import mastercard from '../../images/footer/mastercard.svg';
import tel from '../../images/footer/tel.svg';
import adres from '../../images/footer/adres.svg';
import calendar from '../../images/footer/calendar.svg';

export const Footer = () => {
  return (
    <section className={style.footer}>
      <div className={style.footer__mobSec}>
        <div className={`${style.footer__logoBox} ${style.footer__logoBoxMob}`}>
          <img src={logo} alt="" />
        </div>
        <div className={style.footerMenu}>
          <ul className={style.footerMenu__list}>
            <li className={style.footerMenu__item}>
              <input
                className={style.footerMenu__input}
                type="checkbox"
                name="footer__input-name"
                id="fimput1"
              />
              <label className={style.footerMenu__label} htmlFor="fimput1">
                <h3 className={style.footerMenu__title}>Категорії</h3>
                <img src={arrow} className={style.footerMenu__arrow} alt="" />
              </label>
              <div className={style.footerMenu__paragraph}>
                <ul className={style.footerMenu__categories}>
                  <li className={style.footerMenu__categorie}>
                    <a href="#" className={style.footerMenu__link}>Ліжка</a>
                  </li>
                  <li className={style.footerMenu__categorie}>
                    <a href="#" className={style.footerMenu__link}>Матраци</a>
                  </li>
                  <li className={style.footerMenu__categorie}>
                    <a href="#" className={style.footerMenu__link}>М’які меблі</a>
                  </li>
                  <li className={style.footerMenu__categorie}>
                    <a href="#" className={style.footerMenu__link}>Шафи</a>
                  </li>
                  <li className={style.footerMenu__categorie}>
                    <a href="#" className={style.footerMenu__link}>Комоди</a>
                  </li>
                  <li className={style.footerMenu__categorie}>
                    <a href="#" className={style.footerMenu__link}>Тумби</a>
                  </li>
                  <li className={style.footerMenu__categorie}>
                    <a href="#" className={style.footerMenu__link}>Столи</a>
                  </li>
                  <li className={style.footerMenu__categorie}>
                    <a href="#" className={style.footerMenu__link}>Стільці</a>
                  </li>
                  <li className={style.footerMenu__categorie}>
                    <a href="#" className={style.footerMenu__link}>Меблеві стіни</a>
                  </li>
                  <li className={style.footerMenu__categorie}>
                    <a href="#" className={style.footerMenu__link}>Кухні</a>
                  </li>
                </ul>
              </div>
            </li>

            <li className={style.footerMenu__item}>
              <input
                className={style.footerMenu__input}
                type="checkbox"
                name="footer__input-name"
                id="fimput2"
              />
              <label className={style.footerMenu__label} htmlFor="fimput2">
                <h3 className={style.footerMenu__title}>Інформація</h3>
                <img src={arrow} className={style.footerMenu__arrow} alt="" />
              </label>
              <div className={style.footerMenu__paragraph}>
                <ul className={style.footerMenu__informations}>
                  <li className={style.footerMenu__information}>
                    <Link to="/aboutUs" className={style.footerMenu__link}>Про нас</Link>
                  </li>
                  <li className={style.footerMenu__information}>
                    <Link to="/pay" className={style.footerMenu__link}>Оплата</Link>
                  </li>
                  <li className={style.footerMenu__information}>
                    <Link to="/delivery" className={style.footerMenu__link}>Доставка та збірка</Link>
                  </li>
                  <li className={style.footerMenu__information}>
                    <Link to="/reviews" className={style.footerMenu__link}>Відгуки</Link>
                  </li>
                  <li className={style.footerMenu__information}>
                    <Link to="/blog" className={style.footerMenu__link}>Блог</Link>
                  </li>
                  <li className={style.footerMenu__information}>
                    <Link to="/contacts" className={style.footerMenu__link}>Контакти</Link>
                  </li>
                  <li className={style.footerMenu__information}>
                    <Link to="/contacts" className={style.footerMenu__link}>Мапа сайту</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className={style.footerMenu__item}>
              <input
                className={style.footerMenu__input}
                type="checkbox"
                name="footer__input-name"
                id="fimput3"
              />
              <label className={style.footerMenu__label} htmlFor="fimput3">
                <h3 className={style.footerMenu__title}>Клієнтам</h3>
                <img src={arrow} className={style.footerMenu__arrow} alt="" />
              </label>
              <div className={style.footerMenu__paragraph}>
                <ul className={style.footerMenu__customers}>
                  <li className={style.footerMenu__customer}>
                    <a href="#" className={style.footerMenu__link}>Акції</a>
                  </li>
                  <li className={style.footerMenu__customer}>
                    <a href="#" className={style.footerMenu__link}>Розпродаж</a>
                  </li>
                  <li className={style.footerMenu__customer}>
                    <a href="#" className={style.footerMenu__link}>Купити в кредит</a>
                  </li>
                  <li className={style.footerMenu__customer}>
                    <a href="#" className={style.footerMenu__link}>Обмін і повернення товару</a>
                  </li>
                  <li className={style.footerMenu__customer}>
                    <a href="#" className={style.footerMenu__link}>Часто задавані питання</a>
                  </li>
                  <li className={style.footerMenu__customer}>
                    <a href="#" className={style.footerMenu__link}>Умови покупки</a>
                  </li>
                  <li className={style.footerMenu__customer}>
                    <a href="#" className={style.footerMenu__link}>Політика конфіденційності</a>
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
              <img src={logo} alt="" />
            </div>
            <div className={style.footer__socialsBoxDesk}>
              <p className={style.footer__textJoin}>Приєднуйтесь:</p>
              <div className={style.footer__boxJoin}>
                <a href="https://www.facebook.com" className={style.footer__iconLink}>
                  <img src={facebook} alt="" />
                </a>
                <a href="https://www.instagram.com" className={style.footer__iconLink}>
                  <img src={instagram} alt="" />
                </a>
              </div>
              <p className={style.footer__textHelp}>Допомога і консультація:</p>
              <div className={style.footer__boxHelp}>
                <a href="https://web.whatsapp.com" className={style.footer__iconLink}>
                  <div className={style.footer__svgBug}>
                    <img src={whatsapp} alt="" />
                  </div>
                </a>
                <a href="https://web.telegram.org" className={style.footer__iconLink}>
                  <img src={telegram} alt="" />
                </a>
                <a href="https://account.viber.com" className={style.footer__iconLink}>
                  <img src={viber} alt="" />
                </a>
              </div>
              <div className={style.footer__boxPay}>
                <a href="#" className={style.footer__iconLink}>
                  <img src={visa} alt="" />
                </a>
                <a href="#" className={style.footer__iconLink}>
                  <img src={mastercard} alt="" />
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
                  <Link to="/aboutUs" className={style.footer__link}>Про нас</Link>
                </li>
                <li className={style.footer__informations}>
                  <Link to="/pay" className={style.footer__link}>Оплата</Link>
                </li>
                <li className={style.footer__informations}>
                  <Link to="/delivery" className={style.footer__link}>Доставка та збірка</Link>
                </li>
                <li className={style.footer__informations}>
                  <Link to="/reviews" className={style.footer__link}>Відгуки</Link>
                </li>
                <li className={style.footer__informations}>
                  <Link to="/blog" className={style.footer__link}>Блог</Link>
                </li>
                <li className={style.footer__informations}>
                  <Link to="/contacts" className={style.footer__link}>Контакти</Link>
                </li>
                <li className={style.footer__informations}>
                  <Link to="/aboutUs" className={style.footer__link}>Мапа сайту</Link>
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
              <img className={style.footer__callSvg} src={tel} alt="" />
              <div className={style.footer__numbers}>
                <a href="tel:+380679294545" className={style.footer__number}>+38 067 929-45-45</a>
                <a href="tel:+380501334545" className={style.footer__number}>+38 050 133-45-45</a>
                <a href="tel:+380931707545" className={style.footer__number}>+38 093 170-75-45</a>
                <a href="#" className={style.footer__callMe}>Передзвоніть мені</a>
              </div>
            </div>
            <div className={style.footer__adress}>
              <img className={style.footer__adressSvg} src={adres} alt="" />
              <a href="./contacts.html" className={style.footer__adressText}>м. Київ, провулок Ізяславський 52, поверх 2</a>
            </div>
            <div className={style.footer__schedule}>
              <img className={style.footer__scheduleSvg} src={calendar} alt="" />
              <p className={style.footer__scheduleText}>Працюємо щодня з 9:00 до 18:00</p>
            </div>
          </div>
          <div className={style.footer__socialsBoxMob}>
            <p className={`${style.footer__textJoin} ${style.footer__textJoinMob}`}>
              Приєднуйтесь:
            </p>
            <div className={`${style.footer__boxJoin} ${style.footer__boxJoinMob}`}>
              <a href="https://www.facebook.com/krovato" className={style.footer__iconLink}>
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/krovato_com/" className={style.footer__iconLink}>
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
            <p className={`${style.footer__textHelp} ${style.footer__textHelpMob}`}>
              Допомога і консультація:
            </p>
            <div className={style.footer__boxHelpMob}>
              <a href="https://web.whatsapp.com" className={style.footer__iconLink}>
                <div className={style.footer__svgBug}>
                  <img src={whatsapp} alt="WhatsApp" />
                </div>
              </a>
              <a href="https://web.telegram.org" className={style.footer__iconLink}>
                <img src={telegram} alt="Telegram" />
              </a>
              <a href="https://account.viber.com" className={style.footer__iconLink}>
                <img src={viber} alt="Viber" />
              </a>
            </div>
            <div className={`${style.footer__boxPay} ${style.footer__boxPayMob}`}>
              <a href="#" className={style.footer__iconLink}>
                <img src={visa} alt="Visa" />
              </a>
              <a href="#" className={style.footer__iconLink}>
                <img src={mastercard} alt="Mastercard" />
              </a>
            </div>
          </div>


        </div>
        <div className={style.footer__copyright}>
          <p className={style.footer__copyrightText}>
            © KROVATO - Технології сну - 2022. Всі права захищені.
          </p>
        </div>
      </div>
    </section>
  )
}