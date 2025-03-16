export const ShowRoom = () => {
  return (
    <section className="show-room">
      <div className="container show-room__container">
        <div
          className="show-room__box"
          data-aos="zoom-out-right"
          data-aos-duration="1000"
        >
          <h2 className="show-room__title">Запрошуємо Вас відвідати наш Шоу-рум</h2>
          <h3 className="show-room__subtitle">
            Наші фахівці допоможуть Вам підібрати матеріали і комплектуючі з
            урахуванням Ваших побажань.
          </h3>
          <p className="show-room__text">
            У нас є виставка, на якій Ви можете побачити найпопулярніші моделі
            ліжок та тумбочок, а також полежати на різних моделях матраців та
            підібрати собі оптимальний матрац для комфортного сну. Адреса
            виставки, а також карту проїзду можна побачити в розділі "Контакти".
          </p>
          <button className="show-room__btn">
            <span className="show-room__span">Відкрити контакти</span>
            <svg className="show-room__icon">
              <use href="./images/symbol-defs.svg#icon-upper-arrow"></use>
            </svg>
          </button>
        </div>
        <picture>
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
            className="show-room__img"
          />
        </picture>
      </div>
    </section>
  );
};
