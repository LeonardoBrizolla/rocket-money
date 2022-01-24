import { Icon } from '../../objects/Icon';
import { LabelRocket } from '../../objects/LabelRocket';
import { TotalRocket } from '../../objects/TotalRocket';

import { Container, Header } from './styles';

type CardProps = {
  content: string;
  src: string;
  className?: string;
  labelName: string;
};

export const Card = ({ content, src, className, labelName }: CardProps) => (
  <Container className={className}>
    <Header>
      <LabelRocket labelName={labelName} />
      <Icon src={src} />
    </Header>
    <TotalRocket content={content} labelName={labelName} />
  </Container>
);
