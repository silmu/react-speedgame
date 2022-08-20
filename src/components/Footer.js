import classes from './Footer.module.css';
import Button from './UI components/Button';

const Footer = ({ data, start, stop }) => {
  //If Start is clicked show Stop button
  let button;
  if (data.btnStart === true) {
    button = <Button click={start}>Start game</Button>;
  } else {
    button = <Button click={stop}>Stop game</Button>;
  }
  return (
    <footer>
      {button}
      <div className={classes.credits}>
        <a
          href='https://www.freepik.com/vectors/water'
          target='_blank'
          rel='noreferrer'
        >
          Water vector created by pikisuperstar - www.freepik.com
        </a>
      </div>
    </footer>
  );
};
export default Footer;
