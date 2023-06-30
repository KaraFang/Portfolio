import React from 'react'
import close from '../assets/images/close.svg';
import menu from '../assets/images/menu.svg';
import logo from '../assets/images/logo.png';
import useDarkMode from './useDarkMode';
import { FaMoon, FaSun, FaHamburger, FaChevronCircleUp } from 'react-icons/fa';
import { useState } from 'react';
import { navLinks } from './links';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
        <img src={logo} alt="logo" className="w-[42px] h-[42px]" />

      <div>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-mono font-normal cursor-pointer
                      text-[20px] ${
                        index === navLinks.length - 1 ? "mr-0" : "mr-10"
                      }
                      dark:text-defaultteal`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className="pl-10">
            <ThemeIcon />
          </li>
        </ul>
      </div>
      
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          alt="menu"
          src={toggle ? close : menu}
          className="w-[32px] h-[32px]
                    object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 
                    bg-defaultteal shadow-defaultsky shadow-lg
                    dark:bg-defaultsky dark:shadow-defaultteal
                    absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl
                    sidebar
                    `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            <li className="mb-4">
              <ThemeIcon />
            </li>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-mono font-normal cursor-pointer text-[20px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }
                text-defaultsky dark:text-defaultteal`}
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
          <FaSun size='24' className='navbar-icon text-defaultteal hover:text-defaultamber' />
        ) : (
          <FaMoon size='24' className='navbar-icon text-defaultamber hover:text-defaultsky' />
        )}
      </span>
    );
};

export default Navbar