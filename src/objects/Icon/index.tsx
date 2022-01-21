type IconProps = {
  src: string;
};

export const Icon = ({ src }: IconProps) => (
  <img src={src} alt="Ícone de entrada" />
);
