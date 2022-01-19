import styled from 'styled-components';

export const Button = styled.button`
  background: var(--color-blue-light);
  color: var(--color-shape);
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 0.3125rem;

  transition: filter 0.2s linear;

  &:hover {
    filter: brightness(0.9);
  }
`;
