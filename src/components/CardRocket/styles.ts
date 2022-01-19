import styled from 'styled-components';

export const Container = styled.section`
  background-color: var(--color-shape);
  border-radius: 0.3rem;

  &.-total {
    background-color: var(--color-green);
    color: var(--color-shape);

    label {
      color: inherit;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;
