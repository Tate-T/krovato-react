import style from './About.module.scss'

export const About = () => {
  return (
    <section className={style.about}>
      <ul className={style.about__list}>
        <li data-aos="flip-up" data-aos-duration="2500" className={style.about__item}>
          {/* <svg className={style.about__icon}>
            <use href="./images/symbol-defs.svg#options-icon1"></use>
          </svg> */}
          <p className={style.about__text}>Безкоштовна доставка</p>
        </li>
        <li data-aos="flip-up" data-aos-duration="1000" className={style.about__item}>
          {/* <svg className={style.about__icon}>
            <use href="./images/symbol-defs.svg#options-icon2"></use>
          </svg> */}
          <p className={style.about__text}>Безкоштовна збірка</p>
        </li>
        <li data-aos="flip-up" data-aos-duration="1000" className={style.about__item}>
          {/* <svg className={style.about__icon}>
            <use href="./images/symbol-defs.svg#options-icon3"></use>
          </svg> */}
          <p className={style.about__text}>Післягарантійне обслуговування</p>
        </li>
        <li data-aos="flip-up" data-aos-duration="2500" className={style.about__item}>
          {/* <svg className={style.about__icon}>
            <use href="./images/symbol-defs.svg#options-icon4"></use>
          </svg> */}
          <p className={style.about__text}>Знижки клієнтам</p>
        </li>
      </ul>
    </section>
  );
};
