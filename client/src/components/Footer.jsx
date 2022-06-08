import logo from "../../images/logo.png";

const links = [
  { id: 1, title: "Market" },
  { id: 2, title: "Exchange" },
  { id: 3, title: "Tutorial" },
  { id: 4, title: "Wallets" },
];

const Footer = () => {
  const renderLinks = () => links.map(link => (
    <p key={link.id} className="text-white text-base text-center mx-2 cursor-pointer">{link.title}</p>
  ))
  
  return (
    <footer className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo" className="w-32" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
         {renderLinks()}
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">Come to join us</p>
        <a href="mailto:info@kryptomastery.com" className="text-white text-sm text-center">info@kryptomastery.com</a>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-sm text-center">@kryptomastery</p>
        <p className="text-white text-sm text-center">All rights reserved</p>
      </div>
    </footer>
  )
};

export default Footer;
