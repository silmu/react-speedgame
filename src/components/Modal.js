import classes from './Modal.module.css';
import Button from './UI components/Button';

const Modal = ({ modal, score, topScore, close }) => {
  //If modal is off add .hidden to class name
  const modalOn = modal ? '' : classes.hidden;

  let message;
  if (score > 44) {
    message = ' Amazing! 🥇';
  } else if (score > 29 && score < 45) {
    message = ' Good job! 🥈';
  } else if (score > 20 && score < 30) {
    message = ' Nice! 🥉';
  } else {
    message = '';
  }
  return (
    <div className={`${classes.containerGameover} ${modalOn}`}>
      <div className={classes.containerGameoverModal}>
        <div className={classes.contentGameover}>
          <h2>
            Your final score:{score}
            <br />
            <div className={classes.score}>{message}</div>
          </h2>
          <p>✨🌟⭐ Top score: {topScore} ⭐🌟✨</p>
          <Button click={close}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
