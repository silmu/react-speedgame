import classes from './Footer.module.css';
const Footer = (props) => {
  //If Start is clicked show Stop button
  let button;
  if (props.data.btnStart === true) {
    button = (
      <button
        onClick={props.start}
        type="button"
        className={classes.btns}
        id={classes.btnStart}
      >
        Start game
      </button>
    );
  } else {
    button = (
      <button
        type="button"
        className={classes.btns}
        id={classes.btnStop}
        onClick={props.stop}
      >
        Stop game
      </button>
    );
  }
  return (
    <footer>
      {button}
      <div className={classes.credits}>
        <a
          href="https://www.freepik.com/vectors/water"
          target="_blank"
          rel="noreferrer"
        >
          Water vector created by pikisuperstar - www.freepik.com
        </a>
      </div>
    </footer>
  );
};
export default Footer;
