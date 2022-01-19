import { Total } from './styles';

type TotalRocketProps = {
  content: string;
};

export const TotalRocket = ({ content }: TotalRocketProps) => (
  <Total>{content}</Total>
);
