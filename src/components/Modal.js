import classes from './Modal.module.css';

const Modal = (props) => {
  const modalOn = props.modal ? '' : classes.hidden;
  return (
    <div className={`${classes.containerGameover} ${modalOn}`}>
      <div className={classes.containerGameoverModal}>
        <div className={classes.contentGameover}>
          <h2>
            Your final score: <span className={classes.scoreText}>0</span>
          </h2>
          <button type="button" className={classes.btns} onClick={props.close}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
