import style from "../../Price.module.scss";

export const PriceItem = ({ item }) => {
  return (
    <li className={style.price__item}>
      <p className={style.price__text2}>{item.name}</p>
      {item.price ? (
        <p className={style.price__price2}>{item.price}</p>
      ) : (
        <>
          <p className={style.price__text3}>{item.withElevator}</p>
          <p className={style.price__price2}>{item.withoutElevator}</p>
        </>
      )}
    </li>
  );
};
