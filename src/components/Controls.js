import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ControlsButton = styled(Button)`
  font-size: 18px;
  padding: 5px 10px;

  & + & {
    margin-left: 5px;
  }
`;

class Controls extends Component {
  render() {
    return (
      <ControlsWrapper>
        <ControlsButton
          label="Menu"
          onClick={this.props.onMenuClick}
        />

        <ControlsButton
          label="Restart"
          onClick={this.props.onRestartClick}
        />
      </ControlsWrapper>
    );
  }
}

export default Controls;
