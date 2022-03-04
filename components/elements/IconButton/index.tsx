import Image from "next/image";

import * as styles from "./styles";

interface IconButtonProps {
  icon: string
  size: number
  target: string
}

export const IconButton = ({ icon, size, target }: IconButtonProps): React.ReactElement => (
  <styles.IconButtonContainer href={target} target="_blank" rel="noopener noreferrer">
    <Image
      src={`/images/${icon}.svg`}
      height={size}
      width={size}
      alt={icon}
    />
  </styles.IconButtonContainer>
);

