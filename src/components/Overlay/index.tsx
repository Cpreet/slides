import { OverlayContainer } from "styles/components/Overlay";
import Toolbar from "components/Toolbar";
import SlideScroll from "components/SildeScroll";

const Overlay = () => {
  return (
    <OverlayContainer>
      <SlideScroll />
      <Toolbar />
    </OverlayContainer>
  );
};

export default Overlay;
