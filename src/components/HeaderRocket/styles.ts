import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--color-blue);

  div {
    max-width: 1120px;
    margin: 0 auto;
    padding: 3rem 1rem 8rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 1rem 2rem;
  }

  img {
    width: 11rem;
    height: 3rem;
  }
`;
