import Logo from "../assets/img/Logo_bière.png"
const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={Logo} alt="Logo" className="w-20 h-20 p-2 rounded-full" />
          <span className="ml-3 text-xl">Zytho</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2025 Zythologue —
          <a
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @QuentinDegli
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
