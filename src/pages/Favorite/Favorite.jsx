import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styleFavorite from "./Favorite.module.scss"; 
import { deleteFavoriteProductThunk } from "../../thunk/deleteFavoriteProductThank";
const Favorite = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.favorite.products);

  if (!isOpen) return null;

  return (
    <div className={styleFavorite.Favorite}>
      <button className={styleFavorite.closeBtn} onClick={onClose}>
        &#10005;
      </button>
      {products.length === 0 ? (
        <p>немає вибраних товарів</p>
      ) : (
        products.map(item => (
          <div key={item.id} className={styleFavorite.item}>
            <span>{item.name}</span>
            <button onClick={() => dispatch(deleteFavoriteProductThunk(item.id))}>Видалити</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorite;
