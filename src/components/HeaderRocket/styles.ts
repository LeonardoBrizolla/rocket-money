import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--color-blue);

  div {
    max-width: 1120px;
    margin: 0 auto;
    padding: 3.125rem 1rem 8.75rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 0.75rem 2rem;
  }

  img {
    width: 10.75rem;
    height: 2.5rem;
  }
`;
