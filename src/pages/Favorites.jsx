import { useSelector } from "react-redux";
import { selectFavoritePoke } from "../RTK/selector";

import Card from "../component/Card";

const Favorites = () => {
  const favoritePoke = useSelector(selectFavoritePoke);

  return (
    <section className="flex flex-wrap justify-center pt-[150px] m-auto">
      {favoritePoke.map((poke) => (
        <Card key={poke.id} poke={poke} />
      ))}
    </section>
  );
};

export default Favorites;
