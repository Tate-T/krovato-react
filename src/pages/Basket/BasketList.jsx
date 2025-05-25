import React, { Component, Fragment } from "react";
import promoIcon from "../../images/basket/promo.svg";
import checkIcon from "../../images/basket/check.svg";
import arrowShow from "../../images/basket/arrow-show.svg";
import deleteSvg from "../../images/basket/delete.svg";
import styles from "./BasketList.module.scss";

const validPromoCodes = {
  DISCOUNT10: 10,
  SPRING20: 20,
  FREESHIP: 0,
};

class BasketList extends Component {
  state = {
    showAll: false,
    discountPercent: 0,
    promoMessage: "",
    items: JSON.parse(localStorage.getItem("activeProducts")) || [],
    counts: JSON.parse(localStorage.getItem("basketCounts")) || [],
  };

  componentDidMount() {
    if (
      !this.state.counts.length ||
      this.state.counts.length !== this.state.items.length
    ) {
      const counts = this.state.items.map(() => 1);
      this.setState({ counts });
      localStorage.setItem("basketCounts", JSON.stringify(counts));
    }
  }

  handleAddItem = (index) => {
    const counts = [...this.state.counts];
    counts[index]++;
    this.setState({ counts });
    localStorage.setItem("basketCounts", JSON.stringify(counts));
  };

  handleMinusItem = (index) => {
    const counts = [...this.state.counts];
    if (counts[index] > 1) {
      counts[index]--;
      this.setState({ counts });
      localStorage.setItem("basketCounts", JSON.stringify(counts));
    }
  };

  handleDeleteItem = (index) => {
    const items = [...this.state.items];
    const counts = [...this.state.counts];
    items.splice(index, 1);
    counts.splice(index, 1);
    this.setState({ items, counts });
    localStorage.setItem("activeProducts", JSON.stringify(items));
    localStorage.setItem("basketCounts", JSON.stringify(counts));
  };

  toggleShowAll = () => {
    this.setState((prevState) => ({ showAll: !prevState.showAll }));
  };

  applyPromo = () => {
    const input = document.getElementById("promoInput").value.trim().toUpperCase();

    if (validPromoCodes.hasOwnProperty(input)) {
      const discount = validPromoCodes[input];
      if (discount > 0) {
        this.setState({
          discountPercent: discount,
          promoMessage: `Промокод застосовано! Знижка ${discount}%`,
        });
      } else {
        this.setState({
          discountPercent: 0,
          promoMessage: `Промокод застосовано! Безкоштовна доставка`,
        });
      }
    } else {
      this.setState({
        discountPercent: 0,
        promoMessage: "Недійсний промокод",
      });
    }
  };

  getTotalPrice = () => {
    const total = this.state.items.reduce((total, bed, index) => {
        const priceNumber = bed.price ? Number(bed.price.replace(/\D/g, "")) : 0;
      return total + priceNumber * (this.state.counts[index] || 1);
    }, 0);

    if (this.state.discountPercent > 0) {
      return total * (1 - this.state.discountPercent / 100);
    }
    return total;
  };

  render() {
    return (
      <Fragment>
        <section>
          <div className={styles.wrapperBasket}>
            <p className={styles.textBasket}>
              Ваш кошик
              <span className={styles.textBasketNumber}>
                {this.state.counts.reduce((acc, count) => acc + count, 0)}
              </span>
            </p>
            <ul>
              {this.state.items.map((bed, index) => {
                const isHidden = !this.state.showAll && index >= 2;
                return (
                  <li
                    key={index}
                    className={`${styles.containerBed} ${
                      isHidden ? styles.hiddenOnMobile : ""
                    }`}
                  >
                    <div className={styles.containerDescription}>
                      <img src={bed.image.src} alt={bed.alt} className={styles.imgBed} />
                      <div className={styles.containerCount}>
                        <button
                          onClick={() => this.handleMinusItem(index)}
                          className={styles.btnMath}
                        >
                          -
                        </button>
                        <p>{this.state.counts[index]}</p>
                        <button
                          onClick={() => this.handleAddItem(index)}
                          className={styles.btnMath}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className={styles.containerDescription}>
                      <p className={styles.textBed}>{bed.size}</p>
                      <p className={styles.textDescription}>{bed.description}</p>
                      <div className={styles.bedStatus}>
                        <img src={bed.svg || checkIcon} alt="icon-check" />
                        <p className={styles.textBed}>
                          {bed.isStock ? "Не в наявності" : "В наявності"}
                        </p>
                      </div>
                      <p className={styles.textPrice}>{bed.price}</p>
                    </div>
                    <button
                      className={styles.btnDelete}
                      onClick={() => this.handleDeleteItem(index)}
                    >
                      <img src={deleteSvg} alt="deleteSvg" />
                    </button>
                  </li>
                );
              })}
              <div className={styles.shadowContainer}>
                {!this.state.showAll && <div className={styles.shadowFade}></div>}
                <button
                  onClick={this.toggleShowAll}
                  className={styles.buttonShowAll}
                >
                  {this.state.showAll ? "Сховати" : "Показати всі"}
                  <img
                    src={arrowShow}
                    alt="arrow-show"
                    className={`${styles.arrowIcon} ${
                      this.state.showAll ? styles.rotated : ""
                    }`}
                  />
                </button>
              </div>
            </ul>
            <div className={styles.containerPromocode}>
              <div className={styles.promocodeDecription}>
                <img src={promoIcon} alt="promo-icon" />
                <p>Є промокод?</p>
              </div>
              <div className={styles.promocodeDecription}>
                <input
                  type="text"
                  placeholder="Введіть код"
                  className={styles.inputPromocode}
                  id="promoInput"
                />
                <button
                  className={styles.buttonPromocode}
                  onClick={this.applyPromo}
                >
                  Ок
                </button>
              </div>
            </div>
            <p id="message">{this.state.promoMessage}</p>
            <div>
              <p className={styles.textTogether}>Разом:</p>
              <ul className={styles.listContainer}>
                <li className={styles.togetherSum}>
                  <p className={styles.textSum}>
                    {this.state.counts.reduce((acc, count) => acc + count, 0)}{" "}
                    товари на суму:
                  </p>
                  <div className={styles.lineDotted}></div>
                  <p>{this.getTotalPrice().toLocaleString("uk-UA")} грн</p>
                </li>
                <li className={styles.togetherSum}>
                  <p className={styles.textSum}> Вартість доставки:</p>
                  <div className={styles.lineDotted}></div>
                  <p>За тарифами оператора</p>
                </li>
                <li className={styles.togetherSum}>
                  <p className={styles.textSum}>До оплати:</p>
                  <div className={styles.lineDotted}></div>
                  <p className={styles.textTogether}>
                    {this.getTotalPrice().toLocaleString("uk-UA")} грн.
                  </p>
                </li>
              </ul>
              <div className={styles.containerBed}>
                <input type="checkbox" />
                <p>Не передзвонюйте мені для підтвердження замовлення</p>
              </div>
            </div>
            <button
              className={styles.btnOrder}
              onClick={this.props.orderButton}
            >
              ОФОРМИТИ ЗАМОВЛЕННЯ
            </button>
            <p>
              Підтверджуючи замовлення, я приймаю умови{" "}
              <span className={styles.userOkay}>Угоди користувача</span>
            </p>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default BasketList;

