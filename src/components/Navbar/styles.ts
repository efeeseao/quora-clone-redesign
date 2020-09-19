import styled, { css } from 'styled-components';
import { Home } from '@styled-icons/boxicons-solid';
import { QuestionAnswer } from '@styled-icons/material-outlined';
import { People, Notifications, Globe } from '@styled-icons/ionicons-outline';

const generalIconsCSS = css`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-gray);
`;

export const Nav = styled.header`
  background: var(--color-background);
  position: sticky;
  padding: 0 1.875rem;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  display: none;

  @media (min-width: 1180px) {
    display: block;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  max-width: 1128px;
  margin: 0 auto;
  height: 3.25rem;
`;

export const NavLeft = styled.div``;

export const NavQuoraLogo = styled.nav`
  display: flex;
  align-items: center;
`;

export const QuoraLogo = styled.img`
  flex-shrink: 0;
`;

export const SearchInput = styled.input`
  margin-left: 0.75rem;
  background: var(--color-white);
  font-size: 0.875rem;
  padding: 7.5px 8px;
  border: 0;
  outline: 0;
  border: 1px solid var(--color-input);
  border-radius: 0.3rem;

  &:hover {
    border: 1px solid var(--color-link);
  }
`;

export const NavRight = styled.div``;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const NavItem = styled.button`
  background: none;
  border: 0;
  outline: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100%;
  min-width: 90px;
  border-bottom: 2px solid transparent;

  color: var(--color-gray);
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid var(--color-quora);
  }
`;

export const HomeIcon = styled(Home)`
  ${generalIconsCSS}
`;

export const Answer = styled(QuestionAnswer)`
  ${generalIconsCSS}
`;

export const Spaces = styled(People)`
  ${generalIconsCSS}
`;

export const NotificationsIcon = styled(Notifications)`
  ${generalIconsCSS}
`;

export const Global = styled(Globe)`
  ${generalIconsCSS}
`;

export const NavBtn = styled.div``;

export const ProfileCircle = styled.img`
  margin-top: 0.4rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid var(--color-input);
`;
