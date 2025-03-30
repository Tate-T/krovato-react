import style from './BlogMain.module.scss'

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
            <img className={style.blog__photo} src={element.imgUrl} alt="1" />
              <h3 className={style.blog__subtitle}>{element.title}</h3>
              <a className={style.blog__listLink}>
                Детальніше
                <svg className={style.blog__titleArrow}>
                  <use href="./images/symbol-defs.svg#icon-upper-arrow"></use>
                </svg>
              </a>
          </li>
        ))}
      </ul>
  );
};
