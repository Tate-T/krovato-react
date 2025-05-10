import React from "react";
import styles from './Basket.module.scss'
class Basket extends React.Component {
    render() {
        return (
            <div className={styles.wrapperBasket}>
                <button className={styles.btnOrder} onClick={this.props.orderButton}>ОФОРМИТИ ЗАМОВЛЕННЯ</button>
            </div>
        )
    }
}
export default Basket;