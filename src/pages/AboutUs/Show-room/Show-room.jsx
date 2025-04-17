import style from "./Show-room.module.scss";
import showRoomImg from "../../../images/about-us/show-room.png";
import containerStyle from "../../../components/Container/Container.module.scss"

export const ShowRoom = () => {
  return (
    <section className={style.showRoom}>
      <div className={containerStyle.container}>
        <div className={style.showRoom__container}>
          <div
            className={style.showRoom__box}
            data-aos="zoom-out-right"
            data-aos-duration="1000"
          >
            <h2 className={style.showRoom__title}>
              Запрошуємо Вас відвідати наш Шоу-рум
            </h2>
            <h3 className={style.showRoom__subtitle}>
              Наші фахівці допоможуть Вам підібрати матеріали і комплектуючі з
              урахуванням Ваших побажань.
            </h3>
            <p className={style.showRoom__text}>
              У нас є виставка, на якій Ви можете побачити найпопулярніші моделі
              ліжок та тумбочок, а також полежати на різних моделях матраців та
              підібрати собі оптимальний матрац для комфортного сну. Адреса
              виставки, а також карту проїзду можна побачити в розділі
              "Контакти".
            </p>
            <button className={style.showRoom__btn}>
              <span className={style.showRoom__span}>Відкрити контакти</span>
              <svg className={style.showRoom__icon}>
                <use href="./images/symbol-defs.svg#icon-upper-arrow"></use>
              </svg>
            </button>
          </div>
          {/* <picture>
          <source
            srcset="
          ./images/mobile/show-room@1x.webp 1x,
          ./images/mobile/show-room@2x.webp 2x
        "
            media="(min-width: 320px)"
          />
          <source
            srcset="
          ./images/desktop/show-room@1x.webp 1x,
          ./images/desktop/show-room@2x.webp 2x
        "
            media="(min-width: 1290px)"
          />
          <img
            src="./images/desktop/show-room@1x.webp"
            alt="Меблі"
            className={style.showRoom__img}
          />
        </picture> */}
          <img src={showRoomImg} alt="Меблі" className={style.showRoom__img} />
        </div>
      </div>
    </section>
  );
};
