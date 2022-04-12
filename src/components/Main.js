import classes from './Main.module.css';
import Circle from './Circle';
const Main = (props) => {
  //Check which circle is active
  let checkActive = (num) => {
    return props.active === num;
  };
  //Check if game is on, make circles clickable
  const isGameOn = () => {
    return props.gameOn ? '' : classes.notClickable;
  };
  return (
    <main>
      <div className={` ${classes.containerCircles} ${isGameOn()}`}>
        <Circle
          click={props.click}
          active={checkActive(0)}
          gameOn={props.gameOn}
        >
          0
        </Circle>
        <Circle click={props.click} active={checkActive(1)}>
          1
        </Circle>
        <Circle click={props.click} active={checkActive(2)}>
          2
        </Circle>
        <Circle click={props.click} active={checkActive(3)}>
          3
        </Circle>
      </div>
    </main>
  );
};

export default Main;
