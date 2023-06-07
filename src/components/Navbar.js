import React from 'react'
import close from '../assets/images/close.svg';
import menu from '../assets/images/menu.svg';
import logo from '../assets/images/logo.png';
import { FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from './useDarkMode';
import { useState } from 'react';
import { navLinks } from '.';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[32px] h-[32px]" />
      <ThemeIcon />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer
                    text-[16px] ${
                      index === navLinks.length - 1 ? "mr-0" : "mr-10"
                    }
                    text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          alt="menu"
          src={toggle ? close : menu}
          className="w-[28px] h-[28px]
                    object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 
                    bg-gradient-to-r from-cyan-500 to-blue-500
                    absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl
                    sidebar
                    `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }
                text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='24' className='navbar-icon text-defaultsky hover:text-defaultamber' />
        ) : (
          <FaMoon size='24' className='navbar-icon text-defaultamber hover:text-defaultsky' />
        )}
      </span>
    );
};

export default Navbar