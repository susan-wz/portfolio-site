import * as styles from "./styles";

export const Text = ({ size = "medium", text, color = "white" }) => {
  const test = "test";
  return (
    <styles.TextContainer {...{ color, size }}>{text}</styles.TextContainer>
  );
};
