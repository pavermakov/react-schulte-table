import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from "../config";

const ButtonWrapper = styled.button`
  padding: 14px 60px 17px;
  font-size: 35px;
  background-color: ${colors.gunmetal};
  color: ${colors.isabelline};
  border-radius: 9999px;
`;

class Button extends Component {
  render() {
    return (
      <ButtonWrapper
        className={this.props.className}
        onClick={this.props.onClick}
      >{this.props.label}</ButtonWrapper>
    );
  }
}

export default Button;
