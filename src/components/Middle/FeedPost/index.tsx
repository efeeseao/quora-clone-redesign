import React from 'react';

import * as S from './styles';

const FeedPost: React.FC = () => {
  return (
    <S.Container>
      <S.Row>
        <S.Heading>
          <S.Avatar src='htts://github.com/codder404.png' />
          <S.Column>
            <S.Title>Fernando</S.Title>
            <S.SubTitle>Front-End Dev</S.SubTitle>
            <S.Update>Update November, 2019</S.Update>
          </S.Column>
        </S.Heading>
      </S.Row>
      <S.PostImage
        src='https://qph.fs.quoracdn.net/main-qimg-a37c821185f88512a32d7034646144a6'
        alt='Elon Musk'
      />

      <S.Row>
        <S.Likes>
          <S.SpanBlue>One</S.SpanBlue>
          <S.SpanGray>Two</S.SpanGray>
          <S.SpanGray>Three</S.SpanGray>
        </S.Likes>
      </S.Row>
      <S.Row>
        <S.Separator />
      </S.Row>
      <S.Row>
        <S.Actions>
          <S.FeedIcons>
            <S.UpVoteIcon />
            <span>115.9 K</span>
          </S.FeedIcons>
          <S.FeedIcons>
            <S.Share />
            <span>147</span>
          </S.FeedIcons>
          <S.FeedIcons>
            <S.CommentIcon />
            <span>743</span>
          </S.FeedIcons>
        </S.Actions>
      </S.Row>
    </S.Container>
  );
};

export default FeedPost;
