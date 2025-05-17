import React, { useState, useEffect } from 'react';
import styles from './r.module.scss';

const Review = ({ reviews }) => {
  const [reviewsList, setReviewsList] = useState(reviews || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [likedReviews, setLikedReviews] = useState(() => {
    const saved = localStorage.getItem('likedReviews');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('likedReviews', JSON.stringify(likedReviews));
  }, [likedReviews]);

  const handleReply = (review) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const handleLike = (reviewIndex) => {
    if (likedReviews.includes(reviewIndex)) {
      return; // Если отзыв уже лайкнут, ничего не делаем
    }

    setReviewsList(prevReviews => {
      const newReviews = [...prevReviews];
      newReviews[reviewIndex] = {
        ...newReviews[reviewIndex],
        likes: (newReviews[reviewIndex].likes || 0) + 1
      };
      return newReviews;
    });

    setLikedReviews(prev => [...prev, reviewIndex]);
  };

  const handleSubmitReply = () => {
    if (!replyText.trim() || !selectedReview) return;

    const newReply = {
      username: 'Магазин',
      text: replyText,
      date: new Date().toISOString().split('T')[0]
    };

    setReviewsList(prevReviews => {
      return prevReviews.map(review => {
        if (review === selectedReview) {
          return {
            ...review,
            replies: [...(review.replies || []), newReply]
          };
        }
        return review;
      });
    });

    setReplyText('');
    setIsModalOpen(false);
    setSelectedReview(null);
  };

  if (!reviewsList.length) {
    return (
      <div className={styles.rev}>
        <p>Пока нет отзывов</p>
      </div>
    );
  }

  return (
    <div className={styles.rev}>
      {reviewsList.map((review, index) => (
        <div key={index} className={styles.review}>
          <div className={styles.usernameLine}>
            <span className={styles.userIcon}>👤</span>
            <h3>{review.username}</h3>
            <span>{review.date}</span>
            <span>★ {review.stars}</span>
          </div>
          <p>{review.text}</p>
          
          <div className={styles.replySection}>
            <button 
              className={styles.replyButton}
              onClick={() => handleReply(review)}
            >
              <span className={styles.replyIcon}>↩</span>
              Ответить
            </button>
            <span className={styles.also}>
              {review.replies?.length ? `Ещё ${review.replies.length} ответов` : ''}
            </span>
          </div>

          {review.replies?.map((reply, replyIndex) => (
            <div key={replyIndex} className={styles.reply}>
              <strong>{reply.username}</strong>
              {reply.text}
              <span>{reply.date}</span>
            </div>
          ))}

          <div className={styles.likesSection}>
            <button 
              className={`${styles.likeButton} ${likedReviews.includes(index) ? styles.liked : ''}`}
              onClick={() => handleLike(index)}
              disabled={likedReviews.includes(index)}
            >
              <span className={styles.likeIcon}>❤</span>
              {likedReviews.includes(index) ? 'Понравилось' : 'Нравится'}
            </button>
            <span>{review.likes || 0} людям понравилось</span>
          </div>
        </div>
      ))}

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button 
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <h3>Ответить на отзыв</h3>
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Введите ваш ответ..."
              className={styles.replyTextarea}
            />
            <button 
              className={styles.submitButton}
              onClick={handleSubmitReply}
            >
              Отправить
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;