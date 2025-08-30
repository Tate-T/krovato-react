import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Modal } from "./Modal/Modal";

import style from "./LastReviews.module.scss";
import containerStyle from "../../components/Container/Container.module.scss";

import bedImg from "../../images/LastReviews/img-tovar@1x.png";
import bedImgTwo from "../../images/LastReviews/img-tovar@2x.png";
import "../../images/symbol-defs.svg";

export class LastReviews extends Component {
  state = {
    isModalOpen: false,
    reviews: [],
    sliderValue: 0,
    likedReviews: new Set(
      JSON.parse(localStorage.getItem("likedReviews") || "[]")
    ),
  };

  componentDidMount() {
    fetch("https://684032305b39a8039a572c19.mockapi.io/reviews")
      .then((res) => res.json())
      .then((data) => {
        const reviewsWithLikes = data.map((review) => ({
          ...review,
          likes: review.likes || 0,
        }));
        this.setState({ reviews: reviewsWithLikes });
      })
      .catch((err) => console.error("Помилка завантаження відгуків:", err));
  }

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleSubmitReview = (reviewData) => {
    const reviewWithDate = {
      ...reviewData,
      date: new Date().toISOString(),
    };

    fetch("https://684032305b39a8039a572c19.mockapi.io/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewWithDate),
    })
      .then((res) => res.json())
      .then((newReview) => {
        this.setState((prevState) => ({
          reviews: [newReview, ...prevState.reviews],
          isModalOpen: false,
        }));
      })
      .catch((err) => console.error("Помилка відправки відгуку:", err));
  };

  handleDeleteReview = (id) => {
    fetch(`https://684032305b39a8039a572c19.mockapi.io/reviews/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        this.setState((prevState) => ({
          reviews: prevState.reviews.filter((review) => review.id !== id),
        }));
      })
      .catch((err) => console.error("Помилка видалення відгуку:", err));
  }

  handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    this.setState({ sliderValue: value });
  };

  handleLike = (reviewId) => {
    const review = this.state.reviews.find((r) => r.id === reviewId);
    if (!review) return;

    const isLiked = this.state.likedReviews.has(reviewId);
    const newLikesCount = isLiked ? review.likes - 1 : review.likes + 1;

    this.setState((prevState) => {
      const likedReviews = new Set(prevState.likedReviews);
      if (isLiked) {
        likedReviews.delete(reviewId);
      } else {
        likedReviews.add(reviewId);
      }
      localStorage.setItem("likedReviews", JSON.stringify([...likedReviews]));

      return {
        likedReviews,
        reviews: prevState.reviews.map((r) =>
          r.id === reviewId ? { ...r, likes: newLikesCount } : r
        ),
      };
    });

    fetch(`https://684032305b39a8039a572c19.mockapi.io/reviews/${reviewId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...review,
        likes: newLikesCount,
      }),
    }).catch((err) => {
      console.error("Помилка оновлення лайків:", err);
      this.setState((prevState) => {
        const likedReviews = new Set(prevState.likedReviews);
        if (!isLiked) {
          likedReviews.delete(reviewId);
        } else {
          likedReviews.add(reviewId);
        }
        localStorage.setItem("likedReviews", JSON.stringify([...likedReviews]));

        return {
          likedReviews,
          reviews: prevState.reviews.map((r) =>
            r.id === reviewId ? { ...r, likes: review.likes } : r
          ),
        };
      });
    });
  };

  render() {
    const { isModalOpen, reviews, sliderValue, likedReviews } = this.state;
    return (
      <section className={style.reviews}>
        <div
          className={`${containerStyle.container} ${style.reviews__container}`}
        >
          <div className={style.reviews__containerReviews}>
            <div className={style.reviews__content}>
              <h3 className={style.reviews__title}>Останні відгуки</h3>
              <div className={style.reviews__logoSofa}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <g clipPath="url(#clip0_68_538)">
                    <circle cx="40" cy="40" r="40" fill="white" />
                    <path
                      d="M17.0153 35.1198V55.5059C17.0153 56.0618 16.6428 56.4325 16.0842 56.4325H12.3597C11.801 56.4325 11.4286 56.0618 11.4286 55.5059V35.1198C11.4286 34.5638 11.801 34.1931 12.3597 34.1931H16.0842C16.6428 34.1931 17.0153 34.6564 17.0153 35.1198ZM67.6403 34.1931H63.9159C63.3572 34.1931 62.9847 34.5638 62.9847 35.1198V55.5059C62.9847 56.0618 63.3572 56.4325 63.9159 56.4325H67.6403C68.199 56.4325 68.5714 56.0618 68.5714 55.5059V35.1198C68.5714 34.6564 68.199 34.1931 67.6403 34.1931Z"
                      fill="#FFBC57"
                    />
                    <path
                      d="M61.1226 40.6795V46.2394C61.1226 46.7954 60.7501 47.166 60.1915 47.166H19.8087C19.25 47.166 18.8776 46.7954 18.8776 46.2394V40.6795C18.8776 40.1236 19.25 39.7529 19.8087 39.7529H60.1915C60.7501 39.7529 61.1226 40.1236 61.1226 40.6795ZM19.8087 37.8996H30.7866C31.3453 37.8996 31.7177 37.529 31.7177 36.973V24.9266C31.7177 24.3707 31.3453 24 30.7866 24H19.8087C19.25 24 18.8776 24.3707 18.8776 24.9266V36.973C18.8776 37.529 19.25 37.8996 19.8087 37.8996ZM34.5111 37.8996H45.489C46.0477 37.8996 46.4202 37.529 46.4202 36.973V24.9266C46.4202 24.3707 46.0477 24 45.489 24H34.5111C33.9524 24 33.58 24.3707 33.58 24.9266V36.973C33.58 37.529 33.9524 37.8996 34.5111 37.8996ZM60.1915 24H49.2135C48.6548 24 48.2824 24.3707 48.2824 24.9266V36.973C48.2824 37.529 48.6548 37.8996 49.2135 37.8996H60.1915C60.7501 37.8996 61.1226 37.529 61.1226 36.973V24.9266C61.1226 24.3707 60.7501 24 60.1915 24ZM60.1915 49.0193H19.8087C19.25 49.0193 18.8776 49.39 18.8776 49.9459V55.5058C18.8776 56.0618 19.25 56.4324 19.8087 56.4324H25.1999C25.7586 56.4324 26.131 56.0618 26.131 55.5058V54.5791H53.8691V55.5058C53.8691 56.0618 54.2415 56.4324 54.8002 56.4324H60.1915C60.7501 56.4324 61.1226 56.0618 61.1226 55.5058V49.9459C61.1226 49.39 60.7501 49.0193 60.1915 49.0193Z"
                      fill="#FFBC57"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_68_538">
                      <rect width="80" height="80" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={style.reviews__info}>
                <h3 className={style.reviews__shop}>
                  Магазин меблів для дому «KROVATO»
                </h3>
                <div className={style.reviews__starsContainer}>
                  <ul className={style.reviews__stars}>
                    <p className={style.reviews__rate}>5.0</p>
                    <li className={style.reviews__star}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 10.0999C22.1 9.59994 21.7 8.99994 21.2 8.99994L15.5 8.19994L12.9 2.99994C12.8 2.79994 12.7 2.69994 12.5 2.59994C12 2.29994 11.4 2.49994 11.1 2.99994L8.6 8.19994L2.9 8.99994C2.6 8.99994 2.4 9.09994 2.3 9.29994C1.9 9.69994 1.9 10.2999 2.3 10.6999L6.4 14.6999L5.4 20.3999C5.4 20.5999 5.4 20.7999 5.5 20.9999C5.8 21.4999 6.4 21.6999 6.9 21.3999L12 18.6999L17.1 21.3999C17.2 21.4999 17.4 21.4999 17.6 21.4999C17.7 21.4999 17.7 21.4999 17.8 21.4999C18.3 21.3999 18.7 20.8999 18.6 20.2999L17.6 14.5999L21.7 10.5999C21.9 10.4999 22 10.2999 22 10.0999Z"
                          fill="#FFBC57"
                        />
                      </svg>
                    </li>
                    <li className={style.reviews__star}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 10.0999C22.1 9.59994 21.7 8.99994 21.2 8.99994L15.5 8.19994L12.9 2.99994C12.8 2.79994 12.7 2.69994 12.5 2.59994C12 2.29994 11.4 2.49994 11.1 2.99994L8.6 8.19994L2.9 8.99994C2.6 8.99994 2.4 9.09994 2.3 9.29994C1.9 9.69994 1.9 10.2999 2.3 10.6999L6.4 14.6999L5.4 20.3999C5.4 20.5999 5.4 20.7999 5.5 20.9999C5.8 21.4999 6.4 21.6999 6.9 21.3999L12 18.6999L17.1 21.3999C17.2 21.4999 17.4 21.4999 17.6 21.4999C17.7 21.4999 17.7 21.4999 17.8 21.4999C18.3 21.3999 18.7 20.8999 18.6 20.2999L17.6 14.5999L21.7 10.5999C21.9 10.4999 22 10.2999 22 10.0999Z"
                          fill="#FFBC57"
                        />
                      </svg>
                    </li>
                    <li className={style.reviews__star}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 10.0999C22.1 9.59994 21.7 8.99994 21.2 8.99994L15.5 8.19994L12.9 2.99994C12.8 2.79994 12.7 2.69994 12.5 2.59994C12 2.29994 11.4 2.49994 11.1 2.99994L8.6 8.19994L2.9 8.99994C2.6 8.99994 2.4 9.09994 2.3 9.29994C1.9 9.69994 1.9 10.2999 2.3 10.6999L6.4 14.6999L5.4 20.3999C5.4 20.5999 5.4 20.7999 5.5 20.9999C5.8 21.4999 6.4 21.6999 6.9 21.3999L12 18.6999L17.1 21.3999C17.2 21.4999 17.4 21.4999 17.6 21.4999C17.7 21.4999 17.7 21.4999 17.8 21.4999C18.3 21.3999 18.7 20.8999 18.6 20.2999L17.6 14.5999L21.7 10.5999C21.9 10.4999 22 10.2999 22 10.0999Z"
                          fill="#FFBC57"
                        />
                      </svg>
                    </li>
                    <li className={style.reviews__star}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 10.0999C22.1 9.59994 21.7 8.99994 21.2 8.99994L15.5 8.19994L12.9 2.99994C12.8 2.79994 12.7 2.69994 12.5 2.59994C12 2.29994 11.4 2.49994 11.1 2.99994L8.6 8.19994L2.9 8.99994C2.6 8.99994 2.4 9.09994 2.3 9.29994C1.9 9.69994 1.9 10.2999 2.3 10.6999L6.4 14.6999L5.4 20.3999C5.4 20.5999 5.4 20.7999 5.5 20.9999C5.8 21.4999 6.4 21.6999 6.9 21.3999L12 18.6999L17.1 21.3999C17.2 21.4999 17.4 21.4999 17.6 21.4999C17.7 21.4999 17.7 21.4999 17.8 21.4999C18.3 21.3999 18.7 20.8999 18.6 20.2999L17.6 14.5999L21.7 10.5999C21.9 10.4999 22 10.2999 22 10.0999Z"
                          fill="#FFBC57"
                        />
                      </svg>
                    </li>
                    <li className={style.reviews__star}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 10.0999C22.1 9.59994 21.7 8.99994 21.2 8.99994L15.5 8.19994L12.9 2.99994C12.8 2.79994 12.7 2.69994 12.5 2.59994C12 2.29994 11.4 2.49994 11.1 2.99994L8.6 8.19994L2.9 8.99994C2.6 8.99994 2.4 9.09994 2.3 9.29994C1.9 9.69994 1.9 10.2999 2.3 10.6999L6.4 14.6999L5.4 20.3999C5.4 20.5999 5.4 20.7999 5.5 20.9999C5.8 21.4999 6.4 21.6999 6.9 21.3999L12 18.6999L17.1 21.3999C17.2 21.4999 17.4 21.4999 17.6 21.4999C17.7 21.4999 17.7 21.4999 17.8 21.4999C18.3 21.3999 18.7 20.8999 18.6 20.2999L17.6 14.5999L21.7 10.5999C21.9 10.4999 22 10.2999 22 10.0999Z"
                          fill="#FFBC57"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
                <p className={style.reviews__text}>Базовано на відгуках: 269</p>
              </div>
              <div className={style.reviews__buttonContainer}>
                <button
                  className={style.reviews__write}
                  onClick={this.handleOpenModal}
                >
                  Написати відгук
                </button>
                <Link className={style.reviews__allLink} to="/reviews">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2C10.6868 2 9.38641 2.25866 8.17315 2.7612C6.9599 3.26375 5.85751 4.00035 4.92892 4.92893C3.05356 6.8043 1.99999 9.34784 1.99999 12C1.99125 14.3091 2.79078 16.5485 4.25999 18.33L2.25999 20.33C2.12123 20.4706 2.02723 20.6492 1.98986 20.8432C1.95249 21.0372 1.97341 21.2379 2.04999 21.42C2.13305 21.5999 2.26769 21.7511 2.43683 21.8544C2.60598 21.9577 2.80199 22.0083 2.99999 22H12C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2ZM12 20H5.40999L6.33999 19.07C6.52624 18.8826 6.63078 18.6292 6.63078 18.365C6.63078 18.1008 6.52624 17.8474 6.33999 17.66C5.03057 16.352 4.21516 14.6305 4.03268 12.7888C3.8502 10.947 4.31193 9.09901 5.33922 7.55952C6.3665 6.02004 7.89578 4.88436 9.6665 4.34597C11.4372 3.80759 13.3398 3.8998 15.0502 4.60691C16.7606 5.31402 18.1728 6.59227 19.0464 8.22389C19.92 9.85551 20.2009 11.7395 19.8411 13.555C19.4814 15.3705 18.5033 17.005 17.0735 18.1802C15.6438 19.3554 13.8508 19.9985 12 20Z"
                    />
                  </svg>
                  Всі відгуки
                </Link>
              </div>
            </div>

            <div className={style.reviews__content}>
              <ul
                className={style.reviews__list}
                style={{ transform: `translateX(-${sliderValue}px)` }}
              >
                {reviews.map((review) => (
                  <li key={review.id} className={style.reviews__item}>
                    <div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M14.3129 11.6338C15.1882 10.9451 15.8271 10.0007 16.1408 8.93198C16.4544 7.86324 16.4271 6.72334 16.0627 5.67084C15.6983 4.61834 15.0149 3.70559 14.1076 3.05958C13.2003 2.41356 12.1142 2.06641 11.0004 2.06641C9.88657 2.06641 8.80047 2.41356 7.89316 3.05958C6.98585 3.70559 6.30246 4.61834 5.93805 5.67084C5.57365 6.72334 5.54636 7.86324 5.85997 8.93198C6.17359 10.0007 6.81251 10.9451 7.68786 11.6338C6.18793 12.2347 4.87919 13.2314 3.90116 14.5177C2.92313 15.8039 2.31247 17.3314 2.13429 18.9374C2.12139 19.0546 2.13172 19.1733 2.16467 19.2865C2.19763 19.3998 2.25257 19.5055 2.32636 19.5975C2.47538 19.7834 2.69213 19.9024 2.92893 19.9285C3.16574 19.9545 3.40318 19.8854 3.58905 19.7364C3.77491 19.5874 3.89396 19.3706 3.92001 19.1338C4.11606 17.3884 4.9483 15.7765 6.2577 14.6059C7.56711 13.4354 9.26188 12.7883 11.0182 12.7883C12.7746 12.7883 14.4693 13.4354 15.7787 14.6059C17.0881 15.7765 17.9204 17.3884 18.1164 19.1338C18.1407 19.3532 18.2454 19.5558 18.4103 19.7026C18.5752 19.8493 18.7886 19.9298 19.0093 19.9285H19.1075C19.3416 19.9015 19.5555 19.7832 19.7027 19.5992C19.8498 19.4152 19.9183 19.1806 19.8932 18.9463C19.7142 17.3358 19.1003 15.8043 18.1172 14.5161C17.1341 13.2279 15.819 12.2316 14.3129 11.6338ZM11.0004 10.9999C10.294 10.9999 9.6035 10.7904 9.01619 10.398C8.42887 10.0056 7.97111 9.44778 7.70079 8.79518C7.43048 8.14259 7.35975 7.42449 7.49756 6.73171C7.63536 6.03892 7.97551 5.40255 8.47498 4.90307C8.97446 4.4036 9.61082 4.06346 10.3036 3.92565C10.9964 3.78785 11.7145 3.85857 12.3671 4.12889C13.0197 4.3992 13.5775 4.85696 13.9699 5.44428C14.3623 6.03159 14.5718 6.72209 14.5718 7.42846C14.5718 8.37566 14.1955 9.28406 13.5257 9.95384C12.856 10.6236 11.9476 10.9999 11.0004 10.9999Z"
                            fill="#535353"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className={style.reviews__name}>{review.name}</p>
                        <ul className={style.reviews__starsList}>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <li key={star} className={style.reviews__star}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill={
                                  star <= review.rating ? "#FFBC57" : "#E0E0E0"
                                }
                              >
                                <path d="M22 10.0999C22.1 9.59994 21.7 8.99994 21.2 8.99994L15.5 8.19994L12.9 2.99994C12.8 2.79994 12.7 2.69994 12.5 2.59994C12 2.29994 11.4 2.49994 11.1 2.99994L8.6 8.19994L2.9 8.99994C2.6 8.99994 2.4 9.09994 2.3 9.29994C1.9 9.69994 1.9 10.2999 2.3 10.6999L6.4 14.6999L5.4 20.3999C5.4 20.5999 5.4 20.7999 5.5 20.9999C5.8 21.4999 6.4 21.6999 6.9 21.3999L12 18.6999L17.1 21.3999C17.2 21.4999 17.4 21.4999 17.6 21.4999C17.7 21.4999 17.7 21.4999 17.8 21.4999C18.3 21.3999 18.7 20.8999 18.6 20.2999L17.6 14.5999L21.7 10.5999C21.9 10.4999 22 10.2999 22 10.0999Z" />
                              </svg>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className={style.reviews__date}>
                        {new Date(review.date).toLocaleDateString("uk-UA", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <p
                      className={style.reviews__text}
                      dangerouslySetInnerHTML={{ __html: review.text }}
                    />
                    <div className={style.reviews__imgContainer}>
                      <picture>
                        <source
                          srcSet={`${bedImg} 1x, ${bedImg} 2x`}
                          media="(min-width: 1200px)"
                        />
                        <source
                          srcSet={`${bedImg} 1x, ${bedImgTwo} 2x`}
                          media="(min-width: 480px)"
                        />
                        <img
                          className={style.reviews__img}
                          src={bedImg}
                          alt="bed"
                        />
                      </picture>
                      <p className={style.reviews__bedName}>{review.product}</p>
                      <div className={style.reviews__actions}>
                        <button
                          className={`${style.reviews__likeButton} ${
                            likedReviews.has(review.id) ? style.liked : ""
                          }`}
                          onClick={() => this.handleLike(review.id)}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          <span className={style.reviews__likeCount}>
                            {review.likes || 0}
                          </span>
                        </button>
                        <button
                          className={style.reviews__deleteButton}
                          onClick={() => this.handleDeleteReview(review.id)}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                          >
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="#535353" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={style.reviews__sliderContainer}>
            <input
              type="range"
              min="0"
              max="200"
              value={sliderValue}
              onChange={this.handleSliderChange}
              className={style.reviews__customSlider}
              id="myRange"
            />
          </div>
        </div>

        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={this.handleCloseModal}
            onSubmit={this.handleSubmitReview}
          />
        )}
      </section>
    );
  }
}
