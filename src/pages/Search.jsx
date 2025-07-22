import { engToKor, getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectPokemonByReg } from "../RTK/selector";
import Card from "../component/Card";

const Search = () => {
  const [searchParams] = useSearchParams();
  const params = searchParams.get(`poke`);
  const reg = getRegExp(params);
  const enToKo = engToKor(params);
  const searchedPoke = useSelector(selectPokemonByReg(reg, enToKo));

  return (
    <section className="flex flex-wrap justify-center pt-[150px] m-auto">
      {searchedPoke.map((poke) => (
        <Card key={poke.id} poke={poke} />
      ))}
    </section>
  );
};

export default Search;
