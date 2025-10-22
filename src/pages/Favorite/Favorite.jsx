import React, { useState, useEffect } from "react";
import { FavoriteItem } from "./FavoriteItem";
import style from './Favorite.module.scss';

const Favorite = ({ isOpen, onClose }) => {
  const [products, setProducts] = useState([]);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const currentProducts = JSON.parse(localStorage.getItem("activeProducts")) || [];
      setProducts(currentProducts);
      setIsClosing(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key === "activeProducts") {
        const newProducts = JSON.parse(event.newValue) || [];
        setProducts(newProducts);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const removeFromFavorite = (id) => {
    const updatedProducts = products.filter(item => item.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("activeProducts", JSON.stringify(updatedProducts));
    window.dispatchEvent(new Event('storage'));
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div className={`${style.favorite} ${isClosing ? style.closing : ''}`}>
      <div className={style.favorite_header}>
        <h2 className={style.favorite_title}>
          <span className={style.heart_icon}>❤️</span>
          Обране
          <span className={style.items_count}>({products.length})</span>
        </h2>
        <button 
          className={style.close_btn}
          onClick={handleClose}
          aria-label="Close favorites"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div className={style.favorite_content}>
        {!products || products.length === 0 ? (
          <div className={style.empty_state}>
            <div className={style.empty_animation}>
              <div className={style.heart_container}>
                <div className={style.floating_heart}>🤍</div>
              </div>
            </div>
            <h3 className={style.empty_title}>Список обраного порожній</h3>
            <p className={style.empty_text}>
              Додавайте товари до обраного, натискаючи на сердечко ❤️
            </p>
            <button className={style.continue_shopping} onClick={handleClose}>
              Продовжити покупки
            </button>
          </div>
        ) : (
          <>
            <div className={style.products_list}>
              {products.map((item, idx) => (
                <div 
                  key={item.id || idx} 
                  className={style.product_item}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <FavoriteItem product={item} />
                  <button
                    className={style.remove_btn}
                    onClick={() => removeFromFavorite(item.id)}
                    aria-label="Remove from favorites"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <div className={style.item_overlay}></div>
                </div>
              ))}
            </div>
            
            <div className={style.favorite_actions}>
              <button className={style.clear_all_btn} onClick={() => {
                setProducts([]);
                localStorage.setItem("activeProducts", JSON.stringify([]));
              }}>
                Очистити все
              </button>
              <button className={style.continue_btn} onClick={handleClose}>
                Продовжити
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Favorite;