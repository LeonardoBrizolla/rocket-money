import { Total } from './styles';

type TotalRocketProps = {
  content: string;
  labelName: string;
};

export const TotalRocket = ({ content, labelName }: TotalRocketProps) => (
  <Total>
    {labelName === 'Saídas' && '-'}
    {content}
  </Total>
);
