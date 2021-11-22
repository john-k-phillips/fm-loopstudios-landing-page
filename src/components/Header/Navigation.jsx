import React from 'react';

import Logo from '../../images/logo.svg';
import CloseIcon from '../../images/icon-close.svg';

function Navigation({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav
      className={`${
        isMenuOpen ? '' : 'hidden'
      } w-full h-screen bg-black absolute top-0 left-0 lg:block lg:relative lg:bg-transparent lg:left-auto lg:bottom-auto lg:h-auto lg:w-auto`}
    >
      <div className="flex p-8 py-10 lg:hidden">
        <img className="w-40 mr-auto" src={Logo} alt="" aria-hidden="true" />
        <button
          className="lg:hidden"
          aria-expanded="true"
          onClick={() => setIsMenuOpen(false)}
          onKeyPress={() => setIsMenuOpen(false)}
        >
          <img src={CloseIcon} alt="" aria-hidden="true" />
        </button>
      </div>

      <ul className="nav-hover flex flex-col mt-28 pl-8 font-josefin uppercase lg:capitalize text-4xl gap-5 lg:gap-7 text-white font-medium lg:flex-row lg:pl-0 lg:mt-0 lg:text-lg lg:font-alata">
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
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#support">Support</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
