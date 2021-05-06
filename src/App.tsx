import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';

function App() {
  return (
  <div className="App min-h-screen min-w-full bg-gray-100 flex flex-col justify-center px-10">
    <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
      <Nav />
      <Hero />
    </div>
  </div>

  );
}

export default App;
