import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import * as S from './styled';
import Separator from '../../Separator';

export default function CardTitle({ title, subtitle, color, icon }) {
  return (
    <>
      <S.TitleBox>
        {icon !== 0 && (
          <Image style={{ width: 25, height: 25 }} source={icon} />
        )}

        <S.Title icon={icon || false} color={color}>
          {title}
        </S.Title>
      </S.TitleBox>

      <Separator mt={10} mb={20} />

      <S.Subtitle>{subtitle}</S.Subtitle>
    </>
  );
}

CardTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.number,
};

CardTitle.defaultProps = {
  title: 'Título',
  subtitle: 'Esse é o subtítulo',
  color: 'blue',
  icon: 0,
};
