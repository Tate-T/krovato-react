import { useState } from 'react';
import styles from './Modal.module.scss';

export const Modal = ({ isOpen, onClose, onSubmit }) => {
  console.log('Modal rendered with isOpen:', isOpen);

  const [reviewData, setReviewData] = useState({
    name: '',
    product: '',
    text: '',
    rating: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setReviewData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewData.name && reviewData.product && reviewData.text && reviewData.rating > 0) {
      onSubmit(reviewData);
      setReviewData({
        name: '',
        product: '',
        text: '',
        rating: 0
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="#535353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2>Написати відгук</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Ваше ім'я</label>
            <input
              type="text"
              id="name"
              name="name"
              value={reviewData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="product">Назва товару</label>
            <input
              type="text"
              id="product"
              name="product"
              value={reviewData.product}
              onChange={handleInputChange}
              required
              maxLength={15}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="text">Ваш відгук</label>
            <textarea
              id="text"
              name="text"
              value={reviewData.text}
              onChange={handleInputChange}
              required
              maxLength={200}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Оцінка</label>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={styles.starButton}
                  onClick={() => handleRatingChange(star)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={star <= reviewData.rating ? "#FFBC57" : "#E0E0E0"}
                  >
                    <path d="M22 10.0999C22.1 9.59994 21.7 8.99994 21.2 8.99994L15.5 8.19994L12.9 2.99994C12.8 2.79994 12.7 2.69994 12.5 2.59994C12 2.29994 11.4 2.49994 11.1 2.99994L8.6 8.19994L2.9 8.99994C2.6 8.99994 2.4 9.09994 2.3 9.29994C1.9 9.69994 1.9 10.2999 2.3 10.6999L6.4 14.6999L5.4 20.3999C5.4 20.5999 5.4 20.7999 5.5 20.9999C5.8 21.4999 6.4 21.6999 6.9 21.3999L12 18.6999L17.1 21.3999C17.2 21.4999 17.4 21.4999 17.6 21.4999C17.7 21.4999 17.7 21.4999 17.8 21.4999C18.3 21.3999 18.7 20.8999 18.6 20.2999L17.6 14.5999L21.7 10.5999C21.9 10.4999 22 10.2999 22 10.0999Z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
          <button type="submit" className={styles.submitButton}>
            Надіслати відгук
          </button>
        </form>
      </div>
    </div>
  );
}; 