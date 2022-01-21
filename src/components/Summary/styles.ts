import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  transform: translateY(-50%);

  section {
    width: 21.875rem;
    padding: 1.5rem 2rem;
  }
`;
