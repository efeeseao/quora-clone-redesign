import React from 'react';

import * as S from './styles';

const FeedShare: React.FC = () => {
  return (
    <S.Container>
      <S.WriteField>
        <S.WriteImg src='https://github.com/codder404.png' />
        <S.WriteText>What is your question or link?</S.WriteText>
      </S.WriteField>
    </S.Container>
  );
};

export default FeedShare;
