import { Button } from './styles';

type ButtonRocketProps = {
  content: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
};

export const ButtonRocket = ({ content, type, onClick }: ButtonRocketProps) => {
  return (
    <Button type={type} onClick={onClick}>
      {content}
    </Button>
  );
};
