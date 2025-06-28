import { Fragment } from "react";
import promoIcon from "../../images/basket/promo.svg";
import checkIcon from "../../images/basket/check.svg";
import arrowShow from "../../images/basket/arrow-show.svg";
import deleteSvg from "../../images/basket/delete.svg";
import { useState, useEffect, useContext } from 'react'
import styles from "./BasketList.module.scss";
import { ContextBasketList } from "./ContextBasketList";

const validPromoCodes = {
  DISCOUNT10: 10,
  SPRING20: 20,
  FREESHIP: 0,
};
export const BasketList = () => {
  const [showAll, setShowAll] = useState(false)
  const [discountPercent, setDiscountPercent] = useState(0)
  const [promoMessage, setPromoMessage] = useState("")
  const [promoInputValue, setPromoInputValue] = useState("");

  const [counts, setCounts] = useState([]);


  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("activeProducts");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    const savedCounts = localStorage.getItem("basketCounts");
    if (savedCounts) {
      setCounts(JSON.parse(savedCounts));
    } else {
      setCounts(items.map(() => 1));
    }
  }, []); 


  useEffect(() => {
    localStorage.setItem("basketCounts", JSON.stringify(counts));
  }, [counts]);

useEffect(() => {
  setCounts(items.map(() => 1));
}, [items]);
  useEffect(() => {
    localStorage.setItem("activeProducts", JSON.stringify(items));
  }, [items]);


  useEffect(() => {
    const savedDiscount = localStorage.getItem("discountPercent");
    if (savedDiscount) {
      setDiscountPercent(JSON.parse(savedDiscount));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("discountPercent", JSON.stringify(discountPercent));
  }, [discountPercent]);
  const handleAddItem = (index) => {
    const updated = [...counts]
    updated[index]++
    setCounts(updated)
  }
  const handleMinusItem = (index) => {
    const updated = [...counts]
    if (updated[index] > 1) {
      updated[index]--
      setCounts(updated)
    }
  }
  const handleDeleteItem = (index) => {
    const updatedItems = [...items]
    const updatedCounts = [...counts]
    updatedItems.splice(index, 1)
    updatedCounts.splice(index, 1)
    setItems(updatedItems);
    setCounts(updatedCounts)
    localStorage.setItem("activeProducts", JSON.stringify(updatedItems));
  }
  const toggleShowAll = () => {
    setShowAll((prev) => !prev)
  }
  const applyPromo = () => {
    const input = promoInputValue.trim().toUpperCase();
    if (validPromoCodes.hasOwnProperty(input)) {
      const discount = validPromoCodes[input];
      setDiscountPercent(discount)
      setPromoMessage(
        discount > 0
          ? `Промокод застосовано! Знижка ${discount}%`
          : `Промокод застосовано! Безкоштовна доставка`
      );
    } else {
      setDiscountPercent(0);
      setPromoMessage("Недійсний промокод");
    }
  }


  const getTotalPrice = () => {
    const total = items.reduce((acc, item, index) => {
      const price = Number(item.price?.replace(/\D/g, "")) || 0;
      return acc + price * (counts[index] || 1);
    }, 0);

    if (discountPercent > 0) {
      return total * (1 - discountPercent / 100);
    }

    return total;
  };
  const { orderButton } = useContext(ContextBasketList)
  return (
    <Fragment>
      <section>
        <div className={styles.wrapperBasket}>
          <p className={styles.textBasket}>
            Ваш кошик
            <span className={styles.textBasketNumber}>
            {counts.reduce((acc, count) => acc + count, 0)}
            </span>
          </p>
          <ul>
            {items.map((bed, index) => {
              const isHidden = !showAll && index >= 2;
              return (
                <li
                  key={index}
                  className={`${styles.containerBed} ${isHidden ? styles.hiddenOnMobile : ""
                    }`}
                >
                  <div className={styles.containerDescription}>
                    <img src={bed.image.src} alt={bed.alt} className={styles.imgBed} />
                    <div className={styles.containerCount}>
                      <button
                        onClick={() => handleMinusItem(index)}
                        className={styles.btnMath}
                      >
                        -
                      </button>
                      <p>{counts[index]}</p>
                      <button
                        onClick={() => handleAddItem(index)}
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
                    onClick={() => handleDeleteItem(index)}
                  >
                    <img src={deleteSvg} alt="deleteSvg" />
                  </button>
                </li>
              );
            })}
            <div className={styles.shadowContainer}>
              {!showAll && <div className={styles.shadowFade}></div>}
              <button
                onClick={toggleShowAll}
                className={styles.buttonShowAll}
              >
                {showAll ? "Сховати" : "Показати всі"}
                <img
                  src={arrowShow}
                  alt="arrow-show"
                  className={`${styles.arrowIcon} ${showAll ? styles.rotated : ""
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
                value={promoInputValue}
                onChange={(e) => setPromoInputValue(e.target.value)}
              />
              <button
                className={styles.buttonPromocode}
                onClick={applyPromo}
              >
                Ок
              </button>
            </div>
          </div>
          <p id="message">{promoMessage}</p>
          <div>
            <p className={styles.textTogether}>Разом:</p>
            <ul className={styles.listContainer}>
              <li className={styles.togetherSum}>
                <p className={styles.textSum}>
                  {counts.reduce((acc, count) => acc + count, 0)}{" "}
                  товари на суму:
                </p>
                <div className={styles.lineDotted}></div>
                <p>{getTotalPrice().toLocaleString("uk-UA")} грн</p>
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
                  {getTotalPrice().toLocaleString("uk-UA")} грн.
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
            onClick={orderButton}
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

};









