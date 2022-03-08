import { Nav } from "../Nav";
import { useIsMobileDevice } from "../../../hooks";

import * as styles from "./styles";

// children is type React children or something i dunno look it up React.ReactChildren | React.ReactChildren[] ... unionType?

interface PageProps {
  children: React.ReactChild | React.ReactChild[]
  backgroundColor: string
  hasNav?: boolean
}

export const Page = ({ children, backgroundColor, hasNav }) => {
  const isMobile = useIsMobileDevice();
  return (
    <styles.PageContainer {...{ backgroundColor }}>
      {hasNav && !isMobile && <Nav />}
      {hasNav && isMobile && <div>hello</div>}
      {children}
    </styles.PageContainer>
  );
};
