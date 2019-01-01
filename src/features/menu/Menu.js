import React, { Component } from 'react';
import { MenuContainer, MenuInstructions, MenuButton } from './Menu.primitives';
import { Title } from '../../components/App/App.primitives';

class Menu extends Component {
  startGame = () => {
    this.props.onScreenChange(1);
  }

  render() {
    return (
      <MenuContainer>
        <Title>Schulte Table</Title>

        <MenuInstructions>
          Focus on the grid centre and find all the numbers (letters) with your peripheral vision, i.e. without moving your eyes
        </MenuInstructions>

        <MenuButton
          label={"start"}
          onClick={this.startGame}
        />
      </MenuContainer>
    );
  }
}

export default Menu;
