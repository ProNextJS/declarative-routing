import { Outlet } from "react-router-dom";
import { Home, Search } from "@/routeTable";

export function Layout() {
  return (
    <>
      <header className='flex mb-5 gap-2 text-2xl py-3 px-6 bg-blue-900 text-white rounded-b-xl shadow-gray-700 drop-shadow-2xl'>
        <Home.Link className='font-extrabold'>Home</Home.Link>
        <Search.Link className='font-light'>Search</Search.Link>
      </header>
      <div className='@container'>
        <Outlet />
      </div>
    </>
  );
}
