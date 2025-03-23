import style from "../../../components/Container/Container.module.scss";

export const Hero = () => {
  return (
    <section className="hero">
      <div className={style.container}> {/* hero__container потрібно додати */}
        <div id="page">
          <div className="js-slider" auto="false" arrow="true" dots="true">
            <ul className="hero__slide-list">
              <li className="hero__slide"></li>
              <li className="hero__slide"></li>
              <li className="hero__slide"></li>
              <li className="hero__slide"></li>
              <li className="hero__slide"></li>
            </ul>
            <button className="prev hero__button1">
              <svg className="hero__icon1">
                <use href="../images/symbol-defs.svg#icon-main-hero-left"></use>
              </svg>
            </button>
            <button className="next hero__button2">
              <svg className="hero__icon2">
                <use href="../images/symbol-defs.svg#icon-main-hero-right"></use>
              </svg>
            </button>
          </div>
          <div className="dots-container"></div>
        </div>
      </div>
    </section>
  );
};
