import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokeDataById } from "../RTK/thunk";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const pokeData = useSelector((state) => state.poke.data);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPokeDataById(151));
  }, []);

  return (
    <section className="flex flex-wrap justify-center pt-[150px] m-auto">
      {pokeData.map((poke) => (
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

export default Main;
