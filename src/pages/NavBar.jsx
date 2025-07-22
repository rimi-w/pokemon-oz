import { Link, Outlet, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="w-screen h-[100px] bg-white text-black fixed flex flex-col items-center">
        <Link
          to={`/`}
          className="w-screen h-[50px] text-center text-2xl font-extrabold border-b-2 p-2 bg-[#ff3030da]"
        >
          Pokemon
        </Link>
        <div className="size-5 border-3 rounded-2xl absolute top-[40px]"></div>
        <div className="w-[100vw] h-[50px] flex gap-5 justify-around items-center text-[20px] border-t-3 font-semibold">
          <Link to={`/favorites`}>Favorites</Link>
          <div className="flex items-center gap-3">
            <input
              className="w-[150px] h-[20px] border-b-2 pl-2 text-[18px]"
              type="text"
              onChange={(e) => navigate(`/search?poke=${e.target.value}`)}
            />
            <span>🔎</span>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
