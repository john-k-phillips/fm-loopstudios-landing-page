import React, { useState } from 'react';

import Logo from '../../images/logo.svg';
import Hamburger from '../../images/icon-hamburger.svg';

import Navigation from './Navigation';

function HeadWrapper() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-hero-pattern-mobile bg-center bg-cover lg:bg-hero-pattern-desktop">
      <div className="w-10/12 max-w-6xl m-auto h-screen">
        <div className="py-10 flex items-center justify-between">
          <img
            className={`w-40 ${isMenuOpen ? 'hidden lg:block' : ''}`}
            src={Logo}
            alt=""
            aria-hidden="true"
          />
          <button
            className={`${isMenuOpen ? 'hidden' : ''} lg:hidden`}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onKeyPress={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={Hamburger} alt="" aria-hidden="true" />
          </button>
          <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <h1 className="text-white text-5xl p-5 mt-24 w-full max-w-sm uppercase font-josefin border-4 lg:text-7xl lg:border-2 lg:max-w-2xl">
          Immersive experiences that deliver
        </h1>
      </div>
    </header>
  );
}

export default HeadWrapper;
