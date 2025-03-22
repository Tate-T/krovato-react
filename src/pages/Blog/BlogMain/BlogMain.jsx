const data = [
  {
    id: 1,
    imgUrl: "",
    title: "Стільці для вітальні. Як правильно вибрати?",
  },
  {
    id: 2,
    imgUrl: "",
    title: "Що краще вибрати для кухні – стільці чи кухонний куточок?",
  },
  {
    id: 3,
    imgUrl: "",
    title: "Оформлення вітальні. Які м'які меблі краще вибрати?",
  },
  {
    id: 4,
    imgUrl: "",
    title: "Стільці для вітальні. Як правильно вибрати?",
  },
  {
    id: 5,
    imgUrl: "",
    title: "Що краще вибрати для кухні – стільці чи кухонний куточок?",
  },
  {
    id: 6,
    imgUrl: "",
    title: "Оформлення вітальні. Які м'які меблі краще вибрати?",
  },
  {
    id: 7,
    imgUrl: "",
    title: "Стільці для вітальні. Як правильно вибрати?",
  },
  {
    id: 8,
    imgUrl: "",
    title: "Що краще вибрати для кухні – стільці чи кухонний куточок?",
  },
  {
    id: 9,
    imgUrl: "",
    title: "Оформлення вітальні. Які м'які меблі краще вибрати?",
  },
  {
    id: 10,
    imgUrl: "",
    title: "Стільці для вітальні. Як правильно вибрати?",
  },
  {
    id: 11,
    imgUrl: "",
    title: "Що краще вибрати для кухні – стільці чи кухонний куточок?",
  },
  {
    id: 12,
    imgUrl: "",
    title: "Оформлення вітальні. Які м'які меблі краще вибрати?",
  },
];

export const BlogMain = () => {
  return (
      <ul className={style.blog__list}>
        {data.map((element) => (
          <li className={style.blog__item} data-aos="fade-right">
            <img className={style.blog__img} src={element.imgUrl} alt="1" />
            <div className={style.blog__box}>
              <h2 className={style.blog__info}>{element.title}</h2>
              <a className={style.blog__text} href="./blog-article.html">
                Детальніше
                <svg className={style.blog__svg}>
                  <use href="/images/symbol-defs.svg#icon-upper-right"></use>
                </svg>
              </a>
            </div>
          </li>
        ))}
      </ul>
  );
};
