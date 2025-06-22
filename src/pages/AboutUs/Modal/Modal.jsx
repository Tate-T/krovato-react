import styles from "./Modal.module.scss";

export const Modal = (toggleModal) => {
  return (
    <div className={styles.modal} id="modal">
      <div className={styles.modalContent} id="modalContent">
        <h3 className={styles.subtitle}>Ой!</h3>
        <p className={styles.text}>
          На жаль, цей контент ще недоступний. Перепрошуємо за труднощі!
        </p>
        <button className={styles.btn} onClick={toggleModal}>
          Ояк
        </button>
      </div>
    </div>
  );
};
