import React from 'react';

function Nav() {
  return (
    <React.Fragment>
      <div className="Nav relative bg-white shadow-lg sm:rounded-3xl">        
        <div className="px-20 py-6">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800">
                church.
              </div>   
              <div className="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1">
                <a href="#" className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                  Product
                  <svg className="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                <a href="#" className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                  Community
                  <svg className="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                <a href="#" className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                  Plans
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <a href="#" className="mr-5 text-lg font-medium text-true-gray-800 hover:text-cool-gray-700 transition duration-150 ease-in-out">learn</a>
              <button className="px-6 py-3 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out">give</button>
            </div>
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default Nav;