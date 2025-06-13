import { Link } from 'react-router-dom';
import '/src/index.css';
import children from '../assets/children.svg';
import arrowRight from '../assets/arrow-right.svg';
import momAndChild from '../assets/mom-child.svg';
import vision from '../assets/eye.png';
import mission from '../assets/target.png';
import childVaccine from '../assets/child-vaccine.png';
import childFun from '../assets/Child-fun.png';
import arrowUpLeft from '../assets/arrow-up-left.svg';
import person1 from '../assets/person-1.svg';
import star from '../assets/star-1.svg';

export default function HomePage() {
  return (
    <div className="pt-32 lg:pt-44 ">
      {/* Hero Section */}
      <section id="beranda" className="flex flex-col-reverse px-6 lg:px-24 lg:flex-row items-center justify-between gap-8">
        {/* Left Text Content */}
        <div className="max-w-xl text-center lg:text-left ">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-black mb-6">
            Pantau Pertumbuhan<br />
            Anak Anda<br />
            Dengan Mudah
          </h1>
          <p className="text-black mb-6 text-sm md:text-base">
            Aplikasi SiTumbuh membantu orang tua memantau tumbuh kembang anak, mendeteksi risiko stunting, dan mendapatkan edukasi kesehatan anak secara praktis.
          </p>
          <Link to="/predict" className="inline-flex items-center bg-black text-white px-5 py-2.5 rounded-md text-sm md:text-base hover:bg-gray-800 transition">
            Cek Pertumbuhan Si Kecil
            <img  src={arrowRight} className="ml-2 h-4 md:h-6" />
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="overflow-hidden">
            <img
              src={children}
              alt="Anak-anak bahagia"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang-kami" className="bg-white text-center px-6 mt-26 md:px-16 py-12">
        <h2 className="text-[var(--color-blue)] text-xl font-semibold mb-4 md:text-3xl">Tentang Kami</h2>
        <p className="max-w-2xl mx-auto text-[var(--color-darkgrey)] text-sm md:text-base mb-8">
          SiTumbuh adalah platform digital yang berfokus pada pemantauan pertumbuhan anak dan pencegahan stunting di Indonesia. Kami hadir untuk mendukung orang tua dan tenaga kesehatan dalam memberikan yang terbaik untuk generasi masa depan.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={momAndChild}
            alt="Ibu dan Anak"
            className="h-120 md:w-1/2"
          />
          <div className="md:w-1/2 text-left space-y-4">
            <p className="text-black text-sm md:text-base">
              Kami percaya setiap anak berhak tumbuh sehat dan optimal. Melalui fitur prediksi stunting, edukasi, dan konsultasi, kami ingin membantu orang tua mengambil keputusan terbaik untuk tumbuh kembang buah hati.
            </p>
            <p className="text-black text-sm md:text-base">
              Bersama SiTumbuh, pantau pertumbuhan anak, konsultasi dengan bidan, dan dapatkan informasi kesehatan terpercaya kapan saja.
            </p>
          </div>
        </div>
      </section>

      {/* Visi dan Misi */}
      <section id="visi-misi" className="bg-[var(--color-grey)] text-center p-10 rounded-5xl mt-8 2xl:px-60 md:px-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6  border-[var(--color-grey)] border-1 rounded-xl shadow-sm hover:shadow-xl">
            <div className="flex items-center gap-6 text-left">
              <img src={vision} alt="eye" className="h-12"/>
              <div>
                <h4 className="font-semibold text-sky-500 ">Visi Kami</h4>
                <p className="text-black text-sm md:text-base">
                  Menjadi platform utama pemantauan tumbuh kembang anak dan pencegahan stunting di Indonesia.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6  border-[var(--color-grey)] border-1 rounded-xl shadow-sm hover:shadow-xl">
            <div className="flex items-center gap-6 text-left">
              <img src={mission} alt="target" className="h-12"/>
              <div>
                <h4 className="font-semibold text-sky-500 ">Misi Kami</h4>
                <p className=" text-black text-sm md:text-base">
                  Memberikan edukasi, deteksi dini, dan akses layanan kesehatan anak secara digital untuk seluruh keluarga Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center mt-10 text-sm md:text-base 2xl:px-60">Bersama cegah stunting dan wujudkan generasi sehat, cerdas, dan berdaya saing untuk masa depan bangsa.</p>
        </div>
        <div className="grid grid-cols-3 text-center mt-10 2xl:px-60">
          <div>
            <p className="text-2xl font-bold text-[var(--color-blue)]">94%</p>
            <p className="text-sm">Orang tua merasa terbantu</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--color-blue)]">70M+</p>
            <p className="text-sm">Data pertumbuhan anak</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--color-blue)]">10K+</p>
            <p className="text-sm">Konsultasi dengan bidan</p>
          </div>
        </div>
      </section>

      {/* Artikel Kesehatan */}
      <section id="artikel-kesehatan" className="px-6 py-24 md:px-12 ">
        <div className="text-xl text-center mb-8 md:text-3xl">
          <h2 className="text-[var(--color-blue)] text-xl font-semibold mb-4 md:text-3xl">Artikel Kesehatan</h2>
          <p className="text-[var(--color-darkgrey)] text-sm md:text-base">Dapatkan informasi dan tips kesehatan anak, nutrisi, serta pencegahan stunting dari para ahli di sini.</p>
        </div>
        <div className="space-y-0">
          <div className="flex flex-col md:flex-row gap-6 items-center border-y-2 border-[var(--color-grey)] p-10 ">
            <img
              src={childVaccine}
              alt="childVaccine 1"
              className="w-full md:w-1/3 rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold mb-2">
                Pentingnya Imunisasi untuk Tumbuh Kembang Anak
              </h3>
              <p className="text-black mb-3 text-sm md:text-base">
                Imunisasi membantu melindungi anak dari berbagai penyakit berbahaya dan mendukung tumbuh kembang optimal.
              </p>

              <div>
                <button className=" bg-white inline-flex items-center text-black border px-4 py-2 rounded-full text-sm md:text-base hover:bg-[var(--color-grey)]">
                  Selengkapnya
                  <img  src={arrowUpLeft} className="ml-2 h-4 md:h-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center border-y-2 border-[var(--color-grey)] p-10 ">
            <img
              src={childFun}
              alt="childVaccine 2"
              className="w-full md:w-1/3 rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold mb-2">
                Nutrisi Seimbang untuk Anak Sehat
              </h3>
              <p className="text-black mb-3 text-sm md:text-base">
                Pastikan anak mendapatkan asupan gizi seimbang agar tumbuh kembangnya optimal dan terhindar dari stunting.
              </p>

              <div>
                <button className=" bg-white inline-flex items-center text-black border px-4 py-2 rounded-full text-sm md:text-base hover:bg-[var(--color-grey)]">
                  Selengkapnya
                  <img  src={arrowUpLeft} className="ml-2 h-4 md:h-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/article"
              className="inline-flex items-center bg-black text-white px-5 py-2.5 rounded-md text-sm md:text-base hover:bg-gray-800 transition"
            >
              Tampilkan lebih banyak artikel
              <img src={arrowRight} className="ml-2 h-4 md:h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Daftar Bidan */}
      <section id="daftar-bidan" className="px-6 md:px-12">
        <h2 className="text-[var(--color-blue)] text-xl font-semibold mb-4 text-center md:text-3xl">Daftar Bidan</h2>
        <p className="text-center text-[var(--color-darkgrey)] text-sm md:text-base">
          Temukan bidan terdekat dan konsultasikan pertumbuhan anak Anda dengan tenaga kesehatan profesional.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-[var(--color-grey)] border-2 shadow-md  rounded-xl p-10 hover:shadow-xl">
            <h4 className="font-semibold mb-2 text-base md:text-lg lg:text-xl">
              Konsultasi Tumbuh Kembang Anak
            </h4>
            <p className="text-black mb-3 text-xs md:text-sm lg:text-base">
              Dapatkan saran dan pemeriksaan tumbuh kembang anak langsung dari bidan berpengalaman.
            </p>
            <div>
              <button className="inline-flex items-center text-black border px-4 py-2 rounded-full text-sm md:text-base">
                Detail lokasi
                <img  src={arrowUpLeft} className="ml-2 h-4 md:h-6" />
              </button>
            </div>
          </div>
          <div className="bg-white border-[var(--color-grey)] border-2 shadow-md  rounded-xl p-10 hover:shadow-xl">
            <h4 className="font-semibold mb-2 text-base md:text-lg lg:text-xl">
              Konsultasi Kesehatan Ibu & Anak
            </h4>
            <p className="text-black mb-3 text-xs md:text-sm lg:text-base">
              Konsultasikan masalah kesehatan ibu dan anak Anda dengan bidan terpercaya di sekitar Anda.
            </p>
            <div>
              <button className="inline-flex items-center text-black border px-4 py-2 rounded-full text-sm md:text-base">
                Detail lokasi
                <img  src={arrowUpLeft} className="ml-2 h-4 md:h-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
              to="/daftar-bidan"
              className="inline-flex items-center bg-black text-white px-5 py-2.5 rounded-md text-sm md:text-base hover:bg-gray-800 transition"
            >
              Tampilkan lebih banyak bidan
              <img src={arrowRight} className="ml-2 h-4 md:h-6" />
            </Link>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="py-16 text-center px-4 md:px-16">
        <h2 className="text-[var(--color-blue)] text-xl font-semibold mb-4 text-center md:text-3xl">Testimoni</h2>
        <p className="text-[var(--color-darkgrey)] mb-10 text-sm md:text-base">
          Apa kata orang tua tentang SiTumbuh?
        </p>
        <div className="overflow-x-auto scrollbar-hide px-2 md:px-6 py-8">
          <div className="flex gap-4 md:gap-6 lg:gap-8 justify-start min-w-full">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="bg-white border-[var(--color-grey)] border-2 p-6 md:p-10 rounded-xl shadow-sm max-w-xs min-w-[280px] md:min-w-[400px] lg:min-w-[600px] flex-shrink-0 hover:shadow-xl"
              >
                <p className="text-sm text-black mb-4 text-left">
                  “Aplikasi ini sangat membantu saya memantau tumbuh kembang anak dan konsultasi dengan bidan jadi lebih mudah.”
                </p>
                <div className="flex flex-col gap-1 mb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={person1}
                      alt={`person1 ${i}`}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col w-full">
                      <div className="flex items-center justify-between w-full">
                        <span className="font-semibold">Sara Mann</span>
                        <span className="flex items-center gap-1">
                          {[...Array(5)].map((_, idx) => (
                            <img key={idx} src={star} alt="star" className="w-5 h-5" />
                          ))}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 text-left">Ibu rumah tangga</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
};