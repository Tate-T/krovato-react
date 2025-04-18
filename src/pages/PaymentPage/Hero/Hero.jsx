import styles from "./Hero.module.scss";
import containerStyles from "../../../components/Container/Container.module.scss";

export const Hero = () => {
  return (
    <section className={styles.paymentHero}>
      <div className={[containerStyles.container, styles.paymentHero__container].join(" ")}>
        <div className={styles.paymentHero__box}>
          <h1 className={styles.paymentHero__title}>Оплата товару</h1>
          <h2 className={styles.paymentHero__subtitle}>
            Клієнти Krovato можуть в один клік провести оплату товару на сайті.
          </h2>
          <p className={styles.paymentHero__text}>
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
