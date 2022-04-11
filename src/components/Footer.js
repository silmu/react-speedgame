import classes from './Footer.module.css';
const Footer = (props) => {
  if (props.data.btnStart === true) {
    return (
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
    return (
      <button type="button" className={classes.btns} id={classes.btnStop}>
        Stop game
      </button>
    );
  }
  return (
    <footer>
      {/* <button
        onClick={props.start}
        type="button"
        className={classes.btns}
        id={classes.btnStart}
      >
        Start game
      </button>
      <button type="button" className={classes.btns} id={classes.btnStop}>
        Stop game
      </button> */}

      <div className={classes.credits}>
        <a href="https://www.freepik.com/vectors/water">
          Water vector created by pikisuperstar - www.freepik.com
        </a>
      </div>
    </footer>
  );
};
export default Footer;
