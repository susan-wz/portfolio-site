import * as styles from "./styles";

interface LinkProps {
  text: string;
  target: string;
}

export const Link = ({ text, target }: LinkProps): React.ReactElement => {
  const test = "test";
  return (
    <styles.LinkContainer>
      <p>{text}</p>
    </styles.LinkContainer>
  );
};
