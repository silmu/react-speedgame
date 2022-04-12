import classes from './Main.module.css';
import Circle from './Circle';
const Main = (props) => {
  return (
    <main>
      <div className={classes.containerCircles}>
        {props.active === 0 ? (
          <Circle click={props.click} active={true}>
            0
          </Circle>
        ) : (
          <Circle click={props.click} active={false}>
            0
          </Circle>
        )}
        {props.active === 1 ? (
          <Circle click={props.click} active={true}>
            1
          </Circle>
        ) : (
          <Circle click={props.click} active={false}>
            1
          </Circle>
        )}
        {props.active === 2 ? (
          <Circle click={props.click} active={true}>
            2
          </Circle>
        ) : (
          <Circle click={props.click} active={false}>
            2
          </Circle>
        )}
        {props.active === 3 ? (
          <Circle click={props.click} active={true}>
            3
          </Circle>
        ) : (
          <Circle click={props.click} active={false}>
            3
          </Circle>
        )}
      </div>
    </main>
  );
};

export default Main;
