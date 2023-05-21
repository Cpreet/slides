import styled from "styled-components";

export const SlidesContainer = styled.div`
  min-width: 1260px;
  min-height: 720px;
  padding: 30px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: -20px 20px 60px #e9dbb3, 20px -20px 60px #a1abd4;
`;

export const SlideContent = styled.div`
  display: flex;
  width: 100%;
  min-height: 720px;
  align-items: center;
  justify-content: space-around;
`;

export const SlideLeft = styled.div`
  width: 100%;
  min-height: 700px;
`;

export const SlideRight = styled.div`
  width: 100%;
  min-height: 700px;
`;

export const SlideVertDivider = styled.div`
  border: 1px solid darkgray;
  margin: 20px;
  max-width: 0px;
  min-height: 700px;
`;
