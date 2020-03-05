import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import * as S from './styled';

export default function Link({ text, img, color, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <S.BoxLink>
        <S.Link img={img} color={color}>
          {text}
        </S.Link>

        {img !== 0 && <Image style={{ width: 15, height: 15 }} source={img} />}
      </S.BoxLink>
    </TouchableOpacity>
  );
}

Link.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.number,
  onPress: PropTypes.func,
};

Link.defaultProps = {
  color: '#883570',
  text: '',
  img: 0,
  onPress: undefined,
};
