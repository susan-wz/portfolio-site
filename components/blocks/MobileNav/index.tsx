import Image from "next/image";
import { useState } from "react";
import { Link } from "../../elements";

import * as styles from "./styles";

export const MobileNav = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const test = "test";
  return (
    <styles.HeaderContainer>
      <Image
        src="/images/leaf-svgrepo-com.svg"
        height={48}
        width={48}
        alt="leaf logo"
      />
      <styles.MobileNavContainer>
        <styles.MenuToggle onClick={() => setIsOpen(!isOpen)}>
          <button>
            <p />
            <p />
            <p />
          </button>
        </styles.MenuToggle>
        {isOpen && (
          <styles.LinksContainer>
            <Link text="About me" target="" align="right" />
            <Link text="Side projects" target="" align="right" />
            <Link text="My toolbox" target="" align="right" />
          </styles.LinksContainer>
        )}
      </styles.MobileNavContainer>
    </styles.HeaderContainer>
  );
};
