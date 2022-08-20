import Button from './UI components/Button';
import classes from './Header.module.css';

const Header = props => {
  const { audio, score, toggleSound, difficulty, change } = props;
  //Change audio icon if audio is on
  let classSound = audio === true ? classes.soundOn : classes.soundOff;
  //Difficulty name based on number of circles
  // let diffName = difficulty
  return (
    <header>
      <h1>Catch the frog</h1>
      <h2>
        Your score: <span className={classes.scoreText}>{score}</span>
      </h2>

      <Button click={toggleSound}>
        <div className={classSound} alt='Audio off' />
      </Button>
      <div className={classes.difficulty}>
        <label htmlFor='difficulty'>Difficulty: {difficulty}</label>
        <input
          type='range'
          min='4'
          max='8'
          step='2'
          onChange={change}
          value={difficulty}
          id='difficulty'
        />
      </div>
    </header>
  );
};

export default Header;
