import classes from './Circle.module.css';
const Circle = (props) => {
  return (
    <div
      className={
        //If circle is active display the frog on a lilypad
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
