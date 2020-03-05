import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export default function HeaderBox({ score, ...props }) {
  let colors = [];

  if (score <= 30) {
    colors = ['#E06A20', '#E2B212'];
  }

  if (score >= 31 && score <= 60) {
    colors = ['#6DC2BB', '#BEB43F'];
  }

  if (score > 60) {
    colors = ['#08606A', '#6BBDB7'];
  }

  return <S.HeaderBox colors={colors} {...props} />;
}

HeaderBox.propTypes = {
  score: PropTypes.number,
};

HeaderBox.defaultProps = {
  score: 1,
};
