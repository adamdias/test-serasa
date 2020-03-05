import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export default function Container({ type, ...props }) {
  return <S.Container type={type} {...props} />;
}

Container.propTypes = {
  type: PropTypes.string,
};

Container.defaultProps = {
  type: '',
};
