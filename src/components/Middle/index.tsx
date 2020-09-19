import React from 'react';

import FeedShare from './FeedShare';
import FeedPost from './FeedPost';

import * as S from './styles';

const Middle: React.FC = () => {
  return (
    <S.Container>
      <FeedShare />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </S.Container>
  );
};

export default Middle;
