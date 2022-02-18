import Link from "../Link";
import Image from "next/image";

import * as styles from "./styles";

const Nav = () => {
  const test = "test";
  return (
    <styles.NavContainer>
      <Image
        src="/images/leaf-svgrepo-com.svg"
        height={48}
        width={48}
        alt="leaf logo"
      />
      <styles.LinksContainer>
        <Link text="About me" />
        <Link text="Side projects" />
        <Link text="My toolbox" />
      </styles.LinksContainer>
    </styles.NavContainer>
  );
};

export default Nav;
