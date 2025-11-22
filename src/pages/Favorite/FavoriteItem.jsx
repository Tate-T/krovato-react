import style from "./Favorite.module.scss";
import styleFavorite from "./Favorite.module.scss"; 
export const FavoriteItem = ({ product,deleteId }) => {
  return (
    <li className={style.Item}>
      <img
        src={product.imageSrc}
        alt={product.alt}
        className={style.Item_image}
      />
      <h5>{product.title}</h5>
      <p>{product.price} грн</p>
      <button onClick={() => deleteId(product.id)} className={styleFavorite.DeleteItem}>&#10005;</button>
    </li>
  );
};