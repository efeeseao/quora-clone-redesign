import React from 'react';

import * as S from './styles';

const spaces = ['Music', 'Programming', 'Philosofy', 'Game', 'Nerd Space'];

const Spaces: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Discover Spaces</S.Title>

      {spaces.map((space, index) => (
        <S.SpacesTag key={index}>
          <S.SpaceImg src='https://github.com/codder404.png' />
          {space}
        </S.SpacesTag>
      ))}
    </S.Container>
  );
};

export default Spaces;
