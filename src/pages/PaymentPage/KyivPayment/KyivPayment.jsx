export const KyivPayment = () => {
  return (
    <section className="kyiv-payment">
      <div className="container">
        <h2 className="kyiv-payment__title">Оплата по Києву:</h2>
        <ul className="kyiv-payment__list">
          <li key="terminal">
            <div className="kyiv-payment__bg">
              <svg className="kyiv-payment__icon">
                <use href="#"></use>
              </svg>
            </div>
            <h3 className="kyiv-payment__subtitle">Через термінал</h3>
            <p className="kyiv-payment__text">
              Ви можете оплатити Ваше замовлення карткою на нашій виставці за
              адресою: пров. Ізяславський 52, поверх 2
            </p>
          </li>
          <li key="privateBank">
            <div className="kyiv-payment__bg">
              <svg className="kyiv-payment__icon">
                <use href="#"></use>
              </svg>
            </div>
            <h3 className="kyiv-payment__subtitle">На карту ПриватБанку</h3>
            <p className="kyiv-payment__text">
              Ви можете це зробити через термінал самообслуговування, або
              Приват24.
            </p>
          </li>
          <li key="card">
            <div className="kyiv-payment__bg">
              <svg className="kyiv-payment__icon">
                <use href="#"></use>
              </svg>
            </div>
            <h3 className="kyiv-payment__subtitle">Безготівкова</h3>
            <p className="kyiv-payment__text">
              Оплата проводиться в касі відділення будь-якого банку або з
              розрахункового рахунку Вашої фірми.
            </p>
          </li>
          <li key="postpaid">
            <div className="kyiv-payment__bg">
              <svg className="kyiv-payment__icon">
                <use href="#"></use>
              </svg>
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
