import React, { Component } from 'react';
import { GridWrapper, GridCell } from './Grid.primitives';

class Grid extends Component {
  selectValue = ({ nativeEvent }) => {
    this.props.onSelect(+nativeEvent.target.textContent);
  };

  render() {
    return (
      <GridWrapper>
        {this.props.values.map((value) => (
          <GridCell
            key={value}
            onClick={this.selectValue}
          >{value}</GridCell>
        ))}
      </GridWrapper>
    );
  }
}

export default Grid;
