import classes from './Circle.module.css';
const Circle = ({ active, click, children }) => {
  return (
    <div
      className={
        //If circle is active display the frog on a lilypad
        active ? `${classes.circles} ${classes.active}` : `${classes.circles}`
      }
      onClick={click}
    >
      {children}
    </div>
  );
};

export default Circle;
