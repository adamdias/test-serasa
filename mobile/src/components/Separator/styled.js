import styled from 'styled-components/native';

export const Separator = styled.View`
  width: 100%;
  background-color: #656565;

  ${({ height }) => height && `height: ${height}px;`}
  ${({ mt }) => mt && `margin-top: ${mt}px;`}
  ${({ mb }) => mb && `margin-bottom: ${mb}px;`}
`;
