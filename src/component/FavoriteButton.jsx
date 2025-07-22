import { useSelector, useDispatch } from "react-redux";
import { favoritePokeSlice } from "../RTK/slice";

const FavoriteButton = ({ pokeId }) => {
  const isFavorite = useSelector((state) =>
    state.favoritePoke.some((item) => item === pokeId)
  );
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(
            isFavorite
              ? favoritePokeSlice.actions.removeFromFavorites(pokeId)
              : favoritePokeSlice.actions.addToFavorites(pokeId)
          );
          console.log(pokeId);
        }}
      >
        {isFavorite ? `❤️` : `🖤`}
      </button>
    </>
  );
};

export default FavoriteButton;
