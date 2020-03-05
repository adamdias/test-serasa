import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export default function Separator({ height, mt, mb, ...props }) {
  return <S.Separator height={height} mt={mt} mb={mb} {...props} />;
}

Separator.propTypes = {
  height: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
};

Separator.defaultProps = {
  height: 1,
  mt: 0,
  mb: 0,
};
