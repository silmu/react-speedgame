import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={classes.btns}
      onClick={props.click}
    >
      {props.children}
    </button>
  );
};
export default Button;
