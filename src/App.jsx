import { Route, Routes } from "react-router-dom";
import NavBar from "./pages/NavBar";
import { lazy } from "react";
import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPokeDataById } from "./RTK/thunk";

const Detail = lazy(() => import("./pages/Detail"));
const Favorites = lazy(() => import("./pages/Favorites"));
const Main = lazy(() => import("./pages/Main"));
const Search = lazy(() => import("./pages/Search"));

function App() {
  const dispatch = useDispatch();
  const pokeData = useSelector((state) => state.poke.data);

  useEffect(() => {
    dispatch(fetchPokeDataById(151));
  }, []);

  return (
    <>
      <NavBar />
      <Suspense
        fallback={
          <div className="w-screen h-[calc(100vh-150px)] text-[50px] font-extrabold p-10 pt-[150px] flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:pokemonId" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
