import { IconRocket } from '../../objects/IconRocket';
import { LabelRocket } from '../../objects/LabelRocket';
import { TotalRocket } from '../../objects/TotalRocket';

import { Container } from './styles';

export const CardRocket = () => (
  <Container>
    <LabelRocket />
    <IconRocket />
    <TotalRocket />
  </Container>
);
