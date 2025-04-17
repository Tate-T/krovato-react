import styles from "./KyivPayment.module.scss";
import containerStyles from "../../../components/Container/Container.module.scss";

import terminal from "../../../images/payment-page/terminal.png";
import card from "../../../images/payment-page/card.png";
import cash from "../../../images/payment-page/cash.png";
import postpaid from "../../../images/payment-page/postpaid.png";

export const KyivPayment = () => {
  return (
    <section className={styles.kyivPayment}>
      <div className={containerStyles.container}>
        <h2 className={styles.kyivPayment__title}>Оплата по Києву:</h2>
        <ul className={styles.kyivPayment__list}>
          <li key="terminal">
            <div className={styles.kyivPayment__bg}>
              <img
                src={terminal}
                alt="terminal"
                className={styles.kyivPayment__icon}
              />
            </div>
            <h3 className={styles.kyivPayment__subtitle}>Через термінал</h3>
            <p className={styles.kyivPayment__text}>
              Ви можете оплатити Ваше замовлення карткою на нашій виставці за
              адресою: пров. Ізяславський 52, поверх 2
            </p>
          </li>
          <li key="privateBank">
            <div className={styles.kyivPayment__bg}>
              <img src={card} alt="card" className={styles.kyivPayment__icon} />
            </div>
            <h3 className={styles.kyivPayment__subtitle}>
              На карту ПриватБанку
            </h3>
            <p className={styles.kyivPayment__text}>
              Ви можете це зробити через термінал самообслуговування, або
              Приват24.
            </p>
          </li>
          <li key="card">
            <div className={styles.kyivPayment__bg}>
              <img src={cash} alt="cash" className={styles.kyivPayment__icon} />
            </div>
            <h3 className={styles.kyivPayment__subtitle}>Безготівкова</h3>
            <p className={styles.kyivPayment__text}>
              Оплата проводиться в касі відділення будь-якого банку або з
              розрахункового рахунку Вашої фірми.
            </p>
          </li>
          <li key="postpaid">
            <div className={styles.kyivPayment__bg}>
              <img src={postpaid} alt="postpaid" className={styles.kyivPayment__icon} />
            </div>
            <h3 className={styles.kyivPayment__subtitle}>Післяплатою</h3>
            <p className={styles.kyivPayment__text}>
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
