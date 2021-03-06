import styled from 'styled-components';
import { colors } from '../../../config';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  border: 4px solid ${colors.gunmetal};
  grid-gap: 1px;
  background-color: ${colors.gunmetal};
  box-sizing: border-box;
`;

export const GridCell = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.isabelline};
  box-sizing: border-box;
  color: ${colors.gunmetal};
  font-weight: bold;
  font-size: ${props => props.fontSize}px;
  outline: none;
  cursor: pointer;
  border: none;
`;
