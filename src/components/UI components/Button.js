//Refactor with buttons
const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={props.name}
      onClick={props.click}
    >
      {props.children}
    </button>
  );
};
export default Button;
