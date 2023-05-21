import { styled } from "styled-components";

export const SlideScrollContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 30px;
  left: 30px;
  width: 250px;
  height: 910px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: -5px 5px 10px #e4d6af, 5px -5px 10px #fffccd;
  scrollbar-width: 1px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SlideScrollFooter = styled.footer``;
