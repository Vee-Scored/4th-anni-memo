import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const Celebration = () => {
  const [isCelebrating, setIsCelebrating] = useState(false);

  const handleCelebrate = () => {
    setIsCelebrating(true);
    // Set celebration off after 3 seconds
    setTimeout(() => setIsCelebrating(false), 3000);
  };

  useEffect(()=>{
    setIsCelebrating(true);
    setTimeout(() => {
        setIsCelebrating(false)
    }, 3000);
  },[])

  return (
    <div className="flex flex-col items-center justify-center">
      {isCelebrating && (
        <Confetti 
          friction={1}
          numberOfPieces={2000}
          recycle={false}
          width={window.innerWidth}
          height={10000}
          gravity={0.2}
        />
      )}
      <button disabled={isCelebrating}
        onClick={handleCelebrate}
        className=" active:scale-75 text-white rounded-xl shadow-lg text-7xl  transition-transform transform hover:scale-105"
      >
        🎉
      </button>
    </div>
  );
};

export default Celebration;
