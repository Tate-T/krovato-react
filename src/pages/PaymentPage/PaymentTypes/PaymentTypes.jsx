import styles from "./payment-types.module.scss";
import containerStyles from "../../../components/Container/Container.module.scss";

import ukrainePayment from "../../../images/payment-page/ukraine-payment.png";
import credit from "../../../images/payment-page/credit.png";
import prepayment from "../../../images/payment-page/prepayment.png";

export const PaymentTypes = () => {
  return (
    <section className={styles.paymentTypes}>
      <div className={containerStyles.container}>
        <ul className={styles.paymentTypes__list}>
          <li key="ukrainePayment" className={styles.paymentTypes__item}>
            <div className={styles.paymentTypes__bg}>
              <img className={styles.paymentTypes__icon} src={ukrainePayment} />
            </div>
            <div className={styles.paymentTypes__box}>
              <h2 className={styles.paymentTypes__title}>Оплата по Україні</h2>
              <p className={styles.paymentTypes__text}>
                Доставка по Україні здійснюється Новою Поштою. Ви можете
                оплатити Ваше замовлення при отриманні післяплатою. Вартість
                післяплати 35грн +1-2% від суми. Також Ви можете оплатити Ваше
                замовлення на карту ПриватБанку, перед відправкою замовлення
                Вам.
              </p>
            </div>
          </li>
          <li key="credit" className={styles.paymentTypes__item}>
            <div className={styles.paymentTypes__bg}>
              <img className={styles.paymentTypes__icon} src={credit} />
            </div>
            <div className={styles.paymentTypes__box}>
              <h2 className={styles.paymentTypes__title}>Кредит\Розстрочка</h2>
              <p className={styles.paymentTypes__text}>
                На нашій виставці, ви можете оплатити Ваше замовлення за
                допомогою сервісів ПриватБанку "Миттєва Розстрочка" та "Оплата
                частинами", з мінімальними відсотками.
              </p>
            </div>
          </li>
          <li key="prepayment" className={styles.paymentTypes__item}>
            <div className={styles.paymentTypes__bg}>
              <img className={styles.paymentTypes__icon} src={prepayment} />
            </div>
            <div className={styles.paymentTypes__box}>
              <h2 className={styles.paymentTypes__title}>Передплата</h2>
              <p className={styles.paymentTypes__text}>
                У зв'язку з частими випадками замовлень "клієнтами", які не
                збираються забирати їх керівництвом, було прийнято рішення про
                введення, мінімальної передоплати 20% (на стандартні
                замовлення). Залишок суми (80%) Ви оплачуєте при отриманні за
                фактом складання. На нестандартні та великі замовлення
                передоплата 50%. На нестандартні матраци передплата 100%.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PaymentTypes;
