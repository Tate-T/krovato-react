export const BlogArticleList = () => {
  return (
    <>
      <h2 className={style.article__titles}>
        На сайті інтернет магазину Кровато представлено велику різноманітність
        м'яких меблів для вітальні, серед яких кожен зможе вибрати для себе
        найбільш вдалий варіант. У нас ви знайдете:
      </h2>
      <ul className={style.article__list}>
        <li className={style.article__item}>
          <svg className={style.article__icon}>
            <use href=""></use>
          </svg>
          <p className={style.article__info}>
            Прямі дивани. Такі дивани вважаються класикою. Вони підходять для
            віталень будь-яких форм та розмірів. Прямий диван виглядає стильно
            та лаконічно, на ньому зручно відпочивати, приймати гостей або
            навіть спати. Прямі дивани можуть стояти біля стіни, так і в центрі
            кімнати. Багато моделей прямих диванів легко розкладаються,
            перетворюючись на повноцінне спальне місце. Також більшість диванів
            мають великі та місткі ніші, які є додатковим місцем для зберігання;
          </p>
        </li>
        <li className={style.article__item}>
          <svg className={style.article__icon}>
            <use href=""></use>
          </svg>
          <p className={style.article__info}>
            Кутові дивани Кутові дивани вважаються найзручнішими та
            комфортнішими. Вони ідеально підійдуть для приємного проведення часу
            в колі сім'ї або друзів. Кутові дивани в основному використовуються
            для оформлення великих віталень, так як вони займають багато місця,
            і для кімнат з невеликою площею просто не підійдуть;
          </p>
        </li>
        <li className={style.article__item}>
          <svg className={style.article__icon}>
            <use href=""></use>
          </svg>
          <p className={style.article__info}>
            Тахти. Тахта - це одна з варіацій дивана, але стильніша і
            мінімалістична. Виглядають тахти дуже незвично і можуть підійти для
            будь-якого інтер'єру. Також тахти більше ніж звичайні дивани
            підходять для сну, оскільки в їх основі не пружинні блоки, а
            дерев'яні ламелі або ортопедичні матраци;
          </p>
        </li>
        <li className={style.article__item}>
          <svg className={style.article__icon}>
            <use href=""></use>
          </svg>
          <p className={style.article__info}>
            Крісла. Крісло – це особливий предмет інтер'єру. Сучасні дизайнери
            не часто використовують його, вважаючи застарілим, проте саме крісла
            створюють особливий затишок та комфорт у будь-якій кімнаті. Сьогодні
            існує величезна різноманітність класичних та сучасних моделей
            крісел, що дозволяє кожному відшукати ідеальне крісло для свого
            будинку;
          </p>
        </li>
        <li className={style.article__item}>
          <svg className={style.article__icon}>
            <use href=""></use>
          </svg>
          <p className={style.article__info}>
            Набір меблів. Комплект м'яких меблів – це відмінне рішення для тих,
            хто хоче меблювати свою вітальню не лише диваном, а й кріслами.
            Існують набори з одним або двома кріслами, із прямими або кутовими
            диванами. Основна перевага будь-якого готового меблевого гарнітура –
            це те, що предмети меблів у ньому ідеально поєднуються один з одним,
            і вам не потрібно буде витрачати свій час та сили на їхній підбір.
          </p>
        </li>
      </ul>
      <p className={style.article__additionally}>
        Підбір м'яких меблів для вітальні – це заняття непросте. Однак при
        виборі та покупці меблів для своєї вітальні пам'ятайте, що якісні м'які
        меблі повинні бути не тільки красивими, але й зручними для вас і всіх
        мешканців вашого будинку.
      </p>

      <ul className={style.article__list - button}>
        <li className={style.article__item - button} data-aos="fade-left">
          <button className={style.article__button}>
            Попередня стаття
            <svg className={style.article__button - svg - left}>
              <use href="/images/symbol-defs.svg#icon-arrow-to-left"></use>
            </svg>
          </button>
        </li>
        <li className={style.article__item - button} data-aos="fade-right">
          <button className={style.article__button} id="reloadButton">
            Наступна стаття
            <svg className={style.article__button - svg - right}>
              <use href="/images/symbol-defs.svg#icon-arrow-to-right"></use>
            </svg>
          </button>
        </li>
      </ul>
    </>
  );
};
