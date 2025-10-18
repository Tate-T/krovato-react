import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import styles from "./BasketModal.module.scss";
import { FaTimes, FaMinus, FaPlus, FaShoppingCart, FaTrash } from 'react-icons/fa';

// Global callback для відкриття модалки
let openModalCallback = null;

export const openCartModal = () => {
  if (typeof openModalCallback === 'function') {
    openModalCallback();
  }
};

// Функція для додавання товару в кошик
export const addToCart = (product) => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  
  const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
  
  if (existingItemIndex !== -1) {
    cartItems[existingItemIndex].quantity += 1;
  } else {
    cartItems.push({ 
      ...product, 
      quantity: 1,
      inStock: product.inStock !== false
    });
  }
  
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
  // Dispatch event
  window.dispatchEvent(new CustomEvent('cartUpdated', { 
    detail: { items: cartItems } 
  }));
  
  // Open modal
  openCartModal();
};

export const CartModal = forwardRef((props, ref) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [isModalOpened, setIsModalOpened] = useState(false);

  // Expose methods to parent
  useImperativeHandle(ref, () => ({
    openModal: () => setIsModalOpened(true),
    closeModal: () => setIsModalOpened(false),
    getCartItems: () => cartItems,
    getTotalPrice: () => totalPrice,
    getTotalItems: () => totalItems
  }));

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    window.dispatchEvent(new CustomEvent('cartUpdated', { 
      detail: { items: cartItems } 
    }));
  }, [cartItems]);

  // Set up global callback
  useEffect(() => {
    openModalCallback = () => setIsModalOpened(true);
    return () => {
      openModalCallback = null;
    };
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpened]);

  const closeModal = () => setIsModalOpened(false);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isModalOpened) {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpened]);

  // Cart management functions
  const incrementQuantity = (id) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems(prevItems => 
      prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity - 1;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    if (window.confirm('Ви впевнені, що хочете очистити кошик?')) {
      setCartItems([]);
    }
  };

  // Calculate totals
  const totalPrice = cartItems.reduce((total, item) => {
    let price = 0;
    if (typeof item.price === 'number') {
      price = item.price;
    } else if (typeof item.price === 'string') {
      price = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0;
    }
    return total + (price * item.quantity);
  }, 0);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleCheckout = () => {
    closeModal();
    window.location.href = '/basket';
  };

  if (!isModalOpened) return null;

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>
            Ваш кошик {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
          </h2>
          <button 
            onClick={closeModal} 
            className={styles.closeIcon}
            aria-label="Закрити"
          >
            <FaTimes />
          </button>
        </div>

        <div className={styles.cartContent}>
          {cartItems.length === 0 ? (
            <div className={styles.emptyCart}>
              <div className={styles.emptyCartIcon}>
                <FaShoppingCart size={80} />
              </div>
              <h3>Ваш кошик порожній</h3>
              <p>Додайте товари, щоб продовжити покупки</p>
              <button className={styles.btnSecondary} onClick={closeModal}>
                Продовжити покупки
              </button>
            </div>
          ) : (
            <>
              <div className={styles.cartItems}>
                {cartItems.map((item) => {
                  const itemPrice = typeof item.price === 'number' 
                    ? item.price 
                    : parseFloat(item.price?.replace(/[^\d.]/g, '')) || 0;
                  
                  const itemTotal = itemPrice * item.quantity;
                  
                  return (
                    <div key={item.id} className={styles.product}>
                      <div className={styles.productImage}>
                        <img 
                          src={item.image?.src || item.image || '/placeholder.jpg'} 
                          alt={item.alt || item.title} 
                          onError={(e) => {
                            e.target.src = '/placeholder.jpg';
                          }}
                        />
                      </div>
                      
                      <div className={styles.productInfo}>
                        <h3 className={styles.title}>{item.title}</h3>
                        
                        {item.size && (
                          <div className={styles.size}>
                            Розмір: <strong>{item.size}</strong>
                          </div>
                        )}
                        
                        <div className={styles.inStock}>
                          {item.inStock !== false 
                            ? <><span className={styles.checkmark}>✓</span> В наявності</> 
                            : <><span className={styles.clock}>⏱</span> Під замовлення</>
                          }
                        </div>
                        
                        <div className={styles.priceBlock}>
                          <div className={styles.price}>
                            {itemPrice.toLocaleString('uk-UA')} грн.
                          </div>
                          {item.oldPrice && (
                            <span className={styles.oldPrice}>
                              {typeof item.oldPrice === 'number'
                                ? `${item.oldPrice.toLocaleString('uk-UA')} грн.`
                                : item.oldPrice
                              }
                            </span>
                          )}
                        </div>
                        
                        <div className={styles.quantityBlock}>
                          <div className={styles.quantity}>
                            <button 
                              onClick={() => decrementQuantity(item.id)}
                              aria-label="Зменшити кількість"
                              disabled={item.quantity <= 1}
                            >
                              <FaMinus />
                            </button>
                            <span>{item.quantity}</span>
                            <button 
                              onClick={() => incrementQuantity(item.id)}
                              aria-label="Збільшити кількість"
                            >
                              <FaPlus />
                            </button>
                          </div>
                          <div className={styles.itemTotal}>
                            {itemTotal.toLocaleString('uk-UA')} грн.
                          </div>
                        </div>
                      </div>
                      
                      <button 
                        className={styles.removeBtn}
                        onClick={() => removeItem(item.id)}
                        aria-label="Видалити товар"
                        title="Видалити"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  );
                })}
              </div>
              
              {cartItems.length > 0 && (
                <button 
                  className={styles.clearCart}
                  onClick={clearCart}
                >
                  <FaTrash /> Очистити кошик
                </button>
              )}

              <div className={styles.totalSection}>
                <div className={styles.totalRow}>
                  <span>Товарів:</span>
                  <span>{totalItems} шт.</span>
                </div>
                <div className={styles.totalRow}>
                  <span>Загальна сума:</span>
                  <strong className={styles.totalPrice}>
                    {totalPrice.toLocaleString('uk-UA')} грн.
                  </strong>
                </div>
              </div>

              <div className={styles.actions}>
                <button 
                  className={styles.btnPrimary}
                  onClick={handleCheckout}
                >
                  ОФОРМИТИ ЗАМОВЛЕННЯ
                </button>
                <button 
                  className={styles.btnSecondary} 
                  onClick={closeModal}
                >
                  Продовжити покупки
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
});

CartModal.displayName = 'CartModal';

export default CartModal;