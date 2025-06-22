import styleProduct from "../Main/Products/Products.module.scss";
import { useState, useEffect } from "react";
import { FavoriteItem } from "./FavoriteItem";
import styleFavorite from './Favorite.module.scss'

const Favorite = ({ isOpen, onClose }) => {
  const [products, setProducts] = useState([]);

  // Инициализация товаров при первом рендере, если модалка сразу открыта
  useEffect(() => {
    if (isOpen) {
      const currentProducts = JSON.parse(localStorage.getItem("activeProducts")) || [];
      setProducts(currentProducts);
    }
  }, []);

  // Загружаем товары из localStorage при каждом открытии модалки
  useEffect(() => {
    if (isOpen) {
      const currentProducts = JSON.parse(localStorage.getItem("activeProducts")) || [];
      setProducts(currentProducts);
    }
  }, [isOpen]);

  // Слушаем изменения localStorage (например, из других вкладок или компонентов)
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

  // Удаление товара из избранного
  const removeFromFavorite = (id) => {
    const updatedProducts = products.filter(item => item.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("activeProducts", JSON.stringify(updatedProducts));
    window.dispatchEvent(new Event('storage'));
  };

  if (!isOpen) return null;

  if (!products || products.length === 0) {
    return (
      <div className={styleFavorite.Favorite}>
        <button className={styleFavorite.closeBtn} onClick={onClose}>&#10005;</button>
        Нет избранных товаров
      </div>
    );
  }

  return (
    <div className={styleFavorite.Favorite}>
      <button className={styleFavorite.closeBtn} onClick={onClose}>&#10005;</button>
      <ul style={{ width: '100%' }}>
        {products.map((item, idx) => (
          <li key={item.id || idx} style={{ position: 'relative' }}>
            <FavoriteItem product={item} />
            <button
              style={{
                position: 'absolute',
                top: 5,
                right: 5,
                background: '#fff',
                border: '1px solid #ccc',
                borderRadius: '50%',
                width: 28,
                height: 28,
                cursor: 'pointer',
                color: '#888',
                fontSize: 18,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title="Удалить из избранного"
              onClick={() => removeFromFavorite(item.id)}
            >
              &#10005;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
