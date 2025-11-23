import { ArticlesList } from "./List/List";

import Container from "../../../components/Container/Container";
import style from "./Articles.module.scss";
import { useState } from "react";

export const Articles = () => {

  const [slide, setSlide] = useState(1);

  function increment () {

    if (slide !== 6) {
      
      setSlide(slide + 1);
    }
  }

  function dicrement () {

    if (slide !== 1) {
      
      setSlide(slide - 1);
    }
  }

  return (
    <section className={style.articles}>
      <Container>
        <div className={style.articles__titleBox}>
          <h2
            // data-aos="zoom-out-right"
            // data-aos-duration="1500"
            className={style.articles__title}
          >
            Свіжі статті та останні новини
          </h2>
          <a
            type="link"
            className={style.articles__link}
            href="./blog.html"
          >
            Читати блог
            <svg
              className={style.articles__titleArrow}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z"
                fill="#FFBC57"
              />
            </svg>
          </a>
          <ul className={style.articles__couple}>
            <li
              // data-aos="zoom-in-right"
              // data-aos-duration="1500"
              className={style.articles__couplePart}
            >
              <button disabled={slide === 1} onClick={dicrement} type="button" className={style.articles__button}>
                <svg
                  className={style.articles__arrow}
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_83_585)">
                    <path
                      d="M22.9707 28.897L31.44 20.4426C31.5791 20.3024 31.7446 20.191 31.927 20.1151C32.1093 20.0391 32.3049 20 32.5025 20C32.7 20 32.8956 20.0391 33.0779 20.1151C33.2603 20.191 33.4258 20.3024 33.5649 20.4426C33.8436 20.723 34 21.1022 34 21.4976C34 21.8929 33.8436 22.2721 33.5649 22.5525L26.1579 30.0343L33.5649 37.4412C33.8436 37.7216 34 38.1008 34 38.4962C34 38.8915 33.8436 39.2707 33.5649 39.5511C33.4263 39.6925 33.261 39.805 33.0787 39.882C32.8963 39.9591 32.7004 39.9992 32.5025 40C32.3045 39.9992 32.1086 39.9591 31.9263 39.882C31.7439 39.805 31.5786 39.6925 31.44 39.5511L22.9707 31.0967C22.8188 30.9566 22.6976 30.7865 22.6147 30.5972C22.5317 30.4079 22.4889 30.2035 22.4889 29.9969C22.4889 29.7902 22.5317 29.5858 22.6147 29.3965C22.6976 29.2072 22.8188 29.0372 22.9707 28.897Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_83_585">
                      <rect
                        width="60"
                        height="60"
                        fill="white"
                        transform="matrix(-1 0 0 1 60 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </li>
            <li
              // data-aos="zoom-in-left"
              // data-aos-duration="1500"
              className={style.articles__couplePart}
            >
              <button disabled={slide === 6} onClick={increment} type="button" className={style.articles__button}>
                <svg
                  className={style.articles__arrow}
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_83_582)">
                    <path
                      d="M37.0293 28.897L28.56 20.4426C28.4209 20.3024 28.2554 20.191 28.073 20.1151C27.8907 20.0391 27.6951 20 27.4975 20C27.3 20 27.1044 20.0391 26.9221 20.1151C26.7397 20.191 26.5742 20.3024 26.4351 20.4426C26.1564 20.723 26 21.1022 26 21.4976C26 21.8929 26.1564 22.2721 26.4351 22.5525L33.8421 30.0343L26.4351 37.4412C26.1564 37.7216 26 38.1008 26 38.4962C26 38.8915 26.1564 39.2707 26.4351 39.5511C26.5737 39.6925 26.739 39.805 26.9213 39.882C27.1037 39.9591 27.2996 39.9992 27.4975 40C27.6955 39.9992 27.8914 39.9591 28.0737 39.882C28.2561 39.805 28.4214 39.6925 28.56 39.5511L37.0293 31.0967C37.1812 30.9566 37.3024 30.7865 37.3853 30.5972C37.4683 30.4079 37.5111 30.2035 37.5111 29.9969C37.5111 29.7902 37.4683 29.5858 37.3853 29.3965C37.3024 29.2072 37.1812 29.0372 37.0293 28.897Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_83_582">
                      <rect width="60" height="60" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <ArticlesList activeSlide={slide} />
        <button
          // data-aos="zoom-in"
          // data-aos-duration="2000"
          type="button"
          className={style.articles__mainButton}
        >
          <svg className={style.articles__mainButtonArrow}>
            <use href="./images/symbol-defs.svg#icon-reload"></use>
          </svg>
          <p className={style.articles__mainButtonText}>Показати ще товари</p>
        </button>
      </Container>
    </section>
  );
};
