import style from "../../KyivDelivery.module.scss";

export const KyivItem = ({ id, svg, text }) => {
  return (
    <li key={id} className={style.kyiv__item}>
      <svg className={style.kyiv__icon}>
        <use href={svg}></use>
      </svg>
      <p className={style.kyiv__text}>{text}</p>
    </li>
  );
};
