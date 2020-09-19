import styled from 'styled-components';

export const Container = styled.aside`
  position: sticky;
  top: 80px;
  margin-right: 2.625rem;
`;

export const Title = styled.span`
  color: var(--color-gray);
  padding: 4px;

  &:hover {
    background: var(--color-input);
    opacity: 0.8;
  }
`;

export const SpaceImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 8px;
  margin-right: 8px;
`;

export const SpacesTag = styled.span`
  color: var(--color-gray);
  display: flex;
  align-items: center;
  margin-top: 0.875rem;
  padding: 0.75rem 0.75rem 0.75rem 0;
  cursor: pointer;

  &:hover {
    background: var(--color-border);
    padding: 0.75rem;
  }
`;
