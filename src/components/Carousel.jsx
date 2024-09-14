import React, { useState } from "react";
import Card from "./Card";

export default (props) => {
  const [activeSlide, setactiveSlide] = useState(props.activeSlide);

  const next = () =>
    activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9,
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9,
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8,
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8,
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7,
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7,
      };
  };

  return (
    <>
      {/* carousel */}
      <div className="slideC overflow-hidden sm:overflow-visible">
        {props.data.map((item, i) => (
          <React.Fragment key={item.id}>
            <div
              className="slide bg-cover bg-center"
              style={{
                backgroundImage : `url(${item.bgImage})` ,
                
                boxShadow: `0 5px 20px ${item.bgColor}30`,
                ...getStyles(i),
              }}
            >
              <Card key={i} description={item.description} img={item.bgImage}/>
            </div>
            <div
              className="reflection"
              style={{
                background: `linear-gradient(to bottom, ${item.bgColor}30, transparent)`,
                ...getStyles(i),
              }}
            />
          </React.Fragment>
        ))}
      </div>
      {/* carousel */}

      <div className=" flex justify-around mt-5">
       <button className="text-red-50 border px-3 py-2 rounded" onClick={prev}>back</button>
       <button className="text-red-50 border px-3 py-2 rounded" onClick={next}>Next</button>
      </div>
    </>
  );
};

const SliderContent = (props) => {
  return (
    <div className="sliderContent">
      {props.icon}
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
};
