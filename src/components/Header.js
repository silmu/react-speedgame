import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header>
      <h1>Catch the frog</h1>
      <h2>
        Your score: <span className={classes.scoreText}>{props.score}</span>
      </h2>

      <button className={classes.btnAudio}>
        <i className="fa-solid fa-volume-high"></i>
        <i className="fa-solid fa-volume-xmark"></i>
      </button>
    </header>
  );
};

export default Header;
