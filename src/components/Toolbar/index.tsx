import { ToolbarButton, ToolbarContainer } from "styles/components/Toolbar";

import LeftArrow from "assets/001-right-arrow.png";
import RigthArrow from "assets/002-left-arrow.png";

const Toolbar = () => {
  return (
    <ToolbarContainer>
      <ToolbarButton>
        <img src={RigthArrow} width={24} height={24} />
      </ToolbarButton>
      <ToolbarButton>
        <img src={LeftArrow} width={24} height={24} />
      </ToolbarButton>
    </ToolbarContainer>
  );
};

export default Toolbar;
