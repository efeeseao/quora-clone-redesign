import styled, { css } from 'styled-components';
import { Upvote, ShareAlt } from '@styled-icons/boxicons-regular';
import { Comment } from '@styled-icons/evil';

export const Container = styled.main`
  margin-top: 8px;

  @media (min-width: 1180px) {
    margin-top: 1rem;
  }
`;

export const Row = styled.section`
  display: flex;
  margin: 0 1rem;
`;

export const Heading = styled.div`
  padding: 0.75rem 0 8px;
`;

export const Avatar = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  margin-right: 8px;
  margin-bottom: 8px;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 0.875rem;
  color: var(--color-black);
`;

export const SubTitle = styled.h4`
  font-size: 0.75rem;
  font-weight: normal;
  color: var(--color-gray);
  margin-right: 0.75rem;
`;

export const Update = styled.time`
  font-size: 0.75rem;
  font-weight: normal;
  color: var(--color-gray);
`;

export const PostImage = styled.img`
  width: 100%;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid var(--color-separator);
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 1180px) {
    justify-content: flex-start;
  }
`;

export const FeedIcons = styled.button`
  display: flex;
  align-items: center;
  padding: 0.875rem 8px;

  background: none;
  border: none;
  outline: none;
  color: var(--color-gray);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;

  &:hover,
  &:focus {
    background: rgba(0, 0, 0, 0.05);
  }

  > span {
    display: none;

    @media (min-width: 1180px) {
      display: unset;
    }
  }
`;

const iconCSS = css`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 4px;
`;

export const UpVoteIcon = styled(Upvote)`
  ${iconCSS}
`;

export const Share = styled(ShareAlt)`
  ${iconCSS}
`;

export const CommentIcon = styled(Comment)`
  ${iconCSS}
`;
