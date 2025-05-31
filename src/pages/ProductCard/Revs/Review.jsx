import { Component } from "react";
import r from "./r.module.scss";
import {
  IoChatbubblesOutline,
  IoPersonOutline,
  IoCloseOutline,
  IoAddOutline,
} from "react-icons/io5";
import { BiLike } from "react-icons/bi";

const API_URL = 'https://683491c1464b499636035baf.mockapi.io/api/revs/revs'; // Я знаю что запалил апи, и что на работе за такое дадут по шапке, но проект учебный и никому моя апишка не сделась

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: [],
      newReply: "",
      replyName: "",
      likes: [],
      liked: [],
      showModal: false,
      currentReviewIndex: null,
      loading: true,
      error: null,
      showNewReviewForm: false,
      newReview: {
        username: "",
        text: "",
        likes: 0,
        replies: []
      },
      page: 1,
      limit: 10,
      hasMore: true
    };
  }

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = async (loadMore = false) => {
    try {
      // console.log('Начинаем загрузку отзывов...');
      const { page, limit } = this.state;
      const response = await fetch(`${API_URL}?page=${page}&limit=${limit}`);
      // console.log('Получен ответ:', response.status);
      
      if (!response.ok) {
        throw new Error(`Ошибка при загрузке отзывов: ${response.status}`);
      }
      
      const data = await response.json();
      // console.log('Получены данные:', data);
      
      if (!Array.isArray(data)) {
        throw new Error('Полученные данные не являются массивом');
      }

      const sortedData = data.sort((a, b) => {
        const dateA = typeof a.date === 'string' ? new Date(a.date).getTime() : a.date * 1000;
        const dateB = typeof b.date === 'string' ? new Date(b.date).getTime() : b.date * 1000;
        return dateB - dateA;
      });

      this.setState(prevState => ({
        review: loadMore ? [...prevState.review, ...sortedData] : sortedData,
        likes: loadMore ? [...prevState.likes, ...sortedData.map(review => review.likes || 0)] : sortedData.map(review => review.likes || 0),
        liked: loadMore ? [...prevState.liked, ...Array(sortedData.length).fill(false)] : Array(sortedData.length).fill(false),
        loading: false,
        error: null,
        hasMore: data.length === limit
      }));
    } catch (error) {
      console.error('Ошибка при загрузке отзывов:', error);
      this.setState({
        error: error.message,
        loading: false
      });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }), () => {
      this.fetchReviews(true);
    });
  };

  handleReplyChange = (e) => {
    this.setState({ newReply: e.target.value });
  };

  handleNameChange = (e) => {
    this.setState({ replyName: e.target.value });
  };

  handleReplySubmit = async () => {
    const { review, newReply, replyName, currentReviewIndex } = this.state;
    if (newReply.trim() && replyName.trim()) {
      try {
        const updatedReview = [...review];
        const reply = {
          username: replyName,
          text: newReply,
          date: new Date().toISOString()
        };
        
        updatedReview[currentReviewIndex].replies.push(reply);
        
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

        this.setState({
          review: updatedReview,
          newReply: "",
          replyName: "",
          showModal: false,
          currentReviewIndex: null,
        });
      } catch (error) {
        console.error('Ошибка при отправке ответа:', error);
      }
    }
  };

  handleLike = async (reviewIndex) => {
    const { review, likes, liked } = this.state;
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

        this.setState({ likes: newLikes, liked: newLiked });
      } catch (error) {
        console.error('Ошибка при обновлении лайков:', error);
      }
    }
  };

  openModal = (index) => {
    this.setState({ showModal: true, currentReviewIndex: index });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      newReply: "",
      replyName: "",
      currentReviewIndex: null,
    });
  };

  handleNewReviewChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      newReview: {
        ...prevState.newReview,
        [name]: value
      }
    }));
  };

  handleNewReviewSubmit = async (e) => {
    e.preventDefault();
    const { newReview } = this.state;
    
    try {
      const currentDate = Math.floor(Date.now() / 1000);
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newReview,
          date: currentDate
        })
      });

      if (!response.ok) {
        throw new Error('Ошибка при создании отзыва');
      }

      const createdReview = await response.json();
      
      this.setState(prevState => ({
        review: [createdReview, ...prevState.review],
        likes: [0, ...prevState.likes],
        liked: [false, ...prevState.liked],
        showNewReviewForm: false,
        newReview: {
          username: "",
          text: "",
          likes: 0,
          replies: []
        }
      }));
    } catch (error) {
      console.error('Ошибка при создании отзыва:', error);
    }
  };

  toggleNewReviewForm = () => {
    this.setState(prevState => ({
      showNewReviewForm: !prevState.showNewReviewForm
    }));
  };

  render() {
    const {
      review,
      newReply,
      replyName,
      likes,
      showModal,
      currentReviewIndex,
      loading,
      error,
      showNewReviewForm,
      newReview,
      hasMore
    } = this.state;

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
            onClick={() => this.fetchReviews()}
          >
            Попробовать снова
          </button>
        </div>
      );
    }

    return (
      <div className={r.rev}>
        <button 
          className={r.newReviewButton}
          onClick={this.toggleNewReviewForm}
        >
          <IoAddOutline className={r.buttonIcon} />
          Написать отзыв
        </button>

        {showNewReviewForm && (
          <div className={r.newReviewForm}>
            <h3>Новый отзыв</h3>
            <form onSubmit={this.handleNewReviewSubmit}>
              <input
                type="text"
                name="username"
                value={newReview.username}
                onChange={this.handleNewReviewChange}
                placeholder="Ваше имя"
                required
                className={r.modalInput}
              />
              <textarea
                name="text"
                value={newReview.text}
                onChange={this.handleNewReviewChange}
                placeholder="Ваш отзыв..."
                required
                className={r.modalTextarea}
              />
              <div className={r.formButtons}>
                <button type="submit" className={r.submitButton}>
                  Отправить
                </button>
                <button
                  type="button"
                  onClick={this.toggleNewReviewForm}
                  className={r.cancelButton}
                >
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
                onClick={() => this.openModal(index)}
              >
                <IoChatbubblesOutline className={r.replyIcon} />
                Ответить
              </button>
              <button
                className={r.likeButton}
                onClick={() => this.handleLike(index)}
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
                  <button className={r.closeButton} onClick={this.closeModal}>
                    <IoCloseOutline />
                  </button>
                  <h3>Добавить ответ</h3>
                  <input
                    type="text"
                    value={replyName}
                    onChange={this.handleNameChange}
                    placeholder="Ваше имя"
                    className={r.modalInput}
                  />
                  <textarea
                    value={newReply}
                    onChange={this.handleReplyChange}
                    placeholder="Ваш ответ..."
                    className={r.modalTextarea}
                  />
                  <button
                    className={r.submitButton}
                    onClick={this.handleReplySubmit}
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
            onClick={this.loadMore}
            disabled={loading}
          >
            {loading ? 'Загрузка...' : 'Загрузить еще'}
          </button>
        )}
      </div>
    );
  }
}

export default Review;
