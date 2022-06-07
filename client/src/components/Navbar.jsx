import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import Logo from "../../images/logo.png";
import { useState } from "react";

const navLinks = [
  { id: 1, title: "Market" },
  { id: 2, title: "Exchange" },
  { id: 3, title: "Tutorials" },
  { id: 4, title: "Wallets" },
];

const NavbarItem = ({ title, classProps }) => (
  <li className={`mx-4 cursor-pointer ${classProps}`}>
    {title}
  </li>
);

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  const handleToggleMenu = () => setMenuOpen(!isMenuOpen);

  const renderNavLinks = (classProps) => navLinks.map(link => (
    <NavbarItem key={link.id} title={link.title} classProps={classProps} />
  ));

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={Logo} className="w-32 cursor-pointer" alt="logo" />
      </div>
      <ul className="text-white md:flex hidden list-done flex-row justify-between items-center flex-initial">
        {renderNavLinks()}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {isMenuOpen
          ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={handleToggleMenu} />
          : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={handleToggleMenu} />
        }
        {isMenuOpen && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={handleToggleMenu}/>
            </li>
            {renderNavLinks("my-2 text-lg")}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
