import React from 'react';
import styles from './BasketModal.module.scss';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';

const CartModal = ({ onClose }) => {
  const cartItems = [
    { id: 1, quantity: 1, price: 15400, oldPrice: 25400 },
    { id: 2, quantity: 2, price: 15400 },
    { id: 3, quantity: 1, price: 15400 },
  ];

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          Ваш кошик <span>{cartItems.length}</span>
          <FaTimes onClick={onClose} className={styles.closeIcon} />
        </div>

        {cartItems.map(item => (
          <div key={item.id} className={styles.product}>
            <img src="/bed.jpg" alt="Ліжко" className={styles.productImage} />
            <div className={styles.productInfo}>
              <div className={styles.size}>Розмір: 61 x 184 x 2130 мм</div>
              <h3 className={styles.title}>Ліжко Спарта / Sparta з підйомним механізмом</h3>
              <div className={styles.inStock}>✔ В наявності</div>
              <div className={styles.price}>
                {item.price.toLocaleString()} грн.
                {item.oldPrice && (
                  <span className={styles.oldPrice}>
                    {item.oldPrice.toLocaleString()} грн.
                  </span>
                )}
              </div>
              <div className={styles.quantity}>
                <button><FaMinus /></button>
                <span>{item.quantity}</span>
                <button><FaPlus /></button>
              </div>
            </div>
            <button className={styles.removeBtn}><FaTimes /></button>
          </div>
        ))}

        <button className={`${styles.btn} ${styles.primary}`}>ОФОРМИТИ ЗАМОВЛЕННЯ</button>
        <button className={`${styles.btn} ${styles.secondary}`}>Продовжити покупки</button>
      </div>
    </div>
  );
};

export default CartModal;