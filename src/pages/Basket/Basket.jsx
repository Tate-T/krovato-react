import React, { Fragment } from "react";
//import Container from "../../components/Container/Container";
import Form from "./Form";
import styles from './Basket.module.scss'
class Basket extends React.Component {
    render() {
        return (
            <Fragment>
                <section>  
                     <Form />
                        <div className={styles.wrapperBasket}> 
                        </div>
                </section>
            </Fragment>
        )
    }
}
export default Basket;