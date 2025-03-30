import style from "./Hero.module.scss";
// import containerStyle from 

export const Hero = () => {
  return (
    <section className={style.paymentHero}>
      <div className={style.paymentHero__container}>
        <div className={style.paymentHero__box}>
          <h1 className={style.paymentHero__title}>Оплата товару</h1>
          <h2 className={style.paymentHero__subtitle}>
            Клієнти Krovato можуть в один клік провести оплату товару на сайті.
          </h2>
          <p className={style.paymentHero__text}>
            Оплата готівкою при отриманні товару, за безготівковим розрахунком,
            оплата замовлення онлайн банківською картою Visa або MasterCard або
            кредит - у нас можливо все!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
