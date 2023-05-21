import {
  IndexIcon,
  SlideButtonText,
  SlideScrollButtonContainer,
} from "styles/components/SlideScroll/SlideButton";

interface SlideButtonProps {
  index?: number;
  children?: string;
}

const SlideButton = ({ index, children }: SlideButtonProps) => {
  return (
    <SlideScrollButtonContainer>
      <IndexIcon>{index}</IndexIcon>
      <SlideButtonText>{children}</SlideButtonText>
    </SlideScrollButtonContainer>
  );
};

export default SlideButton;
