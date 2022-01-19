import { Label } from './styles';

type LabelRocketProps = {
  labelName: string;
};

export const LabelRocket = ({ labelName }: LabelRocketProps) => (
  <Label>{labelName}</Label>
);
