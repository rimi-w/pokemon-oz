import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import FavoriteButton from "../component/FavoriteButton";
import FlipCard from "../component/FlipCard";

const Detail = () => {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

  return (
    <div className="w-screen h-[calc(100vh-150px)] pt-[250px] flex justify-center items-center">
      <div className="max-w-[300px] h-[450px] bg-[#ffffff76] rounded-4xl p-[20px] flex flex-col flex-wrap justify-center items-center gap-2">
        <h2 className="text-3xl font-bold">
          {pokemon.name} <FavoriteButton pokeId={Number(pokemonId)} />
        </h2>
        <p className="text-[18px]">{pokemon.description}</p>
        <FlipCard pokemon={pokemon} />
      </div>
    </div>
  );
};

export default Detail;
``;
