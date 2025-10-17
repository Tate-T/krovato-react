import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import styles from "./BasketModal.module.scss";
import { FaTimes, FaMinus, FaPlus } from 'react-icons/fa';

let openModalCallback = null;

export const openCartModal = () => {
  if (typeof openModalCallback === 'function') {
    openModalCallback();
  }
};

export const CartModal = forwardRef((props, ref) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from localStorage on initial render
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [isModalOpened, setIsModalOpened] = useState(false);

  // Expose methods to parent via ref
  useImperativeHandle(ref, () => ({
    openModal: () => setIsModalOpened(true),
    closeModal: () => setIsModalOpened(false)
  }));

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const openModal = () => setIsModalOpened(true);
  const closeModal = () => setIsModalOpened(false);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Cart item management functions
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const incrementQuantity = (id) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    );
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  useEffect(() => {
    openModalCallback = openModal;
    return () => {
      openModalCallback = null;
    };
  }, []);

  return (
    <div
      className={`${styles.backdrop} ${!isModalOpened ? styles.none : ''}`}
      onClick={handleBackdropClick}
    >
      <div className={`${styles.modal} ${!isModalOpened ? styles.none : ''}`} id="modal">
        <div className={styles.header}>
          Ваш кошик <span>{cartItems.length}</span>
          <button onClick={closeModal} className={styles.closeIcon}>
            <FaTimes />
          </button>
        </div>

        <div className={styles.cartContent}>
          {cartItems.length === 0 ? (
            <div className={styles.emptyCart}>
              <p>Ваш кошик порожній</p>
              <button className={`${styles.btn} ${styles.secondary}`} onClick={closeModal}>
                Продовжити покупки
              </button>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.product}>
                  <img src="/bed.jpg" alt="Ліжко" className={styles.productImage} />
                  <div className={styles.productInfo}>
                    <div className={styles.size}>Розмір: 61 x 184 x 2130 мм</div>
                    <h3 className={styles.title}>
                      Ліжко Спарта / Sparta з підйомним механізмом
                    </h3>
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
                      <button onClick={() => decrementQuantity(item.id)}>
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => incrementQuantity(item.id)}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                  <button 
                    className={styles.removeBtn}
                    onClick={() => removeItem(item.id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
              
              <div className={styles.total}>
                Загальна сума: <strong>{totalPrice.toLocaleString()} грн.</strong>
              </div>

              <button className={`${styles.btn} ${styles.primary}`}>
                ОФОРМИТИ ЗАМОВЛЕННЯ
              </button>
              <button className={`${styles.btn} ${styles.secondary}`} onClick={closeModal}>
                Продовжити покупки
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
});

CartModal.displayName = 'CartModal';