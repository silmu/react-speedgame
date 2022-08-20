import classes from './Main.module.css';
import Circle from './Circle';
const Main = ({ active, gameOn, numberOfCircles, click }) => {
  //Check which circle is active
  let checkActive = num => {
    return active === num;
  };
  //Check if game is on, make circles clickable
  const isGameOn = () => {
    return gameOn ? '' : classes.notClickable;
  };

  //Creating array of circles
  const circlesArr = [];
  for (let i = 0; i < numberOfCircles; i++) {
    circlesArr.push(
      <Circle click={click} active={checkActive(i)} key={i}>
        {i}
      </Circle>
    );
  }

  return (
    <main>
      <div className={` ${classes.containerCircles} ${isGameOn()}`}>
        {circlesArr}
      </div>
    </main>
  );
};

export default Main;
