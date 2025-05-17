import { Component } from "react";
import r from "./r.module.scss";
import { IoChatbubblesOutline, IoThumbsUpOutline, IoPersonOutline, IoCloseOutline } from "react-icons/io5";
import reviewsData from "./r.json";

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: reviewsData, // Используем данные из JSON
      newReply: "",
      replyName: "",
      likes: reviewsData.map(reviewItem => reviewItem.likes), // Получаем лайки из базы данных
      liked: Array(reviewsData.length).fill(false), // Массив для отслеживания, лайкнуто ли
      showModal: false,
      currentReviewIndex: null,
    };
  }

  handleReplyChange = (e) => {
    this.setState({ newReply: e.target.value });
  };

  handleNameChange = (e) => {
    this.setState({ replyName: e.target.value });
  };

  handleReplySubmit = () => {
    const { review, newReply, replyName, currentReviewIndex } = this.state;
    if (newReply.trim() && replyName.trim()) {
      const updatedReview = [...review];
      updatedReview[currentReviewIndex].replies.push({
        username: replyName,
        text: newReply,
        date: new Date().toLocaleString(),
      });
      this.setState({ 
        review: updatedReview, 
        newReply: "", 
        replyName: "", 
        showModal: false, 
        currentReviewIndex: null 
      });
    }
  };

  handleLike = (reviewIndex) => {
    this.setState((prevState) => {
      const newLikes = [...prevState.likes];
      const newLiked = [...prevState.liked];
      if (!newLiked[reviewIndex]) { // Проверяем, был ли лайк
        newLikes[reviewIndex] += 1; // Добавляем лайк
        newLiked[reviewIndex] = true; // Устанавливаем, что лайк был добавлен
      }
      return { likes: newLikes, liked: newLiked };
    });
  };

  openModal = (index) => {
    this.setState({ showModal: true, currentReviewIndex: index });
  };

  closeModal = () => {
    this.setState({ showModal: false, newReply: "", replyName: "", currentReviewIndex: null });
  };

  render() {
    const { review, newReply, replyName, likes, showModal } = this.state;
    return (
      <div className={r.rev}>
        {review.map((reviewItem, index) => (
          <div key={index} className={r.review}>
            <div className={r.usernameLine}>
              <IoPersonOutline className={r.userIcon} />
              <h3>{reviewItem.username}</h3>
              <span>{new Date(reviewItem.date).toLocaleDateString("ru-RU")}</span>
              <span>{"★".repeat(reviewItem.stars)}</span>
            </div>
            <p>{reviewItem.text}</p>
            <div className={r.replySection}>
              <button className={r.replyButton} onClick={() => this.openModal(index)}>
                <IoChatbubblesOutline className={r.replyIcon} />Ответить
              </button>
              {index === 0 && <span className={r.also}>А также</span>}
            </div>
            <div className={r.likesSection}>
              <button className={r.likeButton} onClick={() => this.handleLike(index)}>
                <IoThumbsUpOutline className={r.likeIcon} />Нравится ({likes[index]})
              </button>
              <span>{reviewItem.replies.length} ответов</span>
              {reviewItem.replies.map((reply, replyIndex) => (
                <div key={replyIndex} className={r.reply}>
                  <strong>{reply.username}</strong>: {reply.text} <span>{reply.date}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {showModal && (
          <div className={r.modalOverlay}>
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
              <button className={r.submitButton} onClick={this.handleReplySubmit}>
                Отправить
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Review;