import containerStyle from "../../../components/Container/Container.module.scss";
import style from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className="hero">
      <div className={`${containerStyle.container} ${style.hero__container}`}>
        <div id="page">
          <div className={style.js__slider} auto="false" arrow="true" dots="true">
            <ul className={style.hero__slideList}>
              <li className={style.hero__slide}></li>
              <li className={style.hero__slide}></li>
              <li className={style.hero__slide}></li>
              <li className={style.hero__slide}></li>
              <li className={style.hero__slide}></li>
            </ul>
            <button className={`${style.prev} ${style.hero__button1}`}>
              <svg className={style.hero__icon1}>
                <use href="../images/symbol-defs.svg#icon-main-hero-left"></use>
              </svg>
            </button>
            <button className={`${style.next} ${style.hero__button2}`}>
              <svg className={style.hero__icon2}>
                <use href="../images/symbol-defs.svg#icon-main-hero-right"></use>
              </svg>
            </button>
          </div>
          <div className={style.dots__container}></div>
        </div>
      </div>
    </section>
  );
};
