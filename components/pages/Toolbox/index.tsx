import { Heading} from "../../elements";
import { useIsMobileDevice } from "../../../hooks";

import * as styles from "./styles";

export const Toolbox = (): React.ReactElement => {
  const isMobile = useIsMobileDevice();
  return (
    <styles.ToolboxPage>
      <Heading level="h1" text="Toolbox" color="secondary" />
    </styles.ToolboxPage>
  );
};
