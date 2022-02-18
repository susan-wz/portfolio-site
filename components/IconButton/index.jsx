import Image from "next/image";

import * as styles from "./styles";

const IconButton = ({ icon, size, target }) => {
  const test = "test";
  return (
    <styles.IconButtonContainer>
      <Image
        src={`/images/${icon}.svg`}
        height={24}
        width={24}
        alt={icon}
      />
    </styles.IconButtonContainer>
  );
};

export default IconButton;
