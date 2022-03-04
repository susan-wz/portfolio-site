import * as styles from "./styles";

interface HeadingProps {
  level: string
  text: string
  color: string
}

export const Heading = ({ level = "h1", text, color = 'secondary' }: HeadingProps): React.ReactElement => {
  const test = "test";
  switch (level) {
    case "h1":
      return <styles.H1 {...{ color }}>{text}</styles.H1>;
      break;
    case "h2":
      return <styles.H2 {...{ color }}>{text}</styles.H2>;
      break;
    default:
      return <styles.H1 {...{ color }}>{text}</styles.H1>;
  }
};
