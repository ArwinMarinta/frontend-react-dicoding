// import React from 'react'

const Header = () => {
  return (
    <header className="flex w-full py-4 border-b border-black justify-center">
      <nav className="container flex flex-row justify-between">
        <div className="text-3xl ">Notes</div>
        <div className="w-[25%]">
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-black text-gray-900 text-sm rounded-md  focus:ring-blue-500 focus:border-blue-500 block w-full  px-2 py-2    dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari Catatan..."
            required
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
