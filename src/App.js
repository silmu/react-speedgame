import classes from './index.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import Main from './components/Main';
import Footer from './components/Footer';
let timer;

class App extends Component {
  state = {
    score: 0,
    pace: 1000,
    rounds: 0,
    random: '',
    userSelection: 0,
    btnStart: true,
    btnStop: false,
    modal: false,
  };

  setTimer = () => {
    timer = setTimeout(() => this.startGame(), this.state.pace);
    return timer;
  };

  selectRandom = () => {
    //Generate a random number
    let prevRandom = this.state.random;
    let newRandom = Math.floor(Math.random() * 3);
    //If number mathes to the lat number reselect
    while (prevRandom === newRandom) {
      newRandom = Math.floor(Math.random() * 3);
    }
    this.setState({ random: newRandom });
    console.log('Current circle selected: ' + this.state.random);
  };

  startHandler = () => {
    console.log('Start clicked');

    this.setState({
      btnStart: !this.state.btnStart,
      btnStop: !this.state.btnStop,
    });

    this.startGame();
  };

  startGame = () => {
    console.log('Game started');
    this.setTimer();
    this.selectRandom();
    this.setState({ rounds: this.state.rounds + 1 });
    if (this.state.rounds >= 5) {
      this.endGameHandler();
    }
  };

  endGameHandler = () => {
    console.log('Game ended');
    clearTimeout(timer);
    this.setState({
      btnStart: !this.state.btnStart,
      btnStop: !this.state.btnStop,
      random: '',
      score: 0,
      modal: true,
    });
  };

  circleClickHandler = (e) => {
    //Save the number of selected circle
    let selected = e.target.innerHTML;
    this.setState({ userSelection: selected });
    console.log(this.state.userSelection);

    //If selected circle is not the same as current random end game
    if (selected != this.state.random) this.endGameHandler();
    else {
      this.setState({
        score: this.state.score + 1,
        rounds: this.state.rounds + 1,
      });
    }
  };

  closeHandler = () => {
    this.setState({ modal: false });
    console.log('Close is clicked');
  };

  render() {
    return (
      <div className={classes.mainContainer}>
        <Header score={this.state.score} />
        <Modal modal={this.state.modal} close={this.closeHandler} />
        <Main
          click={this.circleClickHandler}
          active={this.state.random}
          gameOn={this.state.btnStop}
        />
        <Footer
          start={this.startHandler}
          stop={this.endGameHandler}
          data={this.state}
        />
      </div>
    );
  }
}

export default App;
