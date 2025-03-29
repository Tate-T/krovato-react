export const PaymentTypes = () => {
  return (
    <section className="payment-types">
      <div className="container">
        <ul className="payment-types__list">
          <li key="ukrainePayment">
            <div className="payment-types__bg">
              <svg className="payment-types__icon">
                <use href="#"></use>
              </svg>
            </div>
            <div className="payment-types__box">
              <h2 className="payment-types__title">Оплата по Україні</h2>
              <p className="payment-types__text">
                Доставка по Україні здійснюється Новою Поштою. Ви можете
                оплатити Ваше замовлення при отриманні післяплатою. Вартість
                післяплати 35грн +1-2% від суми. Також Ви можете оплатити Ваше
                замовлення на карту ПриватБанку, перед відправкою замовлення
                Вам.
              </p>
            </div>
          </li>
          <li key="credit">
            <div className="payment-types__bg">
              <svg className="payment-types__icon">
                <use href="#"></use>
              </svg>
            </div>
            <div className="payment-types__box">
              <h2 className="payment-types__title">Кредит\Розстрочка</h2>
              <p className="payment-types__text">
                На нашій виставці, ви можете оплатити Ваше замовлення за
                допомогою сервісів ПриватБанку "Миттєва Розстрочка" та "Оплата
                частинами", з мінімальними відсотками.
              </p>
            </div>
          </li>
          <li key="prepayment">
            <div className="payment-types__bg">
              <svg className="payment-types__icon">
                <use href="#"></use>
              </svg>
            </div>
            <div className="payment-types__box">
              <h2 className="payment-types__title">Передплата</h2>
              <p className="payment-types__text">
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
