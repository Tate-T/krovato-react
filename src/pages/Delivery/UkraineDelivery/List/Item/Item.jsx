import style from "../../UkraineDelivery.module.scss";

export const UkraineItem = ({ id, svg, text }) => {
  return (
    <li key={id} className={style.ukraine__item}>
      <svg className={style.ukraine__icon}>
        <use href={svg}></use>
      </svg>
      <p className={style.ukraine__text}>{text}</p>
    </li>
  );
};
