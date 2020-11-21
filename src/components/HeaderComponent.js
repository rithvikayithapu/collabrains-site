import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
      <nav className="flex justify-between items-center flex-wrap bg-black p-6">
        <div className="flex items-center flex-shrink-0 text-white lg:mr-6 lg:ml-8">
          <img className="fill-current h-8 w-8 mr-2" src="assets/images/Group-10.png" height="30" width="41"  alt="Collabrains"></img>
          <span className="hidden lg:block text-2xl robotoBold" href="/">Collabrains</span>
        </div>
        <div className="block lg:hidden">
          <button type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
            <img className="fill-current h-3 w-3" src="assets/images/Group-253.png" alt="menu"></img>
          </button>
        </div>
        <div className={"w-full block lg:flex lg:items-center lg:w-auto "+(navbarOpen ? "flex" : "hidden")}>
          <div className="text-sm lg:flex-grow">
            <Link className="cursor-pointer block mt-2 lg:inline-block lg:mt-0 hover:text-gray-400 text-white lg:mr-12 lg:ml-12 roboto500 text-xl" activeClass="active" to="home" spy={true} smooth={true} offset={-210} duration={500}>
              Home
            </Link>
            <Link className="cursor-pointer block mt-2 lg:inline-block lg:mt-0 hover:text-gray-400 text-white lg:mr-12 lg:ml-12 roboto500 text-xl" activeClass="active" to="webinars" spy={true} smooth={true} offset={-80} duration={500}>
              Webinars
            </Link>
            <Link className="cursor-pointer block mt-2 lg:inline-block lg:mt-0 hover:text-gray-400 text-white lg:mr-12 lg:ml-12 roboto500 text-xl" activeClass="active" to="projects" spy={true} smooth={true} offset={-80} duration={500}>
              Projects
            </Link>
            <Link className="cursor-pointer block mt-2 lg:inline-block lg:mt-0 hover:text-gray-400 text-white lg:mr-12 lg:ml-12 roboto500 text-xl" activeClass="active" to="team" spy={true} smooth={true} offset={-80} duration={500}>
              Team
            </Link>
            <a href="#" className="inline-block mt-2 px-8 py-2 leading-none rounded-full text-white button mt-4 lg:ml-12 lg:mr-12 lg:mt-0 roboto500 text-xl">Register</a>
          </div>
        </div>
      </nav>
    );
}

export default Header;