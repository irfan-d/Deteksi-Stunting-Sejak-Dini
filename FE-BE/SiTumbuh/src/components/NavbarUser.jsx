import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '/src/index.css';
import menu from "../assets/menu.svg";
import logo from "../assets/situmbuh.svg";
import riwayat from "../assets/riwayat.svg";
import profil from "../assets/user-profil.svg";
import riwayatDesktop from "../assets/riwayat-desktop.svg";
import profilDesktop from "../assets/profil-desktop.svg";
import { useAuth } from "../utils/authContext";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {
    logout();
    navigate("/");
  }

  // Fungsi scroll ke section homepage
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
          <li><Link to="/article" className="hover:font-medium hover:text-[var(--color-blue)]">Artikel</Link></li>
          <li><Link to="/daftar-bidan" className="hover:font-medium hover:text-[var(--color-blue)]">Daftar Bidan</Link></li>
          <li><button onClick={() => handleScrollToSection('testimoni')} className="hover:font-medium hover:text-[var(--color-blue)] bg-transparent border-none cursor-pointer">Testimoni</button></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-6">
          <Link
            to="/predict-history"
            className="flex items-center px-2 py-2 bg-white rounded-4xl hover:shadow-lg"
          >
            <img src={riwayatDesktop} alt="Riwayat" className="h-10" />
          </Link>
          <Link
            to="/profile"
            className="flex items-center px-2 py-2 bg-[var(--color-blue)] rounded-4xl hover:shadow-lg"
          >
            <img src={profilDesktop} alt="Profil" className="h-10" />
          </Link>
          <button
            onClick={logout}
            className="flex items-center px-4 py-2 bg-white text-black rounded-4xl hover:shadow-lg border border-black"
          >
            Logout
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 px-6 space-y-3">
          {/* Login/Register Buttons */}
          <div className="flex w-full gap-4 mt-4">
            <Link
              to="/predict-history"
              className="flex-1 flex items-center justify-center px-4 py-1 bg-white text-black rounded gap-2 border border-black"
              onClick={()=>setIsOpen(false)}
            >
              <img src={riwayat} alt="Riwayat" className="h-8" />
              <span>Riwayat</span>
            </Link>
            <Link
              to="/profile"
              className="flex-1 flex items-center justify-center px-4 py-1 bg-[var(--color-blue)] text-black rounded gap-2"
              onClick={() => setIsOpen(false)}
            >
              <img src={profil} alt="Profil" className="h-8" />
              <span>Profile</span>
            </Link>
          </div>
          <button onClick={() => handleScrollToSection('beranda')} className="block w-full bg-[var(--color-grey)] rounded px-4 py-2 text-center font-regular">Beranda</button>
          <button onClick={() => handleScrollToSection('tentang-kami')} className="block w-full bg-[var(--color-grey)] rounded px-4 py-2 text-center font-regular">Tentang Kami</button>
          <Link to="/article" className="block bg-[var(--color-grey)] rounded px-4 py-2 text-center font-regular" onClick={() => setIsOpen(false)}>Artikel</Link>
          <Link to="/daftar-bidan" className="block bg-[var(--color-grey)] rounded px-4 py-2 text-center font-regular" onClick={() => setIsOpen(false)}>Daftar Bidan</Link>
          <button onClick={() => handleScrollToSection('testimoni')} className="block w-full bg-[var(--color-grey)] rounded px-4 py-2 text-center font-regular">Testimoni</button>
          <button
            onClick={handleLogout}
            className="w-full mt-4 flex items-center justify-center px-4 py-2 bg-white text-black rounded-4xl border border-black"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}


