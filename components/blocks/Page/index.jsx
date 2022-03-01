import { Nav } from "../Nav";

import * as styles from "./styles";

export const Page = ({ children, backgroundColor, hasNav }) => {
  const test = "test";
  return (
    <styles.PageContainer {...{ backgroundColor }}>
      {hasNav && <Nav />}
      {children}
    </styles.PageContainer>
  );
};
