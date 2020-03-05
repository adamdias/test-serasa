import styled from 'styled-components/native';

export const TitleBox = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;

  ${({ icon }) => icon && 'margin-left: 5px;'}
  ${({ color }) => color && `color: ${color};`}
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #656565;
  margin-bottom: 20px;
`;
