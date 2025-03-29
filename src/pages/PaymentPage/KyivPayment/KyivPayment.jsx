import styles from "./KyivPayment.module.scss";

import terminal from "../../../images/payment-page/terminal.png";
import card from "../../../images/payment-page/card.png";
import cash from "../../../images/payment-page/cash.png";
import postpaid from "../../../images/payment-page/postpaid.png";

export const KyivPayment = () => {
  return (
    <section className="kyiv-payment">
      <div className="container">
        <h2 className="kyiv-payment__title">Оплата по Києву:</h2>
        <ul className="kyiv-payment__list">
          <li key="terminal">
            <div className={styles.kyivPayment__bg}>
              {/* <svg className="kyiv-payment__icon">
                <use href="#"></use>
              </svg> */}
              <img src={terminal} alt="terminal" />
            </div>
            <h3 className="kyiv-payment__subtitle">Через термінал</h3>
            <p className="kyiv-payment__text">
              Ви можете оплатити Ваше замовлення карткою на нашій виставці за
              адресою: пров. Ізяславський 52, поверх 2
            </p>
          </li>
          <li key="privateBank">
            <div className={styles.kyivPayment__bg}>
              {/* <svg className="kyiv-payment__icon">
                <use href="#"></use>
              </svg> */}
              <img src={card} alt="card" />
            </div>
            <h3 className="kyiv-payment__subtitle">На карту ПриватБанку</h3>
            <p className="kyiv-payment__text">
              Ви можете це зробити через термінал самообслуговування, або
              Приват24.
            </p>
          </li>
          <li key="card">
            <div className={styles.kyivPayment__bg}>
              {/* <svg className="kyiv-payment__icon">
                <use href="#"></use>
              </svg> */}
              <img src={cash} alt="cash" />
            </div>
            <h3 className="kyiv-payment__subtitle">Безготівкова</h3>
            <p className="kyiv-payment__text">
              Оплата проводиться в касі відділення будь-якого банку або з
              розрахункового рахунку Вашої фірми.
            </p>
          </li>
          <li key="postpaid">
            <div className={styles.kyivPayment__bg}>
              {/* <svg className="kyiv-payment__icon">
                <use href="#"></use>
              </svg> */}
              <img src={postpaid} alt="postpaid" />
            </div>
            <h3 className="kyiv-payment__subtitle">Післяплатою</h3>
            <p className="kyiv-payment__text">
              Оплата готівкою безпосередньо при отриманні і перевірці товару від
              кур'єра.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default KyivPayment;
