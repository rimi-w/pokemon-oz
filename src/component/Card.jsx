import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const Card = ({ poke }) => {
  const navigate = useNavigate();
  console.log(`card render`);

  return (
    <section
      className="w-[130px] h-[150px] m-3 bg-[#ffffff57] rounded-3xl flex flex-col justify-center items-center hover:scale-[1.1] hover:drop-shadow-[0_0_50px_rgba(225,225,225,0.8)] hover:duration-300"
      onClick={() => navigate(`/detail/${poke.id}`)}
    >
      <img src={poke.front} />
      <h2>
        {poke.name} <FavoriteButton pokeId={poke.id} />
      </h2>
    </section>
  );
};

export default Card;
