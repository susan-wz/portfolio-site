import * as styles from "./styles";

interface TextProps {
  size: string
  text: string
  color: string
}

export const Text = ({ size = "medium", text, color = "white" }: TextProps): React.ReactElement => {
  const test = "test";
  return (
    <styles.TextContainer {...{ color, size }}>{text}</styles.TextContainer>
  );
};
