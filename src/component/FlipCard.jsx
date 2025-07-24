import { useState } from "react";

const FlipCard = ({ pokemon }) => {
  const [isFlip, setIsFlip] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div className={`w-[150px] h-[150px] m-5 relative transform-3d`}>
        <img
          className={`${
            isFlip ? `rotate-y-0` : `rotate-y-180`
          } w-[150px] h-[150px] absolute backface-hidden  duration-500`}
          src={pokemon.back}
        />
        <img
          className={`${
            isFlip ? `rotate-y-180` : `rotate-y-0`
          } w-[150px] h-[150px] absolute backface-hidden  duration-500`}
          src={pokemon.front}
        />
      </div>
      <button
        onClick={() => setIsFlip((prev) => !prev)}
        className="w-13 h-9 bg-[#ff080856] rounded-2xl"
      >
        Flip
      </button>
    </div>
  );
};

export default FlipCard;
