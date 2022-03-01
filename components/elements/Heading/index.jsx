import * as styles from "./styles";

export const Heading = ({ level = "h1", text, color = 'secondary' }) => {
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
