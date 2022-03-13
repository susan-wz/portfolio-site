import Image from "next/image";
import { useState } from "react";
import { Link } from "../../elements";

import * as styles from "./styles";

export const MobileNav = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const test = "test";
  return (
    <styles.MobileNavContainer>
      <Image
        src="/images/leaf-svgrepo-com.svg"
        height={48}
        width={48}
        alt="leaf logo"
      />
      <styles.MenuToggle onClick={() => setIsOpen(!isOpen)}>
        <button>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </styles.MenuToggle>
      {isOpen && (
        <styles.LinksContainer>
          <li>hi</li>
          <li>hello</li>
          {/* <Link text="About me" target="" />
        <Link text="Side projects" target="" />
        <Link text="My toolbox" target="" /> */}
        </styles.LinksContainer>
      )}
    </styles.MobileNavContainer>
  );
};
