import React, { Component } from 'react';
import { GameplayContainer, GameplayBody, GameplayContent, GameplayValue, GameplayGrid, GameplayToolbar } from './Gameplay.primitives';

import Controls from '../../components/Controls';
import Timer from '../../components/Timer';
import { utils, constants } from '../../config';

const NUMBERS = [...Array(constants.gridSize + 1).keys()].slice(1);

class Gameplay extends Component {
  state = {
    numbers: [],
    nextNumber: 1,
    timerKey: Date.now()
  };

  componentDidMount() {
    this.setState({ numbers: this.getShuffledNumbers() });
  }

  checkSelectedValue = (value) => {
    if (value === this.state.nextNumber) {
      this.proceedToNextStage();
    }
  };

  proceedToNextStage = () => {
    if (this.state.nextNumber === constants.gridSize) {
      // go to results view
      return this.props.onScreenChange(constants.screens.results);
    }

    this.incrementNumber();
  };

  incrementNumber = () => {
    this.setState((prevState) => ({
      nextNumber: prevState.nextNumber + 1,
      numbers: this.getShuffledNumbers()
    }));
  };

  getShuffledNumbers = () => {
    return utils.shuffle(NUMBERS);
  };

  returnToMenu = () => {
    this.props.onScreenChange(constants.screens.menu);
  };

  restart = () => {
    this.setState({
      numbers: this.getShuffledNumbers(),
      nextNumber: 1,
    });

    this.setState({ timerKey: Date.now() })
  };

  render() {
    return (
      <GameplayContainer>
        <GameplayBody>
          <GameplayContent>
            <GameplayGrid
              values={this.state.numbers}
              onSelect={this.checkSelectedValue}
            />
          </GameplayContent>
        </GameplayBody>

        <GameplayToolbar>
          <GameplayValue>Next value: {this.state.nextNumber}</GameplayValue>

          <Timer
            timerKey={this.state.timerKey}
            onTick={this.props.onTick}
          />

          <Controls
            onMenuClick={this.returnToMenu}
            onRestartClick={this.restart}
          />
        </GameplayToolbar>
      </GameplayContainer>
    );
  }
}

export default Gameplay;
