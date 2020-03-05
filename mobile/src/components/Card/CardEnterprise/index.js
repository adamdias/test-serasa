import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';

import * as S from './styled';

export default function CardEnterprise({
  cover,
  price,
  priceDesc,
  priceDiscount,
}) {
  return (
    <S.CardEnterprise>
      <Image style={{ width: 95, height: 36 }} source={cover} />

      <View>
        {priceDesc !== '' && <S.PriceDesc>{priceDesc}</S.PriceDesc>}
        {priceDiscount !== '' && (
          <S.PriceDiscount>{priceDiscount}</S.PriceDiscount>
        )}
        <S.Price>{price}</S.Price>
      </View>
    </S.CardEnterprise>
  );
}

CardEnterprise.propTypes = {
  cover: PropTypes.number,
  priceDesc: PropTypes.string,
  price: PropTypes.string,
  priceDiscount: PropTypes.string,
};

CardEnterprise.defaultProps = {
  cover: 0,
  priceDesc: '',
  price: '',
  priceDiscount: '',
};
