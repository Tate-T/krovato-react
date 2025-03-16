export const Advantages = () => {
  return (
    <section className="advantages">
      <div className="container">
        <h2 className="advantages__title">KROVATO це</h2>
        <ul className="advantages__list">
          <li
            className="advantages__item"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <svg className="advantages__icon">
              <use href="./images/symbol-defs.svg#icon-advantages"></use>
            </svg>
            <h3 className="advantages__subtitle">Власне виробництво</h3>
            <p className="advantages__text">
              Також у нас є своє виробництво, завдяки чому ми можемо виготовити
              меблі безпосередньо за Вашими побажаннями: нестандартний розмір,
              висота, виготовлення меблів за Вашим ескізом. Ліжка, тумби,
              комоди, шафи - все це ми можемо доопрацювати за Вашим бажанням.
            </p>
          </li>
          <li
            className="advantages__item"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            <svg className="advantages__icon">
              <use href="./images/symbol-defs.svg#icon-advantages"></use>
            </svg>
            <h3 className="advantages__subtitle">Професіонали</h3>
            <p className="advantages__text">
              Наші вироби виготовлені на професійному обладнанні з ясена,
              вільхи, бука, дуба, металу та ДСП. Фабрики із закритим циклом
              виробництва – контроль якості кожному етапі: від завезення дерева
              в цех до складання ліжка в клієнта.
            </p>
          </li>
          <li
            className="advantages__item"
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            <svg className="advantages__icon">
              <use href="./images/symbol-defs.svg#icon-advantages"></use>
            </svg>
            <h3 className="advantages__subtitle">Великий вибір</h3>
            <p className="advantages__text">
              На нашому сайті Ви легко зможете підібрати собі спальню, вітальню
              або дитячу кімнату "під ключ". Величезний вибір матраців, ліжок, а
              також тумбочок та комодів чекають на Вас.
            </p>
          </li>
          <li
            className="advantages__item"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <svg className="advantages__icon">
              <use href="./images/symbol-defs.svg#icon-advantages"></use>
            </svg>
            <h3 className="advantages__subtitle">Контроль якості</h3>
            <p className="advantages__text">
              Наші досвідчені менеджери, з радістю допоможуть підібрати Вам
              меблі, які Вас радуватимуть довгі роки. Завдяки власній службі
              доставки та збирання, ми підтримуємо контроль якості від
              виробництва до клієнта.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
