import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styleFavorite from "./Favorite.module.scss"; 
import { deleteFavoriteProductThunk } from "../../thunk/deleteFavoriteProductThank";
import { FavoriteItem } from "./FavoriteItem";
import { getFavoriteThunk } from "../../thunk/getFivoriteThunk";
const Favorite = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.favorite.favoriteProducts);

  useEffect(() => {
    dispatch(getFavoriteThunk())
  },[])
  const idToDelete = (id) => {
    dispatch(deleteFavoriteProductThunk(id))
    .then(() => {
      dispatch(getFavoriteThunk());
    });
  }
  if (!isOpen) return null;

  return (
    <div className={styleFavorite.background}>
      <div className={styleFavorite.Favorite}>
      <button className={styleFavorite.closeBtn} onClick={onClose}>
        &#10005;
      </button>
      {products.length == 0 ? (
        <p>немає вибраних товарів</p>
      ) : (
        <ul className={styleFavorite.containerFavouriteList}>
          {products.map(item => (
          <FavoriteItem product={item} deleteId={idToDelete}/>
        ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default Favorite;
