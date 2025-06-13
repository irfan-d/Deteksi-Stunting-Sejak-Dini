import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '/src/index.css';
import menu from "../assets/menu.svg";
import logo from '../assets/situmbuh.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Fungsi scroll ke section
  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      setIsOpen(false);
      return;
    }
    setIsOpen(false);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav
      className="py-4 fixed top-0 left-0 w-full z-50"
      style={{
        background: "linear-gradient(to bottom, #fff 50%, rgba(255,255,255,0))",
        backdropFilter: "blur(2px)"
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo-situmbuh" className="h-12" />
          <h1 className="text-2xl font-bold text-[var(--color-blue)]">SiTumbuh</h1>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={menu} className="text-3xl text-[var(--color-blue)]" />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-base font-regular text-black">
          <li><button onClick={() => handleScrollToSection('beranda')} className="hover:font-medium hover:text-[var(--color-blue)] bg-transparent border-none cursor-pointer">Beranda</button></li>
          <li><button onClick={() => handleScrollToSection('tentang-kami')} className="hover:font-medium hover:text-[var(--color-blue)] bg-transparent border-none cursor-pointer">Tentang Kami</button></li>
          <li><button onClick={() => handleScrollToSection('artikel-kesehatan')} className="hover:font-medium hover:text-[var(--color-blue)] bg-transparent border-none cursor-pointer">Artikel</button></li>
          <li><button onClick={() => handleScrollToSection('daftar-bidan')} className="hover:font-medium hover:text-[var(--color-blue)] bg-transparent border-none cursor-pointer">Daftar Bidan</button></li>
          <li><button onClick={() => handleScrollToSection('testimoni')} className="hover:font-medium hover:text-[var(--color-blue)] bg-transparent border-none cursor-pointer">Testimoni</button></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/login" className="px-4 py-2 border border-black text-black rounded hover:bg-[var(--color-grey)]">Masuk</Link>
          <Link to="/register" className="px-4 py-2 bg-[var(--color-blue)] text-white rounded hover:text-black">Daftar</Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 px-6 space-y-3">
          <button onClick={() => handleScrollToSection('beranda')} className="block w-full bg-[var(--color-grey)] rounded px-4 py-2 text-center font-regular">Beranda</button>
          <button onClick={() => handleScrollToSection('tentang-kami')} className="block w-full bg-[var(--color-grey)] rounded px-4 py-2 text-center font-regular">Tentang Kami</button>
          <button onClick={() => handleScrollToSection('artikel-kesehatan')} className="block w-full bg-[var(--color-grey)] rounded px-4 py-2 text-center font-regular">Artikel</button>
          <button onClick={() => handleScrollToSection('daftar-bidan')} className="block w-full bg-[var(--color-grey)] rounded px-4 py-2 text-center font-regular">Daftar Bidan</button>
          <button onClick={() => handleScrollToSection('testimoni')} className="block w-full bg-[var(--color-grey)] rounded px-4 py-2 text-center font-regular">Testimoni</button>
          <div className="flex justify-center gap-4 mt-4">
            <Link to="/login" className="px-4 py-2 border border-black text-black rounded hover:bg-[var(--color-grey)]">Masuk</Link>
            <Link to="/register" className="px-4 py-2 bg-[var(--color-blue)] text-white rounded hover:text-black">Daftar</Link>
          </div>
        </div>
      )}
    </nav>
  );
}


