import classes from './Modal.module.css';

const Modal = () => {
  return (
    <div className={classes.containerGameover}>
      <div className={classes.containerGameoverModal}>
        <div className={classes.contentGameover}>
          <h2>
            Your final score: <span className={classes.scoreText}>0</span>
          </h2>
          <button type="button" className={classes.btns}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
