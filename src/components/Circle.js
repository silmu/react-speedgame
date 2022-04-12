import classes from './Circle.module.css';
const Circle = (props) => {
  //If circle is active display the frog on a lilypad
  return (
    <div
      className={
        props.active
          ? `${classes.circles} ${classes.active}`
          : `${classes.circles}`
      }
      onClick={props.click}
    >
      {props.children}
    </div>
  );
};

export default Circle;
