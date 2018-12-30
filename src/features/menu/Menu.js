import React, { Component } from 'react';
import { MenuContainer, MenuTitle, MenuInstructions, MenuButton } from './Menu.primitives';

class Menu extends Component {
  startGame = () => {
    this.props.onScreenChange(1);
  }

  render() {
    return (
      <MenuContainer>
        <MenuTitle>Schulte Table</MenuTitle>

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
