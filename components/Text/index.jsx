import * as styles from "./styles";

const Text = ({ size = "medium", text, color = "white" }) => {
  const test = "test";
  return (
    <styles.TextContainer {...{ color, size }}>{text}</styles.TextContainer>
  );
};

export default Text;
