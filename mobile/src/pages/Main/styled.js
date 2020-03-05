import styled from 'styled-components';
import styledNative from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Score = styledNative.Text`
  font-size: 70px;
  font-weight: bold;
  color: #656565;
  margin-bottom: 10px;
`;

export const ScoreDesc = styledNative.Text`
  font-size: 22px;
  font-weight: 500;
  color: #656565;
`;

export const ScoreInfo = styledNative.View`
  flex-direction: row;
  margin-top: 30px;
`;

export const ScoreInfoBox = styledNative.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  ${({ spacing }) => spacing && 'marginLeft: 1px; marginRight: 1px;'}
`;

export const ScoreInfoTitle = styledNative.Text`
  font-size: 16px;
  color: #656565;
  margin-bottom: 15px;
`;

export const ScoreInfoGradient = styled(LinearGradient)`
  width: 100%;
  padding: 7px;
`;
