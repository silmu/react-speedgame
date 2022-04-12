import classes from './Modal.module.css';

const Modal = (props) => {
  const modalOn = props.modal ? '' : classes.hidden;

  let score;
  if (props.score > 44) {
    score = ' Amazing! 🥇';
  } else if (props.score > 29 && props.score < 45) {
    score = ' Good gob! 🥈';
  } else if (props.score > 20 && props.score < 30) {
    score = ' Nice! 🥉';
  } else {
    score = '';
  }
  return (
    <div className={`${classes.containerGameover} ${modalOn}`}>
      <div className={classes.containerGameoverModal}>
        <div className={classes.contentGameover}>
          <h2>
            Your final score: {props.score}
            <br />
            {score}
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
