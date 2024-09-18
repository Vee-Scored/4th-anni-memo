import React from "react";

const HeroText = () => {
  const anniDate = new Date(2020, 8, 19);
  const now = Date.now();
  const milliSec = now - anniDate;
  const year = parseInt(milliSec / (1000 * 60 * 60 * 24 * 365.25));
  return (
    <div data-aos="fade-in" className="border text-justify rounded-lg text-red-50 font-semibold sm:leading-10 leading-7 px-5 py-5">
      Dear my lovely Chitthway, <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      It's a lovely day of our relationship. We've passed {year} years with some
      of difficulties.{" "}
      <span className="text-red-400 italic">
        Thanks for staying in my life. Thanks for loving me. Thanks for giving
        me a chance to love you.
      </span>{" "}
      Please, be patient right away and let's build a stronger relationship then
      enjoy together. Love you really really much..
      <br />
      
      <p className="italic">By a Man born only for You</p>
    </div>
  );
};

export default HeroText;
