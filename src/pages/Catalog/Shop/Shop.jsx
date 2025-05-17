import { Component } from "react";
import "./shop.scss";
import containerStyles from "../../../components/Container/Container.module.scss";
import productsData from "../../../productsData.json";

export class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: productsData,
    };
  }

  handleFilterClear = () => {
    this.setState({ products: productsData });
  };

  handleFilterPrice = () => {
    const filteredProducts = this.state.products
      .slice(0)
      .filter((product, index) => {
        const productPrice = parseInt(
          product.price.split(" грн.").join("").split(" ").join("")
        );

        return productPrice >= 1195 && productPrice <= 9566;
      });

    this.setState({ products: filteredProducts });
  };

  handleFilterIsInStock = () => {
    const filteredProducts = this.state.products
      .slice(0)
      .filter((product) => product.inStock);

    this.setState({ products: filteredProducts });
  };

  handleFilterCorners = () => {
    const filteredProducts = this.state.products
      .slice(0)
      .filter((product) => product.title.toLowerCase().includes("corners"));

    this.setState({ products: filteredProducts });
  };

  handleFilterSize = () => {
    const filteredProducts = this.state.products
      .slice(0)
      .filter((product) => product.size.toLowerCase().includes("200 x 210"));

    this.setState({ products: filteredProducts });
  };

  render() {
    return (
      <>
        <section className="shop">
          <div
            className={[containerStyles.container, "shop__container"].join(" ")}
          >
            <aside className="aside">
              <div className="aside__box">
                <svg className="aside__icon">
                  <use href="#"></use>
                </svg>
                <p className="aside__filter">Фільтр пошуку</p>
              </div>

              <ul className="aside__list">
                <li className="aside__item">
                  <div className="aside__box2">
                    <p className="aside__suptitle">Ціна, грн</p>
                    <svg className="aside__close">
                      <use href="#"></use>
                    </svg>
                  </div>
                  <div className="aside__raaar">
                    <form action="" className="aside__form">
                      <input
                        type="text"
                        placeholder="1195"
                        className="aside__input"
                      />
                      <input
                        type="text"
                        placeholder="9566"
                        className="aside__input"
                      />
                      <button type="submit" className="aside__button">
                        ОК
                      </button>
                    </form>
                    <svg className="aside__scroll">
                      <use href="#"></use>
                    </svg>
                  </div>
                </li>
                <li className="aside__item">
                  <div className="aside__box2">
                    <p className="aside__suptitle">Наявність</p>
                    <svg className="aside__close">
                      <use href="#"></use>
                    </svg>
                  </div>
                  <ul className="aside__item-list">
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">В наявності</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">Під замовлення</p>
                    </li>
                  </ul>
                </li>
                <li className="aside__item">
                  <div className="aside__box2">
                    <p className="aside__suptitle">Виробник</p>
                    <svg className="aside__close">
                      <use href="#"></use>
                    </svg>
                  </div>

                  <ul className="aside__item-list">
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">Corners</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">Estella</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">Green Line</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">Legko</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">MiroMark</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">Novelty</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">Soft-line</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">Venger</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">Арбор Древ</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">Городок мебель</p>
                    </li>
                  </ul>
                  <p className="aside__show">Показати всі</p>
                </li>
                <li className="aside__item">
                  <div className="aside__box2">
                    <p className="aside__suptitle">Тип ліжка</p>
                    <svg className="aside__close">
                      <use href="#"></use>
                    </svg>
                  </div>

                  <ul className="aside__item-list">
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">Без узголов'я</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">З узголів'ям</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">Двоярусні</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">Розкладачки</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">Шафи</p>
                    </li>
                  </ul>
                </li>
                <li className="aside__item">
                  <div className="aside__box2">
                    <p className="aside__suptitle">Розмір спального місця</p>
                    <svg className="aside__close">
                      <use href="#"></use>
                    </svg>
                  </div>

                  <ul className="aside__item-list">
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">200x210 см</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">200x200 см</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">180x200 см</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">160x200 см</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">110x190 см</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">160x190 см</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">150x200 см</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">140x200 см</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">140x190 см</p>
                    </li>
                    <li className="aside__item-item">
                      <input type="checkbox" className="aside__checkbox" />
                      <p className="aside__text">120x200 см</p>
                    </li>
                  </ul>
                  <p className="aside__show">Показати всі</p>
                </li>
                <li className="aside__flex">
                  <p className="aside__suptitle">Ширина спального місця</p>
                  <svg className="aside__more">
                    <use href="#"></use>
                  </svg>
                </li>
                <li className="aside__flex">
                  <p className="aside__suptitle">Довжина спального місця</p>
                  <svg className="aside__more">
                    <use href="#"></use>
                  </svg>
                </li>
                <li className="aside__flex">
                  <p className="aside__suptitle">Форма</p>
                  <svg className="aside__more">
                    <use href="#"></use>
                  </svg>
                </li>
                <li className="aside__flex">
                  <p className="aside__suptitle">Матеріал корпусу</p>
                  <svg className="aside__more">
                    <use href="#"></use>
                  </svg>
                </li>
                <li className="aside__flex">
                  <p className="aside__suptitle">Основа для матраца</p>
                  <svg className="aside__more">
                    <use href="#"></use>
                  </svg>
                </li>
              </ul>
            </aside>

            <div>
              <div className="choose">
                <div className="choose__box">
                  <h3 className="choose__title">Ви вибрали:</h3>

                  <div className="choose__container">
                    <svg className="choose__filter">
                      <use href="#"></use>
                    </svg>
                    <p className="choose__sorting">Сортування:</p>
                    <p className="choose__option">За зростанням ціни</p>
                    <svg className="choose__hide">
                      <use href="#"></use>
                    </svg>
                  </div>
                </div>
                <ul className="choose__list">
                  <li className="choose__item" onClick={this.handleFilterClear}>
                    <p className="choose__text">Очистити</p>
                    <svg className="choose__close">
                      <use href="#"></use>
                    </svg>
                  </li>
                  <li className="choose__item" onClick={this.handleFilterPrice}>
                    <p className="choose__text">Ціна: 1195-9566</p>
                    <svg className="choose__close">
                      <use href="#"></use>
                    </svg>
                  </li>
                  <li
                    className="choose__item"
                    onClick={this.handleFilterIsInStock}
                  >
                    <p className="choose__text">В наявності</p>
                    <svg className="choose__close">
                      <use href="#"></use>
                    </svg>
                  </li>
                  <li className="choose__item">
                    <p
                      className="choose__text"
                      onClick={this.handleFilterCorners}
                    >
                      Виробник: Corners
                    </p>
                    <svg className="choose__close">
                      <use href="#"></use>
                    </svg>
                  </li>
                  {/* <li className="choose__item">
                    <p className="choose__text">Без узголов'я</p>
                    <svg className="choose__close">
                      <use href="#"></use>
                    </svg>
                  </li> */}
                  <li className="choose__item">
                    <p className="choose__text" onClick={this.handleFilterSize}>
                      200x210 см
                    </p>
                    <svg className="choose__close">
                      <use href="#"></use>
                    </svg>
                  </li>
                </ul>
              </div>
              <ul className="shop__list">
                {this.state.products.map((product) => (
                  <li key={product.id} className={`shop__item`}>
                    <img src="#" alt={product.alt} className="shop__image" />
                    <div>
                      <p className="shop__text">Розмір: {product.size}</p>
                      <h2 className="shop__suptitle">{product.title}</h2>
                      <div className="shop__pashalka">
                        <svg className="shop__icon">
                          <use href="#"></use>
                        </svg>
                        <p className="shop__instock">
                          {product.inStock ? "В наявності" : "Під замовлення"}
                        </p>
                      </div>
                    </div>
                    <div className="shop__item-element">
                      {product.oldPrice ? (
                        <div className="shop__promo">
                          <p className="shop__old">{product.oldPrice}</p>
                          <p className="shop__price">{product.price}</p>
                        </div>
                      ) : (
                        <p className="shop__price">{product.price}</p>
                      )}
                      <div className="shop__icons">
                        <svg className="shop__heart">
                          <use href="#"></use>
                        </svg>
                        <svg className="shop__basket">
                          <use href="#"></use>
                        </svg>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              {/* <ul className="reviews__list-button shop__list-more">
                <li className="reviews__item-more ">
                  <button className="reviews__button-more">
                    <svg className="reviews__arrow">
                      <use href="#"></use>
                    </svg>
                  </button>
                </li>
                <li className="reviews__button-item">
                  <button className="reviews__button-more reviews__btn-active">
                    1
                  </button>
                </li>
                <li className="reviews__button-item">
                  <button className="reviews__button-more">2</button>
                </li>
                <li className="reviews__button-item">
                  <button className="reviews__button-more">3</button>
                </li>
                <li className="reviews__button-item">
                  <button className="reviews__button-more">4</button>
                </li>
                <li className="reviews__button-item">
                  <button className="reviews__button-more">5</button>
                </li>
                <li className="reviews__button-item">
                  <button className="reviews__button-more">6</button>
                </li>
                <li className="reviews__button-item">
                  <button className="reviews__button-more">7</button>
                </li>
                <li className="reviews__button-item">
                  <button className="reviews__button-more">...</button>
                </li>
                <li className="reviews__button-item">
                  <button className="reviews__button-more">18</button>
                </li>
                <li className="reviews__button-item">
                  <button className="reviews__button-more">
                    <svg className="reviews__arrow">
                      <use href="#"></use>
                    </svg>
                  </button>
                </li>
              </ul> */}
              {/* <button className="reviews__more-button">
                <svg className="reviews__icon-more">
                  <use href="#"></use>
                </svg>
                Показати ще товари
              </button> */}
            </div>
          </div>
        </section>
      </>
    );
  }
}
