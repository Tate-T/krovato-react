// import React from "react";
// import { Component } from "react";
// import styles from "./BasketModal.module.scss";
// import BasketList from '../../pages/Basket/BasketList'
// import { useState, useEffect } from 'react';
// import { FaTimes, FaMinus, FaPlus } from 'react-icons/fa';
// import styles from './BasketModal.module.scss';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, fetchCartItems, deleteFromCart, updateCartQuantity } from '../../redux/basketModal/basketModalSlice';
import styles from './BasketModal.module.scss';
import { FaTimes, FaMinus, FaPlus } from 'react-icons/fa';

export const CartModal = () => {
  const dispatch = useDispatch();
  const { items, isModalOpened, isLoading } = useSelector((state) => state.cart);
  console.log(items)
  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) dispatch(closeModal());
  };

  const handleIncrease = (item) => {
    dispatch(updateCartQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1)
      dispatch(updateCartQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleRemove = (id) => {
    dispatch(deleteFromCart(id));
  };

  if (!isModalOpened) return null;

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <div className={styles.header}>
          Ваш кошик <span>{items.length}</span>
          <button onClick={() => dispatch(closeModal())} className={styles.closeIcon}>
            <FaTimes />
          </button>
        </div>

        {isLoading ? (
          <p className={styles.loading}>Завантаження...</p>
        ) : (
          items.map((item) => (
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
                  <button onClick={() => handleDecrease(item)}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item)}>
                    <FaPlus />
                  </button>
                </div>
              </div>
              <button className={styles.removeBtn} onClick={() => handleRemove(item.id)}>
                <FaTimes />
              </button>
            </div>
          ))
        )}

        <button className={`${styles.btn} ${styles.primary}`}>
          ОФОРМИТИ ЗАМОВЛЕННЯ
        </button>
        <button
          className={`${styles.btn} ${styles.secondary}`}
          onClick={() => dispatch(closeModal())}
        >
          Продовжити покупки
        </button>
      </div>
    </div>
  );
};


// let openModalCallback = null;

// export const openCartModal = () => {
//   if (typeof openModalCallback === 'function') {
//     openModalCallback();
//   }
// };

// export const CartModal = () => {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, quantity: 1, price: 15400, oldPrice: 25400 },
//     { id: 2, quantity: 2, price: 15400 },
//     { id: 3, quantity: 1, price: 15400 },
//   ]);
//   const [isModalOpened, setIsModalOpened] = useState(false);

//   const openModal = () => setIsModalOpened(true);
//   const closeModal = () => setIsModalOpened(false);

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       closeModal();
//     }
//   };

//   useEffect(() => {
//     openModalCallback = openModal;
//     return () => {
//       openModalCallback = null;
//     };
//   }, []);

//   return (
//     <div
//       className={`${styles.backdrop} ${!isModalOpened ? styles.none : ''}`}
//       onClick={handleBackdropClick}
//     >
//       <div className={`${styles.modal} ${!isModalOpened ? styles.none : ''}`} id="modal">
//         <div className={styles.header}>
//           Ваш кошик <span>{cartItems.length}</span>
//           <button onClick={closeModal} className={styles.closeIcon}>
//             <FaTimes />
//           </button>
//         </div>

//         {cartItems.map((item) => (
//           <div key={item.id} className={styles.product}>
//             <img src="/bed.jpg" alt="Ліжко" className={styles.productImage} />
//             <div className={styles.productInfo}>
//               <div className={styles.size}>Розмір: 61 x 184 x 2130 мм</div>
//               <h3 className={styles.title}>
//                 Ліжко Спарта / Sparta з підйомним механізмом
//               </h3>
//               <div className={styles.inStock}>✔ В наявності</div>
//               <div className={styles.price}>
//                 {item.price.toLocaleString()} грн.
//                 {item.oldPrice && (
//                   <span className={styles.oldPrice}>
//                     {item.oldPrice.toLocaleString()} грн.
//                   </span>
//                 )}
//               </div>
//               <div className={styles.quantity}>
//                 <button>
//                   <FaMinus />
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button>
//                   <FaPlus />
//                 </button>
//               </div>
//             </div>
//             <button className={styles.removeBtn}>
//               <FaTimes />
//             </button>
//           </div>
//         ))}

//         <button className={`${styles.btn} ${styles.primary}`}>
//           ОФОРМИТИ ЗАМОВЛЕННЯ
//         </button>
//         <button className={`${styles.btn} ${styles.secondary}`} onClick={closeModal}>
//           Продовжити покупки
//         </button>
//       </div>
//     </div>
//   );
// };

// export const CartModal = () => {
//   const [isShow, setIsShow] = useState(true)
//   const [itemsCart, setItemsCart] = useState(() => {
//     const savedItems = localStorage.getItem("savedTestItems")
//     return savedItems ?
//   })
//   const onClose = () => {
//     setIsShow(false)
//   }
//   if (!isShow) return null;
  

//   return (
//     <div className={styles.backdrop}>
//       <div className={styles.modal}>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   )
// }

// let modalInstance = null;

// export class CartModal extends Component {
//   state = {
//     cartItems: [
//       { id: 1, quantity: 1, price: 15400, oldPrice: 25400 },
//       { id: 2, quantity: 2, price: 15400 },
//       { id: 3, quantity: 1, price: 15400 },
//     ],
//     isModalOpened: false
//   };

//   componentDidMount() {
//     modalInstance = this;
//   }
  
//   onClose = () => {
//     this.setState({ isModalOpened: false });
//   };

//   onBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       this.onClose();
//     }
//   };

//   static openModal = () => {
//       modalInstance.setState({ isModalOpened: true });
//   };

//   render() {
//     const { cartItems, isModalOpened } = this.state;
    
//     return (
//       <div 
//         className={`${styles.backdrop} ${!isModalOpened ? styles.none : ''}`}
//         onClick={this.onBackdropClick}
//       >
//         <div className={`${styles.modal} ${!isModalOpened ? styles.none : ''}`} id="modal">
//           <div className={styles.header}>
//             Ваш кошик <span>{cartItems.length}</span>
//             <button onClick={this.onClose} className={styles.closeIcon}>
//               <FaTimes />
//             </button>
//           </div>

//           {cartItems.map((item) => (
//             <div key={item.id} className={styles.product}>
//               <img src="/bed.jpg" alt="Ліжко" className={styles.productImage} />
//               <div className={styles.productInfo}>
//                 <div className={styles.size}>Розмір: 61 x 184 x 2130 мм</div>
//                 <h3 className={styles.title}>
//                   Ліжко Спарта / Sparta з підйомним механізмом
//                 </h3>
//                 <div className={styles.inStock}>✔ В наявності</div>
//                 <div className={styles.price}>
//                   {item.price.toLocaleString()} грн.
//                   {item.oldPrice && (
//                     <span className={styles.oldPrice}>
//                       {item.oldPrice.toLocaleString()} грн.
//                     </span>
//                   )}
//                 </div>
//                 <div className={styles.quantity}>
//                   <button>
//                     <FaMinus />
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button>
//                     <FaPlus />
//                   </button>
//                 </div>
//               </div>
//               <button className={styles.removeBtn}>
//                 <FaTimes />
//               </button>
//             </div>
//           ))}

//           <button className={`${styles.btn} ${styles.primary}`}>
//             ОФОРМИТИ ЗАМОВЛЕННЯ
//           </button>
//           <button className={`${styles.btn} ${styles.secondary}`} onClick={this.onClose}>
//             Продовжити покупки
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
