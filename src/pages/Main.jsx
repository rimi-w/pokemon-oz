import { useSelector } from "react-redux";
import Card from "../component/Card";

const Main = () => {
  const pokeData = useSelector((state) => state.poke.data);

  return (
    <div className="flex flex-wrap justify-center pt-[150px] m-auto">
      {pokeData.map((poke) => (
        <Card key={poke.id} poke={poke} />
      ))}
    </div>
  );
};

export default Main;
