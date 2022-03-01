import { Nav } from "../Nav";
import { useIsMobileDevice } from '../../../hooks'

import * as styles from "./styles";

export const Page = ({ children, backgroundColor, hasNav }) => {
  const isMobile = useIsMobileDevice()
  return (
    <styles.PageContainer {...{ backgroundColor }}>
      {hasNav && !isMobile && <Nav />}
      {hasNav && isMobile && <div>hello</div>}
      {children}
    </styles.PageContainer>
  );
};
