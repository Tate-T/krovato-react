import Container from "../../../components/Container/Container";
import style from "./Hero.scss";
import { useState, useEffect } from "react";
import divan1 from '../../../images/hero/divan-1.png';
import divan2 from '../../../images/hero/divan-2.png';
import divan3 from '../../../images/hero/divan-3.png';
import divan4 from '../../../images/hero/divan-4.png';
import divan5 from '../../../images/hero/divan-5.png';


export function Hero () {

  let [ slide, setSlide ] = useState(0);
  let animAction = false;

  function decrement () {

    if (slide) {

      setSlide(slide - 1);
    };
  };

  function increment () {

    if (slide !== 4) {

      setSlide(slide + 1);
    };
  };

  useEffect(() => {
    

  }, [slide]);

  return (
    <section className="hero">
      <Container className='hero__inner'>
        <ul className={`hero__list slide-${slide + 1}`}>
          <li className='hero__list-item'>
            <img className = 'hero__list-item' src={divan1} alt="" />
          </li>
          <li className='hero__list-item'>
            <img className = 'hero__list-item' src={divan2} alt="" />
          </li>
          <li className='hero__list-item'>
            <img className = 'hero__list-item' src={divan3} alt="" />
          </li>
          <li className='hero__list-item'>
            <img className = 'hero__list-item' src={divan4} alt="" />
          </li>
          <li className='hero__list-item'>
            <img className = 'hero__list-item' src={divan5} alt="" />
          </li>
        </ul>
        <div className='hero__svg-container'>
          <svg
            className={slide ? 'hero__svg' : 'hero__svg blocked'}
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={decrement}
          >
            <g clipPath="url(#clip0_69_250)">
              { /* <circle
                cx="30"
                cy="30"
                r="30"
                transform="matrix(-1 0 0 1 60 0)"
                fill="white"
              /> */}
              <path
                d="M22.9707 28.897L31.44 20.4426C31.5791 20.3024 31.7446 20.191 31.927 20.1151C32.1093 20.0391 32.3049 20 32.5025 20C32.7 20 32.8956 20.0391 33.0779 20.1151C33.2603 20.191 33.4258 20.3024 33.5649 20.4426C33.8436 20.723 34 21.1022 34 21.4976C34 21.8929 33.8436 22.2721 33.5649 22.5525L26.1579 30.0343L33.5649 37.4412C33.8436 37.7216 34 38.1008 34 38.4962C34 38.8915 33.8436 39.2707 33.5649 39.5511C33.4263 39.6925 33.261 39.805 33.0787 39.882C32.8963 39.9591 32.7004 39.9992 32.5025 40C32.3045 39.9992 32.1086 39.9591 31.9263 39.882C31.7439 39.805 31.5786 39.6925 31.44 39.5511L22.9707 31.0967C22.8188 30.9566 22.6976 30.7865 22.6147 30.5972C22.5317 30.4079 22.4889 30.2035 22.4889 29.9969C22.4889 29.7902 22.5317 29.5858 22.6147 29.3965C22.6976 29.2072 22.8188 29.0372 22.9707 28.897Z"
              />
            </g>
            <defs>
              <clipPath id="clip0_69_250">
                <rect
                  width="60"
                  height="60"
                  fill="white"
                  transform="matrix(-1 0 0 1 60 0)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            className={slide === 4 ? 'hero__svg blocked' : 'hero__svg'}
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={increment}
          >
            <g clipPath="url(#clip0_78_541)">
              {/* <circle cx="30" cy="30" r="30" fill="white" /> */}
              <path
                d="M37.0293 28.897L28.56 20.4426C28.4209 20.3024 28.2554 20.191 28.073 20.1151C27.8907 20.0391 27.6951 20 27.4975 20C27.3 20 27.1044 20.0391 26.9221 20.1151C26.7397 20.191 26.5742 20.3024 26.4351 20.4426C26.1564 20.723 26 21.1022 26 21.4976C26 21.8929 26.1564 22.2721 26.4351 22.5525L33.8421 30.0343L26.4351 37.4412C26.1564 37.7216 26 38.1008 26 38.4962C26 38.8915 26.1564 39.2707 26.4351 39.5511C26.5737 39.6925 26.739 39.805 26.9213 39.882C27.1037 39.9591 27.2996 39.9992 27.4975 40C27.6955 39.9992 27.8914 39.9591 28.0737 39.882C28.2561 39.805 28.4214 39.6925 28.56 39.5511L37.0293 31.0967C37.1812 30.9566 37.3024 30.7865 37.3853 30.5972C37.4683 30.4079 37.5111 30.2035 37.5111 29.9969C37.5111 29.7902 37.4683 29.5858 37.3853 29.3965C37.3024 29.2072 37.1812 29.0372 37.0293 28.897Z"
              />
            </g>
            <defs>
              <clipPath id="clip0_78_541">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className='hero__pagination-container'>
          <span onClick={() => setSlide(0)} className='hero__pagination-dot'></span>
          <span onClick={() => setSlide(1)} className='hero__pagination-dot'></span>
          <span onClick={() => setSlide(2)} className='hero__pagination-dot'></span>
          <span onClick={() => setSlide(3)} className='hero__pagination-dot'></span>
          <span onClick={() => setSlide(4)} className='hero__pagination-dot'></span>
          <span className={`hero__pagination-anchor slide-${slide + 1}`}></span>
        </div>
      </Container>
    </section>
  );
};

