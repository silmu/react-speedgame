import classes from './Header.module.css';
import Button from './UI components/Button';

const Header = (props) => {
  //Change audio icon if audio is on
  let classSound = props.audio === true ? classes.soundOn : classes.soundOff;
  return (
    <header>
      <h1>Catch the frog</h1>
      <h2>
        Your score: <span className={classes.scoreText}>{props.score}</span>
      </h2>

      <Button click={props.toggleSound}>
        <div className={classSound} alt="Audio off" />
      </Button>
    </header>
  );
};

export default Header;
