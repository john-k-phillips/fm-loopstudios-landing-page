import React from 'react';

import Logo from '../../images/logo.svg';
import Hamburger from '../../images/icon-hamburger.svg';

function HeadWrapper() {
  return (
    <header className="bg-hero-pattern-mobile bg-center bg-cover lg:bg-hero-pattern-desktop">
      <div className="w-10/12 max-w-7xl m-auto pb-60">
        <div className="py-10 flex items-center justify-between">
          <img className="w-40" src={Logo} alt="" aria-hidden="true" />
          <button className="lg:hidden">
            <img src={Hamburger} alt="" aria-hidden="true" />
          </button>
          <nav className="hidden lg:block">
            <ul className="flex gap-5 text-white font-medium">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#products"></a>Products
              </li>
              <li>
                <a href="#support"></a>Support
              </li>
            </ul>
          </nav>
        </div>
        <h1 className="text-white text-5xl p-5 mt-24 w-full max-w-sm uppercase font-josefin border-4 lg:text-7xl lg:border-2 lg:max-w-2xl">
          Immersive experiences that deliver
        </h1>
      </div>
    </header>
  );
}

export default HeadWrapper;
