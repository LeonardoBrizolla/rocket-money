import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--color-text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--color-shape);
      color: var(--color-text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--color-text-title);
      }

      &.deposit {
        color: var(--color-green);
      }

      &.withdraw {
        color: var(--color-red);
      }
    }
  }
`;
