import styled from 'styled-components';
import Grid from './Grid/Grid';
import { constants } from '../../config';

export const GameplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const GameplayBody = styled.div`
  position: relative;
  overflow: hidden;
  width: 50%;

  :before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  @media (max-width: ${constants.mediaQueries.medium}px) {
    width: 100%;
  }
`;

export const GameplayContent = styled.div`
  position:  absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: white;
  text-align: center;
`;

export const GameplayGrid = styled(Grid)`
  height: 100%;
`;

export const GameplayValue = styled.div`
  font-size: 20px;
`;

export const GameplayToolbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin-top: 10px;

  @media (max-width: ${constants.mediaQueries.medium}px) {
    width: 100%;
    flex-direction: column;
  }
`;
