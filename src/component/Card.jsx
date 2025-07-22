import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const Card = ({ poke }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-[130px] h-[150px] m-3 bg-[#ffffff57] rounded-3xl flex flex-col justify-center items-center"
      onClick={() => navigate(`/detail/${poke.id}`)}
    >
      <img src={poke.front} />
      <h2>
        {poke.name} <FavoriteButton pokeId={poke.id} />
      </h2>
    </div>
  );
};

export default Card;
