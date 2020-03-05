import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import * as S from './styled';

export default function HeaderProfile({ name, imgUri, img }) {
  return (
    <>
      {imgUri !== '' && (
        <Image style={S.styles.image} source={{ uri: imgUri }} />
      )}

      {img !== 0 && <Image style={S.styles.image} source={img} />}

      <S.Name>{name}</S.Name>
    </>
  );
}

HeaderProfile.propTypes = {
  name: PropTypes.string,
  img: PropTypes.number,
  imgUri: PropTypes.string,
};

HeaderProfile.defaultProps = {
  name: '',
  img: 0,
  imgUri: '',
};
