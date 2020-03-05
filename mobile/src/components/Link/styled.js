import styled from 'styled-components/native';

export const BoxLink = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Link = styled.Text`
  font-size: 17px;
  font-weight: 800;
  ${({ color }) => color && `color: ${color};`};
  ${({ img }) => img && `margin-right: 10px;`};
`;
