import '/src/index.css';
import React from "react";

export default function Faq() {
    return (
        <div className="max-w-3xl mx-auto px-4 mt-20 sm:px-6 md:px-8 md:mt-32 py-10 md:py-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[var(--color-blue)] mb-8 leading-tight">Frequently Asked Questions</h1>
          <div className="space-y-4">
            <div className="border-2 border-[var(--color-grey)] rounded-xl bg-white shadow-md transition hover:shadow-md">
              <div className="px-4 sm:px-6 py-4">
                <span className="font-semibold text-base sm:text-lg text-black block mb-2">Apa itu SiTumbuh?</span>
                <span className="text-[var(--color-darkgrey)] text-sm sm:text-base">SiTumbuh adalah platform digital yang membantu orang tua memantau tumbuh kembang anak, mencari bidan/dokter anak, serta mendapatkan edukasi kesehatan terpercaya.</span>
              </div>
            </div>
            <div className="border-2 border-[var(--color-grey)] rounded-xl bg-white shadow-md transition hover:shadow-md">
              <div className="px-4 sm:px-6 py-4">
                <span className="font-semibold text-base sm:text-lg text-black block mb-2">Bagaimana cara mencari bidan atau dokter anak di SiTumbuh?</span>
                <span className="text-[var(--color-darkgrey)] text-sm sm:text-base">Anda dapat menggunakan fitur pencarian pada halaman Daftar Bidan untuk menemukan bidan atau dokter anak berdasarkan nama atau lokasi praktik.</span>
              </div>
            </div>
            <div className="border-2 border-[var(--color-grey)] rounded-xl bg-white shadow-md transition hover:shadow-md">
              <div className="px-4 sm:px-6 py-4">
                <span className="font-semibold text-base sm:text-lg text-black block mb-2">Apakah layanan SiTumbuh gratis?</span>
                <span className="text-[var(--color-darkgrey)] text-sm sm:text-base">Sebagian besar fitur SiTumbuh dapat diakses gratis. Namun, konsultasi dengan tenaga kesehatan dapat dikenakan biaya sesuai tarif masing-masing.</span>
              </div>
            </div>
            <div className="border-2 border-[var(--color-grey)] rounded-xl bg-white shadow-md transition hover:shadow-md">
              <div className="px-4 sm:px-6 py-4">
                <span className="font-semibold text-base sm:text-lg text-black block mb-2">Bagaimana cara menghubungi bidan atau dokter yang dipilih?</span>
                <span className="text-[var(--color-darkgrey)] text-sm sm:text-base">Setelah memilih bidan/dokter, Anda dapat melihat detail kontak dan jadwal praktik pada halaman detail, lalu menghubungi atau membuat janji sesuai informasi yang tersedia.</span>
              </div>
            </div>
            <div className="border-2 border-[var(--color-grey)] rounded-xl bg-white shadow-md transition hover:shadow-md">
              <div className="px-4 sm:px-6 py-4">
                <span className="font-semibold text-base sm:text-lg text-black block mb-2">Apakah data saya aman di SiTumbuh?</span>
                <span className="text-[var(--color-darkgrey)] text-sm sm:text-base">Kami menjaga kerahasiaan dan keamanan data Anda sesuai standar perlindungan data pribadi.</span>
              </div>
            </div>
          </div>
        </div>
    );
};