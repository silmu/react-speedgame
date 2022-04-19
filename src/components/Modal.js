import classes from './Modal.module.css';
import Button from './UI components/Button';

const Modal = (props) => {
  //If modal is off add .hidden to class name
  const modalOn = props.modal ? '' : classes.hidden;

  let score;
  if (props.score > 44) {
    score = ' Amazing! 🥇';
  } else if (props.score > 29 && props.score < 45) {
    score = ' Good job! 🥈';
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
            Your final score:{props.score}
            <br />
            <div className={classes.score}>{score}</div>
          </h2>
          <p>✨🌟⭐ Top score: {props.topScore} ⭐🌟✨</p>
          <Button click={props.close}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
