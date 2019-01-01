import styled from 'styled-components';
import Button from '../../components/Button';
import { colors } from "../../config";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 728px;
  padding: 40px;
  box-sizing: border-box;

  * + * {
    margin-top: 40px;
  }
`;

export const MenuInstructions = styled.p`
  padding: 0 20px;
  font-size: 28px;
  text-align: center;
  font-style: italic;
  color: ${colors.gunmetal};
`;

export const MenuButton = styled(Button)`

`;
