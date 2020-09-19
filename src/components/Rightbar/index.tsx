import React from 'react';

import Feed from './Feed';

import * as S from './styles';

const Rightbar: React.FC = () => {
  return (
    <S.Container>
      <Feed />
    </S.Container>
  );
};

export default Rightbar;
