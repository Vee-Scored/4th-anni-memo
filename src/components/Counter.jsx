import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import Container from "./Container";
import { AOS } from "aos";
function Counter(props) {
  const [count, setCount] = useState(0);


  const content = [];
  const anniDate = new Date(2020, 8, 19);
  const now = Date.now();
  const milliSec = now - anniDate;

  content[0] = {
    name: "YEARS",
    count: parseInt(milliSec / (1000 * 60 * 60 * 24 * 365.25)),
  };
  content[1] = {
    name: "MONTHS",
    count: parseInt(milliSec / (1000 * 60 * 60 * 24 * 30)),
  };

  content[2] = {
    name: "DAYS",
    count: parseInt(milliSec / (1000 * 60 * 60 * 24)),
  };

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCount((c) => (c + 1) % content.length);
    }, 3000);

    return () => clearInterval(interval);
  });

  const words = content[count].name.split("");

  // Group words into pairs and join them with a space
  const formattedText = [];
  
 
    for (let i = 0; i < words.length; i += 1) {
      const twoWords = words.slice(i, i + 1).join("");
      formattedText.push(twoWords);
    }
  

  return (
    <div data-aos={props.animation} >
      <div className=" border-2 shadow-lg bg-red-50 rounded-lg w-60  mx-auto min-h-[425px]   pt-3 mt-5">
        <TextTransition
          direction="down"
          delay={100}
          className="text-center  flex items-center justify-center"
          springConfig={presets.stiff}
        >
          <p className="font-mono text-red-800 text-center font-bold text-5xl">
            {content[count].count}
          </p>
          <br/>
          {formattedText.map((line, index) => (
            <React.Fragment key={index}>
              <p className="font-mono text-center text-red-600 font-semibold  text-2xl">
                {line}
              </p>
              <br />
            </React.Fragment>
          ))}
        </TextTransition>
      </div>
    </div>
  );
}

export default Counter;
