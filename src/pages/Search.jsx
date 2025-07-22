import { engToKor, getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { selectPokemonByReg } from "../RTK/selector";

const Search = () => {
  const [searchParams] = useSearchParams();
  const params = searchParams.get(`poke`);
  const reg = getRegExp(params);
  const enToKo = engToKor(params);
  const searchedPoke = useSelector(selectPokemonByReg(reg, enToKo));

  const navigate = useNavigate();

  return (
    <section className="flex flex-wrap justify-center pt-[150px] m-auto">
      {searchedPoke.map((poke) => (
        <div
          className="w-[130px] h-[150px] m-3 bg-[#ffffff57] rounded-3xl flex flex-col justify-center items-center"
          key={poke.id}
          onClick={() => navigate(`/detail/${poke.id}`)}
        >
          <img src={`${poke.front}`} />
          <h2>{poke.name}</h2>
        </div>
      ))}
    </section>
  );
};

export default Search;
