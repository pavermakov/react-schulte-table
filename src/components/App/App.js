import React, { Component, Fragment } from 'react';
import { Container, GlobalStyles } from './App.primitives';
import Menu from '../../features/menu/Menu';
import Gameplay from '../../features/gameplay/Gameplay';
import { constants } from '../../config';

class App extends Component {
  state = {
    screen: constants.screens.menu,
    elapsedTime: 0
  };

  setScreen = (screen) => {
    this.setState({ screen });
  };

  setElapsedTime = (elapsedTime) => {
    this.setState({ elapsedTime });
  };

  render() {
    return (
      <Fragment>
        <GlobalStyles />

        <Container>
          {this.state.screen === 0 && <Menu onScreenChange={this.setScreen} />}
          {this.state.screen === 1 && <Gameplay onTick={this.setElapsedTime} onScreenChange={this.setScreen} />}
        </Container>
      </Fragment>
    );
  }
}

export default App;
