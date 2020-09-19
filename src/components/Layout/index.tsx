import React from 'react';

import LeftBar from '../Leftbar';
import Middle from '../Middle';
import RightBar from '../Rightbar';
import NavBar from '../Navbar';

import * as S from './styles';

const Layout: React.FC = () => {
  return (
    <S.Container>
      <NavBar />
      <S.Layout>
        <LeftBar />
        <Middle />
        <RightBar />
      </S.Layout>
    </S.Container>
  );
};

export default Layout;
