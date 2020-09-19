import React from 'react';

import Panel from '../../Panel';
import Post from '../../Post';

import dog from '../../../assets/images/dog.jpg';
import * as S from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <S.Container>
        <S.Row>
          <S.Heading>
            <S.Column>
              <S.Avatar src='https://github.com/codder404.png' alt='Fernando' />
              <S.Title>Fernando</S.Title>
              <S.Update>Update November, 2019</S.Update>
            </S.Column>
            <S.Column>
              <S.SubTitle>Front-End Developer</S.SubTitle>
            </S.Column>
          </S.Heading>
        </S.Row>

        <Post
          title='What is like to meet Jackie Chan?'
          text='Right after the set, I’m just ordinary people'
          img={dog}
          alt='Elon Musk'
        />

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
    </Panel>
  );
};

export default FeedPost;
