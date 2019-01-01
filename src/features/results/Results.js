import React, { Component } from 'react';
import styled from 'styled-components';
import { Title } from '../../components/App/App.primitives';
import Controls from '../../components/Controls';
import { constants, utils } from '../../config';

const ResultsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class Results extends Component {
  returnToMenu = () => {
    this.props.onScreenChange(constants.screens.menu);
  };

  restart = () => {
    this.props.onScreenChange(constants.screens.gameplay);
  };

  render() {
    return (
      <ResultsContainer>
        <Title>Your time:</Title>
        <Title>{utils.formatTime(this.props.time)}</Title>

        <Controls
            onMenuClick={this.returnToMenu}
            onRestartClick={this.restart}
          />
      </ResultsContainer>
    );
  }
}

export default Results;
