import classes from './index.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  state = {
    score: 0,
    pace: 1000,
    rounds: 0,
    currentActive: 0,
    btnStart: true,
    btnStop: false,
  };

  startHandler = () => {
    console.log('Start clicked');
    this.startGame();
  };

  startGame = () => {
    console.log('Game started');
    //Make all circles clickable
    this.setState((prevState) => ({ btnStart: !prevState.btnStart }));
    console.log(this.state.btnStart);
  };

  render() {
    return (
      <div className={classes.mainContainer}>
        <Header />
        <Modal />
        <h1>Hello {this.state.btnStart}</h1>
        <Main />

        <Footer start={this.startGame} data={this.state} />
      </div>
    );
  }
}

export default App;
