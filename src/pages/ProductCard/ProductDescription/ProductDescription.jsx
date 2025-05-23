import style from './ProductDescription.module.scss'
import containerStyle from '../../../components/Container/Container.module.scss'

import { Component } from 'react';

// import palitra from "../../../images/product-card/palitra.png";
import img1 from '../../../images/product-card/palitra/lunar-ash.png'
import img2 from '../../../images/product-card/palitra/lunar-beige.png'
import img3 from '../../../images/product-card/palitra/lunar-chocolate.png'
import img4 from '../../../images/product-card/palitra/lunar-coffee.png'
import img5 from '../../../images/product-card/palitra/lunar-grey.png'
import img6 from '../../../images/product-card/palitra/lunar-desert.png'
import img7 from '../../../images/product-card/palitra/lunar-forest.png'
import img8 from '../../../images/product-card/palitra/lunar-mustard.png'
import img9 from '../../../images/product-card/palitra/lunar-mint.png'
import img10 from '../../../images/product-card/palitra/lunar-ivory.png'
import img11 from '../../../images/product-card/palitra/lunar-latte.png'
import img12 from '../../../images/product-card/palitra/lunar-navy.png'


export class ProductDescription extends Component {
    state = {
        review: ''
    }

    addReview = (e) => {
        e.preventDefault()

        const elementsArray = Array.from(e.target.elements);
        const buttons = elementsArray.filter(el => el.tagName === 'BUTTON');
        const buttonsCount = buttons.filter(btn => btn.classList.contains('red')).length

        if (buttonsCount === 0) {
            this.openModal()
        } else {
            const newReview = {
                name: e.target.elements.name.value,
                email: e.target.elements.email.value,
                comment: e.target.elements.review.value,
                rating: buttonsCount,
            }

            e.target.elements.name.value = ''
            e.target.elements.email.value = ''
            e.target.elements.review.value = ''
            buttons.filter(btn => btn.classList.contains('red')).map(btn => {
                btn.children[0].children[0].style.fill = '#B1B1B1'
                btn.classList.remove('red')
            })

            this.setState({ review: newReview }, () => {
                console.log(this.state);
            });
        }
    }

    clickStar = (e) => {
        const elements = Array.from(e.currentTarget.parentElement.parentElement.children).slice(0, Number(e.currentTarget.parentElement.id) + 1)
        Array.from(e.currentTarget.parentElement.parentElement.children).map(el => {
            Array.from(el.children[0].children[0].children)[0].style.fill = '#B1B1B1'
            Array.from(el.children)[0].classList.remove('red')
        })
        elements.map(el => {
            Array.from(el.children[0].children[0].children)[0].style.fill = 'rgba(255, 188, 87, 1)'
            Array.from(el.children)[0].classList.add('red')
        })
    }

    openModal = () => {
        const modal = document.querySelector('#requiredModal')
        modal.style.transform = 'translateX(0)';
        modal.style.display = 'flex';

        let timer = 3
        const interval = setInterval(() => {
            timer--

            if (timer === 0) {
                modal.style.transform = 'translateX(-100%)';
                modal.style.display = 'none'; 
                clearInterval(interval)
            }
        }, 1000)
    }

    openColorModal =(e)=>{
        const backdrop = document.querySelector('#imgModalBackdrop')
        backdrop.children[0].children[0].src = e.target.src
        backdrop.style.display = 'block'
    
    }
    closeColorModal =(e)=>{
        e.currentTarget.style.display = 'none'        
    }

