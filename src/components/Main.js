import classes from './Main.module.css';
import Circle from './Circle';
const Main = (props) => {
  //Check which circle is active
  let checkActive = (num) => {
    return props.active === num;
  };
  return (
    <main>
      <div className={classes.containerCircles}>
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
