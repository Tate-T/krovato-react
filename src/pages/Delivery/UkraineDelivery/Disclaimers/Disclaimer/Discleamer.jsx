import style from "../../UkraineDelivery.module.scss";

export const Disclaimer = ({ id, text }) => {
  return (
    <li key={id} className={style.ukraine__disclaimer}>
      <p className={style.ukraine__warning}>{text}</p>
    </li>
  );
};
