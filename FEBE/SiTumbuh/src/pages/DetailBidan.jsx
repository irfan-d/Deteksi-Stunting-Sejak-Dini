import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GraduationCap from "../assets/graduation-cap.svg";
import marker from "../assets/marker-2.svg";
import calendar from "../assets/calendar.svg";
import passport from "../assets/passport.svg";
import { getDetailBidan } from "../data/api";
import ReviewSection from "./ReviewSection";

export default function DetailBidan() {
  const { id } = useParams();
  const [bidan, setBidan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetailBidan(id)
      .then(setBidan)
      .catch(() => setBidan(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!bidan) return <div className="text-center py-10 text-red-500">Bidan tidak ditemukan.</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 pt-32 pb-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-[var(--color-blue)] mb-2">
        Detail Informasi Bidan
      </h2>
      <p className="text-center text-[var(--color-darkgrey)] mb-8">
        Informasi lengkap mengenai tenaga kesehatan yang tersedia.
      </p>

      <div className="bg-white rounded-3xl shadow-md border-2 border-[var(--color-grey)] p-6 md:flex gap-8">
        {/* Gambar */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={bidan.foto_url}
            alt={bidan.nama}
            className="rounded-2xl object-cover w-full h-auto max-w-xs"
          />
        </div>

        {/* Detail */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-blue)]">
            {bidan.nama}
          </h3>
          <p className="text-lg font-semibold">Rp {bidan.harga?.toLocaleString() || '-'}</p>

          <div className="flex items-center gap-1 text-[var(--color-yellow)]">
            {'★'.repeat(bidan.rating || 0)}{'☆'.repeat(5 - (bidan.rating || 0))}
          </div>

          <div className="flex gap-2 text-sm">
            <span className="border px-3 py-1 rounded-full text-[var(--color-darkgrey)]">Bidan</span>
          </div>

          <div className="text-sm">
            <div className="flex gap-4 items-start pt-4">
              <img src={GraduationCap} alt="toga" className="w-6" />
              <div>
                <p className="font-medium text-lg">Pendidikan</p>
                <p className="text-[var(--color-darkgrey)]">{bidan.pendidikan}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start pt-4">
              <img src={marker} alt="marker" className="w-6" />
              <div>
                <p className="font-medium text-lg">Tempat Praktik</p>
                <p className="text-[var(--color-darkgrey)]">{bidan.tempat_praktik}</p>
                {bidan.latitude && bidan.longitude && (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${bidan.latitude},${bidan.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-blue)] underline text-xs hover:text-blue-700"
                  >
                    Lihat di Google Maps
                  </a>
                )}
              </div>
            </div>

            <div className="flex gap-4 items-start pt-4">
              <img src={calendar} alt="calendar" className="w-6" />
              <div>
                <p className="font-medium text-lg">Jadwal Praktik</p>
                <p className="text-[var(--color-darkgrey)]">{bidan.jadwal_praktik}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start pt-4">
              <img src={passport} alt="passport" className="w-6" />
              <div>
                <p className="font-medium text-lg">Nomor STR</p>
                <p className="text-[var(--color-darkgrey)]">{bidan.no_str || "-"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <ReviewSection bidanId={bidan.id} />
    </div>
  );
}