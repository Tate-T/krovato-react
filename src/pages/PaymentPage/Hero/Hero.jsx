import style from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.paymentHeroContainer}>
        <div className={style.paymentHeroBox}>
          <h1 className={style.paymentHeroTitle}>Оплата товару</h1>
          <h2 className={style.paymentHeroSubtitle}>
            Клієнти Krovato можуть в один клік провести оплату товару на сайті.
          </h2>
          <p className={style.paymentHeroText}>
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
