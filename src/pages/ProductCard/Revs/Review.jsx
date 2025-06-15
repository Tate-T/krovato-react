import { useEffect, useState } from "react";
import r from "./r.module.scss";
import {
  IoChatbubblesOutline,
  IoPersonOutline,
  IoCloseOutline,
  IoAddOutline,
} from "react-icons/io5";
import { BiLike } from "react-icons/bi";

const API_URL = "https://683491c1464b499636035baf.mockapi.io/api/revs/revs";

const Review = () => {
  const [review, setReview] = useState([]);
  const [newReply, setNewReply] = useState("");
  const [replyName, setReplyName] = useState("");
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showNewReviewForm, setShowNewReviewForm] = useState(false);
  const [newReviewUsername, setNewReviewUsername] = useState("");
  const [newReviewText, setNewReviewText] = useState("");
  const [newReviewLikes, setNewReviewLikes] = useState(0);
  const [newReviewReplies, setNewReviewReplies] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async (loadMore = false) => {
    try {
      const response = await fetch(`${API_URL}?page=${page}&limit=${limit}`);
      
      if (!response.ok) {
        throw new Error(`Ошибка при загрузке отзывов: ${response.status}`);
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error('Полученные данные не являются массивом');
      }

      const sortedData = data
        .map(review => ({
          ...review,
          timestamp: typeof review.date === 'string' ? new Date(review.date).getTime() : review.date * 1000
        }))
        .sort((a, b) => b.timestamp - a.timestamp);

      const sortedDataWithReplies = sortedData.map(review => ({
        ...review,
        replies: review.replies 
          ? review.replies
              .map(reply => ({
                ...reply,
                timestamp: new Date(reply.date).getTime()
              }))
              .sort((a, b) => b.timestamp - a.timestamp)
          : []
      }));

      setReview(prevReview => loadMore ? [...prevReview, ...sortedDataWithReplies] : sortedDataWithReplies);
      setLikes(prevLikes => loadMore ? [...prevLikes, ...sortedData.map(review => review.likes || 0)] : sortedData.map(review => review.likes || 0));
      setLiked(prevLiked => loadMore ? [...prevLiked, ...Array(sortedData.length).fill(false)] : Array(sortedData.length).fill(false));
      setLoading(false);
      setError(null);
      setHasMore(data.length === limit);
    } catch (error) {
      console.error('Ошибка при загрузке отзывов:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    fetchReviews(true);
  };

  const handleReplyChange = (e) => {
    setNewReply(e.target.value);
  };

  const handleNameChange = (e) => {
    setReplyName(e.target.value);
  };

  const handleReplySubmit = async () => {
    if (newReply.trim() && replyName.trim()) {
      try {
        const updatedReview = [...review];
        const reply = {
          username: replyName,
          text: newReply,
          date: new Date().toISOString(),
          timestamp: new Date().getTime()
        };

        updatedReview[currentReviewIndex].replies = [reply, ...(updatedReview[currentReviewIndex].replies || [])];

        const response = await fetch(`${API_URL}/${updatedReview[currentReviewIndex].id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedReview[currentReviewIndex])
        });

        if (!response.ok) {
          throw new Error('Ошибка при отправке ответа');
        }

        setReview(updatedReview);
        setNewReply("");
        setReplyName("");
        setShowModal(false);
        setCurrentReviewIndex(null);
      } catch (error) {
        console.error('Ошибка при отправке ответа:', error);
      }
    }
  };

  const handleLike = async (reviewIndex) => {
    if (!liked[reviewIndex]) {
      try {
        const newLikes = [...likes];
        const newLiked = [...liked];
        newLikes[reviewIndex] += 1;
        newLiked[reviewIndex] = true;

        const response = await fetch(`${API_URL}/${review[reviewIndex].id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...review[reviewIndex],
            likes: newLikes[reviewIndex]
          })
        });

        if (!response.ok) {
          throw new Error('Ошибка при обновлении лайков');
        }

        setLikes(newLikes);
        setLiked(newLiked);
      } catch (error) {
        console.error('Ошибка при обновлении лайков:', error);
      }
    }
  };

  const openModal = (index) => {
    setShowModal(true);
    setCurrentReviewIndex(index);
  };

  const closeModal = () => {
    setShowModal(false);
    setNewReply("");
    setReplyName("");
    setCurrentReviewIndex(null);
  };

  const handleNewReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const currentDate = Math.floor(Date.now() / 1000);
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: newReviewUsername,
          text: newReviewText,
          likes: newReviewLikes,
          replies: newReviewReplies,
          date: currentDate
        })
      });

      if (!response.ok) {
        throw new Error('Ошибка при создании отзыва');
      }

      const createdReview = await response.json();

      setReview(prevReview => [createdReview, ...prevReview]);
      setLikes(prevLikes => [0, ...prevLikes]);
      setLiked(prevLiked => [false, ...prevLiked]);
      setShowNewReviewForm(false);
      setNewReviewUsername("");
      setNewReviewText("");
      setNewReviewLikes(0);
      setNewReviewReplies([]);
    } catch (error) {
      console.error('Ошибка при создании отзыва:', error);
    }
  };

  const toggleNewReviewForm = () => {
    setShowNewReviewForm(prev => !prev);
  };

  if (loading && !review.length) {
    return (
      <div className={r.loading}>
        <div className={r.loadingSpinner}></div>
        Загрузка отзывов...
      </div>
    );
  }

  if (error && !review.length) {
    return (
      <div className={r.error}>
        <p>Ошибка при загрузке отзывов: {error}</p>
        <button
          className={r.retryButton}
          onClick={() => fetchReviews()}
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  return (
    <div className={r.rev}>
      <button className={r.newReviewButton} onClick={toggleNewReviewForm}>
        <IoAddOutline className={r.buttonIcon} />
        Написать отзыв
      </button>

      {showNewReviewForm && (
        <div className={r.newReviewForm}>
          <h3>Новый отзыв</h3>
          <form onSubmit={handleNewReviewSubmit}>
            <input
              type="text"
              value={newReviewUsername}
              onChange={(e) => setNewReviewUsername(e.target.value)}
              placeholder="Ваше имя"
              required
              className={r.modalInput}
            />
            <textarea
              value={newReviewText}
              onChange={(e) => setNewReviewText(e.target.value)}
              placeholder="Ваш отзыв..."
              required
              className={r.modalTextarea}
            />
            <div className={r.formButtons}>
              <button type="submit" className={r.submitButton}>
                Отправить
              </button>
              <button type="button" onClick={toggleNewReviewForm} className={r.cancelButton}>
                Отмена
              </button>
            </div>
          </form>
        </div>
      )}

      {review.map((reviewItem, index) => (
        <div key={reviewItem.id} className={r.review}>
          <div className={r.usernameLine}>
            <IoPersonOutline className={r.userIcon} />
            <h3>{reviewItem.username}</h3>
            <span>
              {new Date(reviewItem.date * 1000).toLocaleDateString("ru-RU")}
            </span>
          </div>
          <p>{reviewItem.text}</p>
          <div className={r.replySection}>
            <button
              className={r.replyButton}
              onClick={() => openModal(index)}
            >
              <IoChatbubblesOutline className={r.replyIcon} />
              Ответить
            </button>
            <button
              className={r.likeButton}
              onClick={() => handleLike(index)}
            >
              <BiLike className={r.likeIcon} />
              Нравится ({likes[index]})
            </button>
            <span>{reviewItem.replies?.length || 0} ответов</span>
            {index === 0 && <span className={r.also}>А также</span>}
          </div>
          <div className={r.likesSection}>
            {reviewItem.replies?.map((reply, replyIndex) => (
              <div key={replyIndex} className={r.reply}>
                <strong>{reply.username}</strong>: {reply.text}{" "}
                <span>{new Date(reply.date).toLocaleDateString("ru-RU")}</span>
              </div>
            ))}
            {showModal && currentReviewIndex === index && (
              <div className={r.modal}>
                <button className={r.closeButton} onClick={closeModal}>
                  <IoCloseOutline />
                </button>
                <h3>Добавить ответ</h3>
                <input
                  type="text"
                  value={replyName}
                  onChange={handleNameChange}
                  placeholder="Ваше имя"
                  className={r.modalInput}
                />
                <textarea
                  value={newReply}
                  onChange={handleReplyChange}
                  placeholder="Ваш ответ..."
                  className={r.modalTextarea}
                />
                <button
                  className={r.submitButton}
                  onClick={handleReplySubmit}
                >
                  Отправить
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      {hasMore && (
        <button
          className={r.loadMoreButton}
          onClick={() => loadMore()}
          disabled={loading}
        >
          {loading ? 'Загрузка...' : 'Загрузить еще'}
        </button>
      )}
    </div>
  );
};

export default Review;
