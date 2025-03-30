import style from "../../Price.module.scss";

export const PriceItem = ({ item }) => {
  return (
    <li className={style.price__item}>
      <p className={style.price__text}>{item.name}</p>
      {item.price ? (
        <p className={style.price__price}>{item.price}</p>
      ) : (
        <>
          <p className={style.price__free}>{item.withElevator}</p>
          <p className={style.price__price}>{item.withoutElevator}</p>
        </>
      )}
    </li>
  );
};
