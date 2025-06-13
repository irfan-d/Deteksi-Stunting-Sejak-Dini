import '/src/index.css';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import location from "../assets/location-pin.svg";
import phoneNumber from '../assets/phone.svg';
import email from '../assets/mail-01.svg';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/authContext";
import { Link } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  function handleIsLogin(e) {
    e.preventDefault();
    if (isLoggedIn) {
      navigate("/predict");
    } else {
      navigate("/login");
    }
  }  

  // Fungsi scroll ke section homepage dari footer
  function handleScrollToSectionFooter(e, sectionId) {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }

  return (
    <footer className="bg-[var(--color-grey)] text-black">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo dan Kontak */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/situmbuh.svg" alt="SiTumbuh Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-[var(--color-blue)]">SiTumbuh</span>
          </div>
          <ul className="text-sm space-y-2">
            <li className="flex items-start">
              <img src={location} className="mr-2" />
              <span className="max-w-[240px]">2715 Beahan Burgs, Port Boydfurt 61272–5992</span>
            </li>
            <li className="flex items-center">
              <img src={phoneNumber} className="mr-2" /> 499 798 7150 x403
            </li>
            <li className="flex items-center">
              <img src={email} className="mr-2" /> situmbuh@gmail.com
            </li>
          </ul>
          <div className="flex flex-wrap gap-4 mt-4 text-2xl text-[var(--color-blue)]">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* SiTumbuh Links */}
        <div>
          <h3 className="text-[var(--color-blue)] font-semibold mb-4">SiTumbuh</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#tentang-kami" className="hover:text-[var(--color-blue)]" onClick={e => handleScrollToSectionFooter(e, 'tentang-kami')}>Tentang Kami</a></li>
            <li><a href="#artikel-kesehatan" className="hover:text-[var(--color-blue)]" onClick={e => handleScrollToSectionFooter(e, 'artikel-kesehatan')}>Artikel Kesehatan</a></li>
            <li><a href="#daftar-bidan" className="hover:text-[var(--color-blue)]" onClick={e => handleScrollToSectionFooter(e, 'daftar-bidan')}>Daftar Bidan</a></li>
            <li><Link 
                  to="/predict" 
                  className="hover:text-[var(--color-blue)]"
                  onClick={handleIsLogin}
                >
                  Cek Risiko Stunting
                </Link></li>
          </ul>
        </div>

        {/* Bantuan & Panduan */}
        <div>
          <h3 className="text-[var(--color-blue)] font-semibold mb-4">Bantuan & Panduan</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/kontak-kami" className="hover:text-[var(--color-blue)]">Kontak kami</Link></li>
            <li><Link to="/kebijakan-privasi" className="hover:text-[var(--color-blue)]">Kebijakan Privasi</Link></li>
            <li><Link to="/syarat-ketentuan" className="hover:text-[var(--color-blue)]">Syarat & Ketentuan</Link></li>
            <li><Link to="/faq" className="hover:text-[var(--color-blue)]">FAQ</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[var(--color-blue)] text-white text-center py-4 text-sm px-4">
        ©2025 SiTumbuh. All rights reserved
      </div>
    </footer>
  )
};