import React, { Component, Fragment } from 'react';
import { Container, GlobalStyles } from './App.primitives';
import Menu from '../../features/menu/Menu';

const SCREENS = {
  MENU: 0,
  GAMEPLAY: 1,
  RESULTS: 2,
};

class App extends Component {
  state = {
    screen: SCREENS.MENU
  };

  setScreen = (screen) => {
    this.setState({ screen });
  };

  render() {
    return (
      <Fragment>
        <GlobalStyles />

        <Container>
          {this.state.screen === 0 && <Menu onScreenChange={this.setScreen} />}
        </Container>
      </Fragment>
    );
  }
}

export default App;
