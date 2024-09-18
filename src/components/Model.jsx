import { useEffect, useState } from 'react';
import mmt from "../assets/mmt_avater.jpg"
import cty from "../assets/photo_2.jpg"

const Model = ({ bool }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (bool) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [bool]);

  return (
    isVisible && (
      <div className="fixed flex z-50 flex-col items-center justify-center bg-[rgba(0,0,0,0.2)] top-0 bottom-0 right-0 left-0">
        <div className="z-50 px-5 min-w-[300px] py-3 rounded-lg bg-white animate-fadeIn">
          <p className="text-center py-1 text-2xl font-mono">Celebration!</p>
          <p className="text-center py-1 text-2xl font-serif font-semibold">4th Anniversary</p>
          <p className="text-center py-1 text-xl font-semibold">of</p>
          <div className="flex items-center justify-between">
            <div>
              <img className="w-14 h-14 rounded-full" src={mmt} alt="Mg" />
              <figcaption className="text-center font-serif">Mg</figcaption>
            </div>
            <p className="text-lg font-serif">And</p>
            <div>
              <img className="w-14 h-14 rounded-full object-cover" src={cty} alt="Chit" />
              <figcaption className="text-center font-serif">Chit</figcaption>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Model
