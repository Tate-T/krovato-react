import React from "react";
import styles from './Basket.module.scss'
class BasketButton extends React.Component {
    render() {
        return (
                <button className={styles.btnOrder} onClick={this.props.orderButton}>ОФОРМИТИ ЗАМОВЛЕННЯ</button>
        )
    }
}
export default BasketButton;