    render() {
        return (
            <section className={style.description}>
                <div className={`${containerStyle.container} ${style.description__container}`}>
                    <div className={style.description__content}>
                        <h2 className={style.description__title}>Опис товару</h2>
                        <p className={style.description__text}>
                            Модель МК-1 – це ліжко від українського виробника, компанії MegaMebli. Вона
                            виготовляється з ДСП та оснащена м'якою спинкою. Також може бути виготовлена з дерев'яного щита (сосни).
                            Ламелі виконані з бука. Подібна конструкція характеризується надійністю та привабливим зовнішнім виглядом.
                        </p>
                        <ul className={style.description__list}>
                            <li className={style.description__item}><button onClick={this.openColorModal} className={style.description__btn}><img src={img1} alt="" className={style.description__img} /></button></li>
                            <li className={style.description__item}><button onClick={this.openColorModal} className={style.description__btn}><img src={img2} alt="" className={style.description__img} /></button></li>
                            <li className={style.description__item}><button onClick={this.openColorModal} className={style.description__btn}><img src={img3} alt="" className={style.description__img} /></button></li>
                            <li className={style.description__item}><button onClick={this.openColorModal} className={style.description__btn}><img src={img4} alt="" className={style.description__img} /></button></li>
                            <li className={style.description__item}><button onClick={this.openColorModal} className={style.description__btn}><img src={img5} alt="" className={style.description__img} /></button></li>
                            <li className={style.description__item}><button onClick={this.openColorModal} className={style.description__btn}><img src={img6} alt="" className={style.description__img} /></button></li>
                            <li className={style.description__item}><button onClick={this.openColorModal} className={style.description__btn}><img src={img7} alt="" className={style.description__img} /></button></li>
                            <li className={style.description__item}><button onClick={this.openColorModal} className={style.description__btn}><img src={img8} alt="" className={style.description__img} /></button></li>
                            <li className={style.description__item}><button onClick={this.openColorModal} className={style.description__btn}><img src={img9} alt="" className={style.description__img} /></button></li>
                            <li className={style.description__item}><button onClick={this.openColorModal} className={style.description__btn}><img src={img10} alt="" className={style.description__img} /></button></li>
                            <li className={style.description__item}><button onClick={this.openColorModal} className={style.description__btn}><img src={img11} alt="" className={style.description__img} /></button></li>
                            <li className={style.description__item}><button onClick={this.openColorModal} className={style.description__btn}><img src={img12} alt="" className={style.description__img} /></button></li>
                        </ul>
                        <div onClick={this.closeColorModal} className={style.imgBackdrop} id='imgModalBackdrop'><div id='imgModal' className={style.imgModal}><img src={img1} alt="" /></div></div>
                        {/* <img className={style.description__image} src={palitra} alt="bed" /> */}
                    </div>
                    <div className={style.descriptionForm__bug}>
                        <form onSubmit={this.addReview} className={style.descriptionForm}>
                            <h2 className={style.descriptionForm__title}>Залишіть свій відгук</h2>
                            <input
                                type="text"
                                className={`${style.descriptionForm__input} ${style.descriptionForm__inputName}`}
                                placeholder="Ваше ім'я прізвище"
                                name='name'
                                required
                            />
                            <input
                                type="text"
                                className={`${style.descriptionForm__input} ${style.descriptionForm__inputMail}`}
                                placeholder="E-mail"
                                name='email'
                                required
                            />
                            <input
                                type="text"
                                className={`${style.descriptionForm__input} ${style.descriptionForm__inputReview}`}
                                placeholder="Відгук"
                                name='review'
                                required
                            />
                            <p className={style.descriptionForm__text}>Ваша оцінка:</p>
                            <ul className={style.descriptionForm__list}>
                                {[...Array(5)].map((_, i) => (
                                    <li key={i} id={i} className={style.descriptionForm__item}>
                                        <button type='button' className={style.descriptionForm__button} onClick={this.clickStar}>
                                            <svg className={style.descriptionForm__svg} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <path d="M36.6665 16.1167C36.5612 15.8118 36.3698 15.544 36.1154 15.3458C35.8609 15.1476 35.5545 15.0275 35.2331 15L25.7498 13.6167L21.4998 5C21.3633 4.71821 21.1502 4.48057 20.8849 4.31429C20.6197 4.14801 20.3129 4.05981 19.9998 4.05981C19.6867 4.05981 19.3799 4.14801 19.1147 4.31429C18.8494 4.48057 18.6363 4.71821 18.4998 5L14.2498 13.6L4.76647 15C4.458 15.0438 4.16801 15.1733 3.92938 15.3736C3.69076 15.5739 3.51307 15.8371 3.41647 16.1333C3.32804 16.4228 3.32011 16.7309 3.39351 17.0245C3.46692 17.3181 3.6189 17.5862 3.83313 17.8L10.7165 24.4667L9.0498 33.9333C8.98251 34.2474 9.00739 34.5742 9.12144 34.8744C9.23549 35.1746 9.43386 35.4355 9.69268 35.6257C9.9515 35.8158 10.2598 35.9271 10.5803 35.9462C10.9009 35.9653 11.2202 35.8914 11.4998 35.7333L19.9998 31.2833L28.4998 35.7333C28.7337 35.8653 28.9979 35.9342 29.2665 35.9333C29.6195 35.9346 29.9638 35.8237 30.2498 35.6167C30.5084 35.4314 30.7085 35.1761 30.8267 34.8807C30.9448 34.5854 30.976 34.2625 30.9165 33.95L29.2498 24.4833L36.1331 17.8167C36.3738 17.6128 36.5516 17.3448 36.646 17.0439C36.7404 16.743 36.7475 16.4215 36.6665 16.1167ZM26.4165 22.7833C26.2236 22.9707 26.0788 23.2019 25.9947 23.4573C25.9105 23.7127 25.8894 23.9847 25.9331 24.25L27.1331 31.25L20.8665 27.9167C20.6229 27.7962 20.3549 27.7335 20.0831 27.7335C19.8114 27.7335 19.5434 27.7962 19.2998 27.9167L13.0331 31.25L14.2331 24.25C14.2769 23.9847 14.2557 23.7127 14.1716 23.4573C14.0874 23.2019 13.9427 22.9707 13.7498 22.7833L8.7498 17.7833L15.7665 16.7667C16.0365 16.7291 16.2931 16.6259 16.514 16.4661C16.7348 16.3063 16.9131 16.0947 17.0331 15.85L19.9998 9.5L23.1331 15.8667C23.2532 16.1114 23.4315 16.3229 23.6523 16.4828C23.8731 16.6426 24.1298 16.7458 24.3998 16.7833L31.4165 17.8L26.4165 22.7833Z" fill="#B1B1B1" />
                                            </svg>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <button className={style.descriptionForm__btn} type="submit">Залишити відгук</button>
                        </form>
                    </div>
                </div>
                <div id='requiredModal' className={style.requiredModal}>
                    <p>Введіть кількість зірок</p>
                </div>
            </section>
        )
    }
}