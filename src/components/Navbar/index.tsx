import React from 'react';

import QuoraLogo from '../../assets/images/quora-ar21.svg';

import * as G from '../../styles/globalStyles';
import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Nav>
      <S.NavbarContainer>
        <S.NavLeft>
          <S.NavQuoraLogo>
            <QuoraLogo />
            <S.SearchInput placeholder='Search Quora' />
          </S.NavQuoraLogo>
        </S.NavLeft>

        <S.NavRight>
          <S.NavMenu>
            <S.NavItem>
              <S.HomeIcon />
              <span>Home</span>
            </S.NavItem>
            <S.NavItem>
              <S.Answer />
              <span>Answer</span>
            </S.NavItem>
            <S.NavItem>
              <S.Spaces />
              <span>Spaces</span>
            </S.NavItem>
            <S.NavItem>
              <S.NotificationsIcon />
              <span>Notifications</span>
            </S.NavItem>
            <S.NavItem>
              <S.Global />
            </S.NavItem>
            <S.NavBtn>
              <G.Button>Add Question</G.Button>
            </S.NavBtn>
            <S.NavItem>
              <S.ProfileCircle src='https://github.com/codder404.png' />
            </S.NavItem>
          </S.NavMenu>
        </S.NavRight>
      </S.NavbarContainer>
    </S.Nav>
  );
};

export default Header;
