import React from 'react';

function Hero() {
  return (
    <React.Fragment>
          <div className="Hero lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
            <div className="text-6xl font-semibold text-gray-900 leading-none">Bring all your work together</div>
            <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">A better experience for yout attendees and less stress yout team.</div>
            <button className="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
              Download for Free
            </button>
          </div>
          <div className="mt-12 lg:mt-32 lg:ml-20 text-left">

          </div>
    </React.Fragment>
  );
}

export default Hero;