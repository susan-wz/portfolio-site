import Link from "../Link";

import * as styles from "./styles";

const Nav = () => {
  const test = "test";
  return (
    <styles.NavContainer>
      <div />
      <styles.LinksContainer>
        <Link text="About me" />
        <Link text="Side projects" />
        <Link text="My toolbox" />
      </styles.LinksContainer>
    </styles.NavContainer>
  );
};

export default Nav;
