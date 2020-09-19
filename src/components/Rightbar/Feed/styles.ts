import styled from 'styled-components';
import { Check } from '@styled-icons/boxicons-regular';

export const Container = styled.aside`
  margin-top: 2rem;
  margin-left: 2.625rem;
`;

export const FeedTitle = styled.span`
  font-size: 2rem;
  color: #000;
  font-weight: 500;
  padding: 1rem;
  border-radius: 4px;
  background: var(--color-border);
`;

export const FeedMenu = styled.ul`
  list-style: none;
  margin-top: 1.3rem;
`;

export const FeedItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--color-separator);
  background: var(--color-background);
`;

export const FeedIcon = styled(Check)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-check);
`;
