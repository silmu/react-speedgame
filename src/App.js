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
    this.setState({ btnStart: false, btnStop: true });
  };

  render() {
    return (
      <div className={classes.mainContainer}>
        <Header />
        <Modal />
        <Main />
        <Footer start={this.startHandler} data={this.state} />
      </div>
    );
  }
}

export default App;
