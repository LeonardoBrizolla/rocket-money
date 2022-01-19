import { IconRocket } from '../../objects/IconRocket';
import { LabelRocket } from '../../objects/LabelRocket';
import { TotalRocket } from '../../objects/TotalRocket';

import { Container, Header } from './styles';

type CardRocketProps = {
  content: string;
  src: string;
  className?: string;
  labelName: string;
};

export const CardRocket = ({
  content,
  src,
  className,
  labelName,
}: CardRocketProps) => (
  <Container className={className}>
    <Header>
      <LabelRocket labelName={labelName} />
      <IconRocket src={src} />
    </Header>
    <TotalRocket content={content} />
  </Container>
);
