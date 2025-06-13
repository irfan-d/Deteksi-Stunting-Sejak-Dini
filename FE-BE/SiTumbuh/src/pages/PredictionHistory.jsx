import '/src/index.css';
import React, { useState, useEffect } from "react";
import { getPredictionHistory } from "../data/api";

export default function PredictionHistory() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPredictionHistory()
      .then(setData)
      .finally(()=>setLoading(false))
  }, []);

  if (loading) return <div>Loading...</div>;

  // Pencarian berdasarkan nama anak
  const filteredData = data.filter(item =>
    item.child_name?.toLowerCase().includes(search.toLowerCase())
  );

  // Helper untuk format tanggal
  function formatDate(dateStr) {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
  }

  return (
    <div className="min-h-screen mt-32 mb-24 px-2 md:px-16">
      <h2 className="text-center text-[var(--color-blue)] text-2xl font-semibold mb-10">Riwayat Periksa</h2>
      <p className="text-sm sm:text-base text-center text-[var(--color-darkgrey)] mb-10 px-2 sm:px-6 md:px-16 lg:px-100 ">
        Berikut adalah riwayat pemeriksaan pertumbuhan anak Anda. Pantau hasil prediksi dan perkembangan si kecil secara berkala untuk memastikan tumbuh kembangnya optimal.
      </p>
      <div className="flex justify-center mb-4 px-2 md:justify-end">
        <input
          type="text"
          placeholder="Cari nama..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-[var(--color-darkgrey)] rounded-md px-3 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
        />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full table-auto border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="text-sm sm:text-base bg-[var(--color-blue)] text-white text-left">
              <th className="p-3">Nama</th>
              <th className="p-3">Tanggal</th>
              <th className="p-3">Umur (bulan)</th>
              <th className="p-3">Tinggi badan (cm)</th>
              <th className="p-3 min-w-[120px] sm:min-w-[200px]">Hasil Prediksi</th>
            </tr>
          </thead>
          <tbody className="text-black bg-[var(--color-grey)]">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-sm sm:text-base text-center py-6 text-[var(--color-darkgrey)]">Tidak ada data ditemukan</td>
              </tr>
            ) : (
              filteredData.map((item, idx) => (
                <tr key={item.id_prediction || idx}>
                  <td className="text-sm sm:text-base p-3 min-w-[180px] sm:min-w-full">{item.child_name}</td>
                  <td className="text-sm sm:text-base p-3 min-w-[100px] sm:min-w-[120px]">{formatDate(item.check_date)}</td>
                  <td className="text-sm sm:text-base p-3 min-w-[100px] sm:min-w-[200px] lg:min-w-[200px]">{item.age}</td>
                  <td className="text-sm sm:text-base p-3 min-w-[100px] sm:min-w-[180px]">{item.body_length}</td>
                  <td className="text-sm sm:text-base p-3 min-w-[160px] sm:min-w-[180px]">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-xs font-medium sm:text-base ${
                        item.result === true ? "bg-[var(--color-red)]" : "bg-[var(--color-green)]"
                      }`}
                    >
                      {item.result === true ? "Stunting" : "Tidak Stunting"}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}