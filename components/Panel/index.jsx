import Nav from "../Nav";

import * as styles from "./styles";

const Panel = ({ children, backgroundColor, hasNav }) => {
  const test = "test";
  return (
    <styles.PanelContainer {...{ backgroundColor }}>
      {hasNav && <Nav />}
      {children}
    </styles.PanelContainer>
  );
};

export default Panel;
