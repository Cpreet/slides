import { styled } from "styled-components";

export const SlideScrollButtonContainer = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border-style: none;
  border-radius: 50px;
  width: 90%;
  height: 50px;
  margin-top: 15px;
  margin-left: 10px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: -8px 8px 16px #ebebeb, 8px -8px 16px #ffffff;
  transition: height 0.2s ease-out;

  &:hover {
    height: 55px;
  }

  &:active {
    border-radius: 50px;
    background: #ffffff;
    box-shadow: inset -8px 8px 16px #ebebeb, inset 8px -8px 16px #ffffff;
  }
`;

export const IndexIcon = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  border-radius: 40px;
  background-color: #1f3288;
  color: white;
  font-size: 24px;
  margin-right: 10px;
`;

export const SlideButtonText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  font-size: 20px;
  text-overflow: ellipsis;
`;
