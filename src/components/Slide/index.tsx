import Header from "components/Header";
import Footer from "components/Footer";

import {
  SlidesContainer,
  SlideContent,
  SlideLeft,
  SlideVertDivider,
  SlideRight,
} from "styles/pages/Slides";

interface SlidesProps {
  title?: string;
  rightContent?: React.ReactNode;
  leftContent?: React.ReactNode;
}

const Slide = ({ title, rightContent, leftContent }: SlidesProps) => {
  return (
    <SlidesContainer>
      <Header>{title}</Header>
      <SlideContent>
        <SlideLeft>{rightContent}</SlideLeft>
        <SlideVertDivider />
        <SlideRight>{leftContent}</SlideRight>
      </SlideContent>
      <Footer>{"© 2023 Wits Innovation Labs, All rights reserved"}</Footer>
    </SlidesContainer>
  );
};

export default Slide;
