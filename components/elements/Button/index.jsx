import Image from "next/image";

import * as styles from "./styles";

export const Button = ({ icon, text, target }) => {
  const test = "test";
  return (
    <styles.ButtonContainer>
      {icon && <Image
        src={`/images/${icon}.svg`}
        height={24}
        width={24}
        alt={icon}
      />}
      <p>{text}</p>
    </styles.ButtonContainer>
  );
};
