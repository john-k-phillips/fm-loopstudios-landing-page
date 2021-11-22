import React from 'react';

import Logo from '../../images/logo.svg';

import FacebookIcon from '../../images/icon-facebook.svg';
import InstagramIcon from '../../images/icon-instagram.svg';
import PinterestIcon from '../../images/icon-pinterest.svg';
import TwitterIcon from '../../images/icon-twitter.svg';

function Footer() {
  return (
    <footer className="flex flex-col justify-center p-10 bg-black text-white text-center">
      <img src={Logo} alt="" aria-hidden="true" />
      <ul className="flex flex-col gap-4 text-xl my-10">
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="careers">Careers</a>
        </li>
        <li>
          <a href="events">Events</a>
        </li>
        <li>
          <a href="products">Products</a>
        </li>
        <li>
          <a href="support">Support</a>
        </li>
      </ul>
      <ul className="flex justify-center gap-4 my-5">
        <li>
          <a href="facebook">
            <img src={FacebookIcon} alt="" />
          </a>
        </li>
        <li>
          <a href="twitter">
            <img src={TwitterIcon} alt="" />
          </a>
        </li>
        <li>
          <a href="pinterest">
            <img src={PinterestIcon} alt="" />
          </a>
        </li>
        <li>
          <a href="instagram">
            <img src={InstagramIcon} alt="" />
          </a>
        </li>
      </ul>
      <p>© 2021 Loopstudios. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
