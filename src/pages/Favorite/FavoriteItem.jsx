import style from "./Favorite.module.scss";

export const FavoriteItem = ({ product }) => {
  return (
    <li className={style.Item}>
      <img
        src={product.image.src}
        alt={product.image.alt}
        className={style.Item_image}
      />
      <h5>{product.title}</h5>
      <p>{product.price}</p>
    </li>
  );
};