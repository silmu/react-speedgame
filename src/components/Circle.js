import classes from './Circle.module.css';
const Circle = (props) => {
  if (props.active) {
    return (
      <div
        className={`${classes.circles} ${classes.active}`}
        onClick={props.click}
      >
        {props.children}
      </div>
    );
  } else {
    return (
      <div className={classes.circles} onClick={props.click}>
        {props.children}
      </div>
    );
  }
};

export default Circle;
