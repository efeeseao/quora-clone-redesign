import React from 'react';

import * as S from './styles';

interface PostProps {
  img: string;
  title: string;
  text: string;
  alt: string;
}

const Post: React.FC<PostProps> = ({ img, title, text, alt }) => {
  return (
    <S.Container>
      <h1>{title}</h1>
      <p>{text}</p>
      <img src={img} alt={alt} />
    </S.Container>
  );
};

export default Post;
