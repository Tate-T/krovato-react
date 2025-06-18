import { Component } from 'react';
import styles from './Modal.module.scss'

export class Modal extends Component {
    render(){
        return(
            <div className={styles.modal} id="modal">
            <div className={styles.modalContent} id="modalContent">
                <h3 className={styles.subtitle}>Ой!</h3>
                <p className={styles.text}>На жаль, цей контент ще недоступний. Перепрошуємо за труднощі!</p>
                <button className={styles.btn} onClick={this.props.toggleModal}>Ояк</button>
            </div>
        </div>
        )
    }
}
