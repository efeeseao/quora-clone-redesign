import React from 'react';

import Panel from '../../Panel';

import * as S from './styles';

const FeedShare: React.FC = () => {
  return (
    <Panel>
      <S.Container>
        <S.WriteField>
          <S.WriteImg src='https://github.com/codder404.png' alt='Fernando' />
          <S.WriteText>What is your question or link?</S.WriteText>
        </S.WriteField>
      </S.Container>
    </Panel>
  );
};

export default FeedShare;
