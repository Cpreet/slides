import { MouseEventHandler } from "react";
import Slide from "components/Slide";
import { animated, useTransition } from "@react-spring/web";

const Slides = () => {
  const dummyList = [
    {
      id: 1,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, laborum?",
    },
    { id: 3, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 4, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 5, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 6, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 7, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 8, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 9, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    {
      id: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 11,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 12,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 13,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 14,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 15,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 16,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 17,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 18,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 19,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 20,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 21,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  const [transitions, api] = useTransition<(typeof dummyList)[0], object>(
    dummyList,
    () => ({
      from: { x: 0 },
      enter: { x: 1000 },
      leave: { x: -1000 },
    })
  );

  const handleNext: MouseEventHandler<HTMLButtonElement> = (evnt) => {
    api.start();
    console.log("next");
  };

  return (
    <>
      {transitions((style, item) => (
        <animated.div style={style}>
          <Slide title={item.text} />
        </animated.div>
      ))}
      <button onClick={handleNext}>{"Next"}</button>
    </>
  );
};

export default Slides;
