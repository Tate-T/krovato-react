import style from "../../Shares.module.scss";

export const SharesItem = ({ id, svg, text }) => {
  return (
    <li key={id} class={style.shares__item}>
      <svg class={style.shares__icon}>
        <use href={svg}></use>
      </svg>
      <p class={style.shares__text}>{text}</p>
    </li>
  );
};
