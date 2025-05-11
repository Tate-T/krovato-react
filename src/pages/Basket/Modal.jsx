import React from "react";
import styles from './Modal.module.scss'
import closeIcon from '../../images/basket/close.svg';
import logoModal from '../../images/basket/logo-modal.svg'
class Modal extends React.Component {
    render(){
        return(
            <div className={`${styles.modal} ${this.props.isModalOpen ? styles.show : ""}`} id="modal">
            <div className={styles.modalContent} id="modalContent">
                <button onClick={this.props.handleCloseModal} className={styles.closeButton}>
                    <img src={closeIcon} alt="close-icon"/>
                </button>
                <img src={logoModal} alt="logo-modal" className={styles.modalLogo}/>
                <div className={styles.modalIcon}>!</div>
                <p className={styles.textModal}>{this.props.modalMessage}</p>
            </div>
        </div>
        )
    }
}
export default Modal;