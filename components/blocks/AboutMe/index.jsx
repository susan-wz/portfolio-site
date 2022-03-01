import { Heading, Text, Button, IconButton } from '../../elements'

import * as styles from "./styles";

export const AboutMe = () => {
  const test = "test";
  return (
    <styles.AboutMeContainer>
      <Heading level="h1" text="Hello! I'm Susan." color="secondary" />
      <Text text="I’m a software developer based in Toronto, Canada. I’ve been creating fun tidbits for the world wide web since November 2019. Currently, I’m focused on building a engaging customer chat experience at Telus Digital. " />
      <styles.LinkContainer>
        <Button text="Download resume" icon="download" />
        <IconButton icon="github-white-outline" size={48} target="https://github.com/susan-wz" />
        <IconButton icon="linkedin-white-outline" size={48} target="https://www.linkedin.com/in/susanwzhang/" />
      </styles.LinkContainer>
    </styles.AboutMeContainer>
  );
};

