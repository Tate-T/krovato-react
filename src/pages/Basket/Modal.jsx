import styles from './Modal.module.scss'
import closeIcon from '../../images/basket/close.svg';
import logoModal from '../../images/basket/logo-modal.svg'
import { ContextModal } from "./ContextModal";
import { useContext } from "react";
export const Modal = () => {
    const {handleCloseModal, isModal , message } = useContext(ContextModal)
    return (
        <div className={`${styles.modal} ${isModal ? styles.show : ""}`} id="modal">
            <div className={styles.modalContent} id="modalContent">
                <button onClick={handleCloseModal} className={styles.closeButton}>
                    <img src={closeIcon} alt="close-icon" />
                </button>
                <img src={logoModal} alt="logo-modal" className={styles.modalLogo} />
                <div className={styles.modalIcon}>!</div>
                <p className={styles.textModal}>{message}</p>
            </div>
        </div>
    )
}
