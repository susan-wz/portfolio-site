import Image from "next/image";

import * as styles from "./styles";

export const IconButton = ({ icon, size, target }) => (
  <styles.IconButtonContainer href={target} target="_blank" rel="noopener noreferrer">
    <Image
      src={`/images/${icon}.svg`}
      height={size}
      width={size}
      alt={icon}
    />
  </styles.IconButtonContainer>
);

