import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  color: red;
  padding: 5px 40px 7px;
`;

class Button extends Component {
  render() {
    return (
      <ButtonWrapper className={this.props.className}>
        {this.props.label}
      </ButtonWrapper>
    );
  }
}

export default Button;
