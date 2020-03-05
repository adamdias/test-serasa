import styled from 'styled-components/native';

export const CardEnterprise = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Price = styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: #656565;
  text-align: right;
`;

export const PriceDesc = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: #656565;
  text-align: right;
`;

export const PriceDiscount = styled.Text`
  font-size: 16px;
  font-weight: 300;
  text-decoration: line-through;
  text-align: right;
  color: #656565;
`;
