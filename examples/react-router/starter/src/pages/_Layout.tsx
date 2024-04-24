import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <>
      <header className="flex mb-5 gap-2 text-2xl py-3 px-6 bg-blue-900 text-white rounded-b-xl shadow-gray-700 drop-shadow-2xl">
        <Link to="/" className="font-extrabold">
          Home
        </Link>
        <Link to="/search" className="font-light">
          Search
        </Link>
      </header>
      <div className="@container">
        <Outlet />
      </div>
    </>
  );
}
