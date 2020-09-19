import React from 'react';

import * as S from './styles';

const feeds = [
  'Visit your feed',
  'Follow 5 more spaces',
  'Follow 20 more topics',
  'Ask a question',
  'Add 3 credentials',
];

const Feed: React.FC = () => {
  return (
    <S.Container>
      <S.FeedTitle>Improve Your Feed</S.FeedTitle>
      <S.FeedMenu>
        {feeds.map((feed, index) => (
          <S.FeedItem key={index}>
            <S.FeedIcon />
            {feed}
          </S.FeedItem>
        ))}
      </S.FeedMenu>
    </S.Container>
  );
};

export default Feed;
