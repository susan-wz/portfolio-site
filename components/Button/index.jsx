import * as styles from "./styles";

const Button = ({ icon, text, target }) => {
  const test = "test";
  return (
    <styles.ButtonContainer {...{ size }}>
      <p>{text}</p>
    </styles.ButtonContainer>
  );
};

export default Button;
