import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChildDoctor from "../assets/child-doctor.svg";
import Search from "../assets/search.svg";
import ArrowRight from "../assets/arrow-right.svg";
import { getDaftarBidan } from "../data/api"; // Pastikan sudah ada fungsi modular getDaftarBidan

export default function DaftarBidan() {
    const [bidanList, setBidanList] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDaftarBidan()
            .then(setBidanList)
            .catch(() => setBidanList([]))
            .finally(() => setLoading(false));
    }, []);

    // Universal search: filter by name OR location (case-insensitive)
    const filteredBidan = bidanList.filter(bidan => {
        const q = search.toLowerCase();
        return (
            bidan.nama.toLowerCase().includes(q) ||
            (bidan.tempat_praktik || "").toLowerCase().includes(q)
        );
    });

    return (
        <div className="font-sans">
            {/* HERO SECTION */}
            <section className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden">
                <img
                    src={ChildDoctor}
                    alt="Bidan menggendong bayi"
                    className="absolute inset-0 w-full h-full object-cover z-0 rounded-b-3xl shadow-lg mt-22"
                    style={{ objectPosition: 'center top' }}
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="text-white max-w-xl text-center px-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight drop-shadow-lg">
                            Temukan Bidan dan Dokter Anak Terbaik untuk Si Kecil
                        </h1>
                        <p className="mb-6 text-lg md:text-xl drop-shadow">
                            Dapatkan layanan kesehatan anak dan ibu terbaik dari tenaga profesional terpercaya di sekitar Anda. Pilih bidan atau dokter anak yang sesuai dengan kebutuhan keluarga Anda.
                        </p>
                        <a
                            href="#daftar-bidan"
                            className="flex bg-black text-white gap-2 justify-center py-2 px-6 rounded-md hover:shadow-lg text-lg w-fit mx-auto"
                        >
                            Cari Bidan untuk Si Kecil
                            <img src={ArrowRight} alt="panah" />
                        </a>
                    </div>
                </div>
            </section>

            {/* DAFTAR DOKTER SECTION */}
            <section id="daftar-bidan" className="py-12 px-4 md:px-8 bg-white text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-blue)] mb-2">
                    Daftar Dokter Anak
                </h2>
                <p className="text-[var(--color-darkgrey)] mb-6">
                    Cari dan temukan bidan atau dokter anak berpengalaman yang siap membantu tumbuh kembang si kecil dengan sepenuh hati.
                </p>
                {/* Universal Search Bar */}
                <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Cari dokter atau lokasi..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full py-3 pl-5 pr-12 rounded-full border-2 border-[var(--color-grey)] shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <img src={Search} alt="cari" className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 opacity-60" />
                    </div>
                </div>
                {/* Doctor Cards Grid */}
                {loading ? (
                    <div className="text-center py-10">Loading...</div>
                ) : (
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {filteredBidan.map((bidan) => (
                            <div
                                key={bidan.id}
                                className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center"
                            >
                                <img
                                    src={bidan.foto_url}
                                    alt={bidan.nama}
                                    className="w-24 h-24 rounded-full object-cover mb-4"
                                />
                                <h3 className="font-semibold text-[var(--color-blue)]">{bidan.nama}</h3>
                                <p className="text-sm text-[var(--color-darkgrey)] mt-2 mb-1">{bidan.pendidikan}</p>
                                <p className="text-xs text-[var(--color-darkgrey)] mb-2">{bidan.tempat_praktik}</p>
                                <div className="flex items-center justify-center mb-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span key={i} className={i < bidan.rating ? 'text-[var(--color-yellow)]' : 'text-[var(--color-grey)]'}>★</span>
                                    ))}
                                </div>
                                <Link
                                    to={`/bidan/${bidan.id}`}
                                    className="bg-[var(--color-blue)] text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition inline-block text-center"
                                >
                                    Detail
                                </Link>
                            </div>
                        ))}
                        {filteredBidan.length === 0 && (
                            <div className="col-span-full text-center text-gray-400 py-10">Tidak ada dokter ditemukan</div>
                        )}
                    </div>
                )}
            </section>
        </div>
    );
}