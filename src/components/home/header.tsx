import { useState } from "react";
import logo from "../../assets/img/icon.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-wrap items-center justify-between px-4 py-3 bg-white shadow-md md:px-6">
      {/* Logo */}
      <a href="/">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-6 w-6 sm:h-8 sm:w-8" />
          <span className="text-sm font-bold text-black sm:text-lg">
            PHOTO SPORT
          </span>
        </div>
      </a>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-4 text-gray-500">
        <a href="/albums" className="hover:text-black text-sm sm:text-base">
          Álbumes
        </a>
        <a href="/events" className="hover:text-black text-sm sm:text-base">
          Eventos
        </a>
      </nav>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-gray-500 hover:text-black">🌐</button>
        <button className="relative text-gray-500 hover:text-black">
          <button>🛍️</button>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-yellow-500 rounded-full">
            0
          </span>
        </button>
        <a href="/login">
          <button className="px-3 py-2 text-xs font-medium text-black border border-gray-300 rounded-md sm:px-4 sm:py-2 sm:text-sm hover:bg-gray-100">
            Ingresar
          </button>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-500 hover:text-black"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="w-full mt-3 md:hidden">
          <nav className="flex flex-col space-y-2 text-gray-500">
            <a
              href="/albums"
              className="hover:text-black text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Álbumes
            </a>
            <a
              href="/events"
              className="hover:text-black text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Eventos
            </a>
            <button
              className="text-gray-500 hover:text-black text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              🌐
            </button>
            <button
              className="relative text-gray-500 hover:text-black text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              🛍️
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-yellow-500 rounded-full">
                0
              </span>
            </button>
            <a
              href="/login"
              className="px-3 py-2 text-xs font-medium text-black border border-gray-300 rounded-md sm:px-4 sm:py-2 sm:text-sm hover:bg-gray-100 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Ingresar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
