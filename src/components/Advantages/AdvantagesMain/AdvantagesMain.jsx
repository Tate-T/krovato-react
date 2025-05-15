import style from "./AdvantagesMain.module.scss";
import iconBus from "../../../images/adventages/car.svg";
import iconBox from "../../../images/adventages/box.svg";
import iconHeadphone from "../../../images/adventages/headphones.svg";
import iconDiscount from "../../../images/adventages/discount.svg";

export const AdvantagesMain = () => {
  return (
    <ul className={style.advantages__list}>
      <li className={style.advantages__item}>
        <img src={iconBus} alt="icon" className={style.advantages__icon} />
        <p className={style.advantages__text}>Безкоштовна доставка</p>
      </li>
      <li className={style.advantages__item}>
        <img src={iconBox} alt="icon" className={style.advantages__icon} />
        <p className={style.advantages__text}>Безкоштовна збірка</p>
      </li>
      <li className={style.advantages__item}>
        <img
          src={iconHeadphone}
          alt="icon"
          className={style.advantages__icon}
        />
				
        <p className={style.advantages__text}>Післягарантійне обслуговування</p>
      </li>
      <li className={style.advantages__item}>
        <img src={iconDiscount} alt="icon" className={style.advantages__icon} />
        <p className={style.advantages__text}>Знижки клієнтам</p>
      </li>
    </ul>
  );
};
