import React, { Component } from 'react';
import { GridWrapper, GridCell } from './Grid.primitives';

class Grid extends Component {
  state = {
    fontSize: 20,
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize({ target: window });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = ({ target }) => {
    this.setState({ fontSize: Math.round(target.innerWidth / 22) });
  };

  selectValue = ({ nativeEvent }) => {
    this.props.onSelect(+nativeEvent.target.textContent);
  };

  render() {
    return (
      <GridWrapper className={this.props.className}>
        {this.props.values.map((value) => (
          <GridCell
            key={value}
            fontSize={this.state.fontSize}
            onClick={this.selectValue}
          >{value}</GridCell>
        ))}
      </GridWrapper>
    );
  }
}

export default Grid;
