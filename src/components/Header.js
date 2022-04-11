import classes from './Header.module.css';

const Header = () => {
  return (
    <header>
      <h1>Catch the frog</h1>
      <h2>
        Your score: <span className="scoreText">0</span>
      </h2>

      <button className={classes.btnAudio}>
        <i className="fa-solid fa-volume-high"></i>
        <i className="fa-solid fa-volume-xmark"></i>
      </button>
    </header>
  );
};

export default Header;
