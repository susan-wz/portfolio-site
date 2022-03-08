import { Heading } from "../../elements";
import { useIsMobileDevice } from "../../../hooks";

import * as styles from "./styles";

export const Projects = (): React.ReactElement => {
  const isMobile = useIsMobileDevice();
  return (
    <styles.ProjectsPage>
      <Heading level="h1" text="Projects" color="primary" />
    </styles.ProjectsPage>
  );
};
