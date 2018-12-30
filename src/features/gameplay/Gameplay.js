import React, { Component } from 'react';
import { GameplayContainer } from './Gameplay.primitives';
import Grid from '../../components/Grid/Grid';
import { utils, constants } from '../../config';

const NUMBERS = [...Array(constants.gridSize + 1).keys()].slice(1);

class Gameplay extends Component {
  state = {
    numbers: [],
    nextNumber: 1,
  };

  componentDidMount() {
    this.setState({ numbers: this.getShuffledNumbers() });
  }

  checkSelectedValue = (value) => {
    console.log(value)
    if (value === this.state.nextNumber) {
      this.proceedToNextStage();
    }
  };

  proceedToNextStage = () => {
    if (this.state.nextNumber === constants.gridSize) {
      // go to results view
      return this.props.onScreenChange(2);
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

  render() {
    return (
      <GameplayContainer>
        <Grid
          values={this.state.numbers}
          onSelect={this.checkSelectedValue}
        />
      </GameplayContainer>
    );
  }
}

export default Gameplay;
