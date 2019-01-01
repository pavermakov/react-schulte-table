import React, { Component } from 'react';
import styled from 'styled-components';

const SECOND = 1000;
const MINUTE = SECOND * 60;

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

  get formattedTime() {
    const { ms } = this.state;
    const minutes = Math.floor(ms / MINUTE);
    const seconds = ms % MINUTE / SECOND;

    return `${this.getDigit(minutes)} : ${this.getDigit(seconds)}`;
  }

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
    this.interval = setInterval(this.tick, SECOND);
  };

  stop = () => {
    this.setState({ ms: 0 });
    clearInterval(this.interval);
  };

  tick = () => {
    const nextValue = this.state.ms + SECOND;

    this.setState({ ms: nextValue });
    this.props.onTick(nextValue);
  };

  getDigit = (value) => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  render() {
    return (
      <TimerWrapper>
        {this.formattedTime}
      </TimerWrapper>
    );
  }
}

export default Timer;
