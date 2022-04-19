import classes from './index.css';
import React, { Component } from 'react';

import Header from './components/Header';
import Modal from './components/Modal';
import Main from './components/Main';
import Footer from './components/Footer';
import sound from './audio/frog.ogg';
let timer;
let audio = new Audio(sound);

class App extends Component {
  state = {
    numberOfCircles: 4,
    score: 0,
    pace: 1000,
    rounds: 0,
    random: '',
    userSelection: 0,
    gameOn: false,
    btnStart: true,
    btnStop: false,
    modal: false,
    audio: false,
    topScore: localStorage.getItem('topScore'),
  };

  playSound = () => {
    audio.play();
  };

  toggleSound = () => {
    this.setState({ audio: !this.state.audio });
  };

  difficultyHandler = (e) => {
    this.setState({ numberOfCircles: e.target.value });
  };

  //Set timer that starts the game and gives 1000 msec to click on a circle
  setTimer = () => {
    timer = setTimeout(() => this.startGame(), this.state.pace);
    return timer;
  };

  selectRandom = () => {
    //Generate a random number
    let prevRandom = this.state.random;
    let newRandom = Math.floor(
      Math.random() * (this.state.numberOfCircles - 1)
    );
    //If number mathes to the last number reselect
    while (prevRandom === newRandom) {
      newRandom = Math.floor(Math.random() * (this.state.numberOfCircles - 1));
    }
    this.setState({ random: newRandom });
  };

  startHandler = () => {
    console.log('Start clicked');

    this.setState({
      btnStart: false,
      btnStop: true,
    });

    this.startGame();
  };

  startGame = () => {
    console.log('Game started');
    //Play audio if not muted
    if (this.state.audio === true) {
      this.playSound();
    }
    this.setTimer();
    this.selectRandom();
    this.setState({
      gameOn: true,
      rounds: this.state.rounds + 1,
      pace: this.state.pace - 10,
    });
    if (this.state.rounds >= 5) {
      this.endGameHandler();
    }
  };

  endGameHandler = () => {
    console.log('Game ended');
    this.setTopScore();
    clearTimeout(timer);
    this.setState({
      modal: true,
    });
  };

  circleClickHandler = (e) => {
    //Save the number of selected circle
    let selected = e.target.innerHTML;
    this.setState({ userSelection: selected });

    //If selected circle is not the same as current random end game
    // eslint-disable-next-line
    if (selected != this.state.random) {
      //Give user 3 attempts to misclick
      this.setState({ rounds: this.state.rounds + 1 });
    }
    // this.endGameHandler();
    else {
      this.setState({
        score: this.state.score + 1,
        rounds: this.state.rounds - 1,
      });
    }
  };

  closeHandler = () => {
    this.setState({ modal: false });
    console.log('Close is clicked');
    window.location.reload();
  };

  setTopScore = () => {
    console.log(this.state.score + ' top score:' + this.state.topScore);
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
      localStorage.setItem('topScore', this.state.score);
    }
    //Get score
    //If score is higher than top score
    //Set score as top score if it's higher
    //Send score to localStorage
    //Render top scores in modal
  };

  render() {
    return (
      <div className={classes.mainContainer}>
        <Header
          score={this.state.score}
          toggleSound={this.toggleSound}
          audio={this.state.audio}
          change={this.difficultyHandler}
          difficulty={this.state.numberOfCircles}
        />
        <Modal
          modal={this.state.modal}
          close={this.closeHandler}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Main
          click={this.circleClickHandler}
          active={this.state.random}
          gameOn={this.state.gameOn}
          numberOfCircles={this.state.numberOfCircles}
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
