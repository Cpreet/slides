import { styled } from "styled-components";

export const ToolbarContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  right: 10px;
  bottom: 10px;
  min-width: 150px;
  max-width: 250px;
  min-height: 75px;
  border-radius: 67px;
  background: #ffffff;
  box-shadow: -12px 12px 25px #8f97bc, 12px -12px 25px #a1abd4;
`;

export const ToolbarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-style: none;
  border-radius: 150px;
  width: 48px;
  height: 48px;
  background: #ffffff;
  box-shadow: -5px 5px 10px #d6d6d6, 5px -5px 10px #ffffff;
  transition: width 0.2s ease-out;

  &:hover {
    width: 55px;
    height: 55px;
  }

  &:active {
    border-radius: 67px;
    background: #ffffff;
    box-shadow: inset -5px 5px 10px #f0f0f0, inset 5px -5px 10px #ffffff;
  }
`;

export const ToolbarVerticalSeprator = styled.hr`
  transform: rotate(90deg);
  width: 48px;
  color: darkgray;
  flex-basis: 40px;
`;
