import React from 'react';

import logo from '../../assets/images/logo.svg';

import * as G from '../../styles/globalStyles';
import * as S from './styles';

const Navbar: React.FC = () => {
  return (
    <S.Nav>
      <S.NavbarContainer>
        <S.NavLeft>
          <S.NavQuoraLogo>
            <S.QuoraLogo src={logo} alt='' />
            <S.SearchInput
              type='search'
              name='search'
              placeholder='Search Quora'
            />
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
              <span>Add language</span>
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

export default Navbar;
