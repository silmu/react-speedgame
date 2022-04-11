import classes from './Main.module.css';
import Circle from './Circle';
const Main = () => {
  return (
    <main>
      <div className={classes.containerCircles}>
        <Circle>1</Circle>
        <Circle>2</Circle>
        <Circle>3</Circle>
        <Circle>4</Circle>
      </div>
    </main>
  );
};

export default Main;
