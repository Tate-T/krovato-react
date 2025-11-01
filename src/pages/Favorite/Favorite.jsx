// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeFavorite } from "../features/favorite/favoriteSlice";
// import styleFavorite from "./Favorite.module.css"; // твій CSS модуль

const Favorite = ({ isOpen, onClose }) => {
//   const dispatch = useDispatch();
//   const products = useSelector(state => state.favorite.products);

//   if (!isOpen) return null;

//   return (
//     <div className={styleFavorite.Favorite}>
//       <button className={styleFavorite.closeBtn} onClick={onClose}>
//         &#10005;
//       </button>
//       {products.length === 0 ? (
//         <p>немає вибраних товарів</p>
//       ) : (
//         products.map(item => (
//           <div key={item.id} className={styleFavorite.item}>
//             <span>{item.name}</span>
//             <button onClick={() => dispatch(removeFavorite(item.id))}>Видалити</button>
//           </div>
//         ))
//       )}
//     </div>
//   );
};

export default Favorite;
