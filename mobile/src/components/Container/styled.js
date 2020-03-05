import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  padding-bottom: 20px;
  width: 100%;
  ${({ type }) => type === 'container-header' && 'margin-top: -65px;'}
`;
