import styled from 'styled-components';
import { Check } from '@styled-icons/boxicons-regular';

export const Container = styled.aside``;

export const FeedTitle = styled.span`
  font-size: 1rem;
`;

export const FeedMenu = styled.ul`
  list-style: none;
  margin-top: 8px;
`;

export const FeedItem = styled.li`
  display: flex;
  align-items: center;
`;

export const FeedIcon = styled(Check)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-check);
`;
