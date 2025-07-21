import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";

const Detail = () => {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

  console.log(pokemon);

  return (
    <div className="w-screen h-[calc(100vh-150px)] pt-[150px] flex justify-center items-center">
      <div className="max-w-[300px] h-[450px] bg-[#ffffff76] rounded-4xl p-5 flex flex-col flex-wrap justify-center items-center gap-5">
        <h2 className="text-4xl font-bold">{pokemon.name}</h2>
        <p className="text-xl">{pokemon.description}</p>
        <img className="w-[200px] h-[200px]" src={`${pokemon.front}`} />
      </div>
    </div>
  );
};

export default Detail;
``;
