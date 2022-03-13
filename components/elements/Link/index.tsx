import * as styles from "./styles";

interface LinkProps {
  text: string;
  target: string;
  align?: string;
}

export const Link = ({
  text,
  target,
  align = "left",
}: LinkProps): React.ReactElement => {
  const test = "test";
  return (
    <styles.LinkContainer {...{ align }}>
      <p>{text}</p>
    </styles.LinkContainer>
  );
};
