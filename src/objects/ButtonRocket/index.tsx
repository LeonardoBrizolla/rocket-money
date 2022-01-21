import { Button } from './styles';

type ButtonRocketProps = {
  content: string;
};

export const ButtonRocket = ({ content }: ButtonRocketProps) => {
  return <Button type="button">{content}</Button>;
};