// export class Hero {

//   render () {
//     <section className="hero">
//       <div className={`${containerStyle.container} ${style.hero__container}`}>
//         <div id="page">
//           <div
//             className={style.js__slider}
//             auto="false"
//             arrow="true"
//             dots="true"
//           >
//             <ul className={style.hero__slideList}>
//               <li
//                 className={`${style.hero__slide} ${style.hero__slideActive}`}
//               ></li>
//               <li className={style.hero__slide}></li>
//               <li className={style.hero__slide}></li>
//               <li className={style.hero__slide}></li>
//               <li className={style.hero__slide}></li>
//             </ul>
//             <svg
//               className={style.hero__icon1}
//               width="60"
//               height="60"
//               viewBox="0 0 60 60"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g clipPath="url(#clip0_69_250)">
//                 <circle
//                   cx="30"
//                   cy="30"
//                   r="30"
//                   transform="matrix(-1 0 0 1 60 0)"
//                   fill="white"
//                 />
//                 <path
//                   d="M22.9707 28.897L31.44 20.4426C31.5791 20.3024 31.7446 20.191 31.927 20.1151C32.1093 20.0391 32.3049 20 32.5025 20C32.7 20 32.8956 20.0391 33.0779 20.1151C33.2603 20.191 33.4258 20.3024 33.5649 20.4426C33.8436 20.723 34 21.1022 34 21.4976C34 21.8929 33.8436 22.2721 33.5649 22.5525L26.1579 30.0343L33.5649 37.4412C33.8436 37.7216 34 38.1008 34 38.4962C34 38.8915 33.8436 39.2707 33.5649 39.5511C33.4263 39.6925 33.261 39.805 33.0787 39.882C32.8963 39.9591 32.7004 39.9992 32.5025 40C32.3045 39.9992 32.1086 39.9591 31.9263 39.882C31.7439 39.805 31.5786 39.6925 31.44 39.5511L22.9707 31.0967C22.8188 30.9566 22.6976 30.7865 22.6147 30.5972C22.5317 30.4079 22.4889 30.2035 22.4889 29.9969C22.4889 29.7902 22.5317 29.5858 22.6147 29.3965C22.6976 29.2072 22.8188 29.0372 22.9707 28.897Z"
//                   fill="#FFBC57"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_69_250">
//                   <rect
//                     width="60"
//                     height="60"
//                     fill="white"
//                     transform="matrix(-1 0 0 1 60 0)"
//                   />
//                 </clipPath>
//               </defs>
//             </svg>
//             <svg
//               className={style.hero__icon2}
//               width="60"
//               height="60"
//               viewBox="0 0 60 60"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g clipPath="url(#clip0_78_541)">
//                 <circle cx="30" cy="30" r="30" fill="white" />
//                 <path
//                   d="M37.0293 28.897L28.56 20.4426C28.4209 20.3024 28.2554 20.191 28.073 20.1151C27.8907 20.0391 27.6951 20 27.4975 20C27.3 20 27.1044 20.0391 26.9221 20.1151C26.7397 20.191 26.5742 20.3024 26.4351 20.4426C26.1564 20.723 26 21.1022 26 21.4976C26 21.8929 26.1564 22.2721 26.4351 22.5525L33.8421 30.0343L26.4351 37.4412C26.1564 37.7216 26 38.1008 26 38.4962C26 38.8915 26.1564 39.2707 26.4351 39.5511C26.5737 39.6925 26.739 39.805 26.9213 39.882C27.1037 39.9591 27.2996 39.9992 27.4975 40C27.6955 39.9992 27.8914 39.9591 28.0737 39.882C28.2561 39.805 28.4214 39.6925 28.56 39.5511L37.0293 31.0967C37.1812 30.9566 37.3024 30.7865 37.3853 30.5972C37.4683 30.4079 37.5111 30.2035 37.5111 29.9969C37.5111 29.7902 37.4683 29.5858 37.3853 29.3965C37.3024 29.2072 37.1812 29.0372 37.0293 28.897Z"
//                   fill="#FFBC57"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_78_541">
//                   <rect width="60" height="60" fill="white" />
//                 </clipPath>
//               </defs>
//             </svg>
//           </div>
//           <div className={style.dots__container}>
//             <span className={`${style.dot} ${style.dotActive}`}></span>
//             <span className={style.dot}></span>
//             <span className={style.dot}></span>
//             <span className={style.dot}></span>
//             <span className={style.dot}></span>
//           </div>
//         </div>
//       </div>
//     </section>
//    };
// };
