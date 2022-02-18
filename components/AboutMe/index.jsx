import Heading from "../Heading";
import Text from "../Text";
import Button from "../Button";

import * as styles from "./styles";

const AboutMe = () => {
  const test = "test";
  return (
    <styles.AboutMeContainer>
      <Heading level="h1" text="Hello! I'm Susan." color="secondary" />
      <Text text="I’m a software developer based in Toronto, Canada. I’ve been creating fun tidbits for the world wide web since November 2019. Currently, I’m focused on building a engaging customer chat experience at Telus Digital. " />
      <Button />
    </styles.AboutMeContainer>
  );
};

export default AboutMe;
