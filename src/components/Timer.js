import React, { Component } from 'react';
import styled from 'styled-components';
import { constants, utils } from '../config';

const TimerWrapper = styled.div`
  font-size: 28px;
  width: 100px;
  text-align: center;
`;

class Timer extends Component {
  state = {
    ms: 0,
  };

  interval = null;

  componentDidMount() {
    if (this.props.staticValue !== undefined) {
      return this.setState({ ms: this.props.staticValue });
    }

    this.start();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.timerKey !== nextProps.timerKey) {
      this.start();
    }
  }

  componentWillUnmount() {
    this.stop();
  }

  start = () => {
    this.stop();
    this.interval = setInterval(this.tick, constants.second);
  };

  stop = () => {
    this.setState({ ms: 0 });
    clearInterval(this.interval);
  };

  tick = () => {
    const nextValue = this.state.ms + constants.second;

    this.setState({ ms: nextValue });
    this.props.onTick(nextValue);
  };

  getDigit = (value) => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  render() {
    return (
      <TimerWrapper>
        {utils.formatTime(this.state.ms)}
      </TimerWrapper>
    );
  }
}

export default Timer;
