import React from 'react';
import Menu from './Menu';

function Nav() {
  return (
    <React.Fragment>
      <div className="Nav relative">        
        <div className="px-20 py-6">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800">
                church.
              </div>   
              <Menu />
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