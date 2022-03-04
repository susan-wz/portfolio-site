import Image from "next/image";

import * as styles from "./styles";

interface ButtonProps {
  icon: string
  text: string
  target: string
}

export const Button = ({ icon, text, target }: ButtonProps): React.ReactElement => {
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
