import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postPredict } from '../data/api';
import '/src/index.css';

export default function PredictPage() {
  const [form, setForm] = useState({
    child_name: "",
    gender: "",
    age: "",
    birth_weight: "",
    body_length: "",
    breastfeeding: ""
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const payload = {
      ...form,
      gender: form.gender === "laki-laki", 
      breastfeeding: form.breastfeeding === "eksklusif", 
      age: Number(form.age),
      birth_weight: Number(form.birth_weight),
      body_length: Number(form.body_length),
    };
    const result = await postPredict(payload);
    if (result.prediction === true) {
      navigate("/result/stunting");
    } else {
      navigate("/result/not-stunting");
    }
  } catch (err) {
    console.log("Form data:", form, err);
    alert("Gagal memproses prediksi", err);
  }
  setLoading(false);
};

  return (
    <div className="min-h-screen px-4 pt-32 pb-20 bg-white flex items-center justify-center md:pb-10">
      <div className="w-full max-w-2xl">
        {/* Judul */}
        <h1 className="text-[var(--color-blue)] text-xl md:text-3xl font-semibold text-center mb-2">
          Prediksi Risiko Stunting Anak
        </h1>
        <p className="text-sm sm:text-base text-center text-gray-500 mb-10 px-2 sm:px-6">
          Masukkan data anak Anda untuk mengetahui risiko stunting dan dapatkan saran tumbuh kembang yang sesuai. Data yang Anda masukkan akan membantu pemantauan pertumbuhan si kecil secara lebih akurat.
        </p>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>   
          {/* Nama Anak */}
          <div className="space-x-2">
            <label className="block mb-2 font-medium text-sm sm:text-base">Nama Anak</label>
            <input
              type="text"
              name="child_name"
              value={form.child_name}
              onChange={handleChange}
              placeholder="Masukan nama anak"
              className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          {/* Jenis Kelamin */}
          <div className="relative">
            <label className="block mb-2 font-medium text-sm sm:text-base">Jenis Kelamin</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200 pr-10"
              required
            >
              <option value="" disabled>Pilih jenis kelamin</option>
              <option value="laki-laki">Laki-laki</option>
              <option value="perempuan">Perempuan</option>
            </select>
          </div>

          {/* Umur */}
          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">Umur</label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              min="0"
              placeholder="0"
              className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          {/* Berat Lahir */}
          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">Berat Lahir (kg)</label>
            <input
              type="number"
              name="birth_weight"
              value={form.birth_weight}
              onChange={handleChange}
              min="0"
              step="0.01"
              placeholder="0,00"
              className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          {/* Tinggi Badan */}
          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">Tinggi Badan (cm)</label>
            <input
              type="number"
              name="body_length"
              value={form.body_length}
              onChange={handleChange}
              min="0"
              step="0.01"
              placeholder="0,00"
              className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          {/* Riwayat Pemberian ASI */}
          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">Riwayat Pemberian ASI</label>
            <select
              name="breastfeeding"
              value={form.breastfeeding}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            >
              <option value="" disabled>Pilih jawaban</option>
              <option value="eksklusif">Ya</option>
              <option value="parsial">Tidak</option>
            </select>
          </div>

          {/* Tombol Prediksi */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-sky-400 hover:bg-sky-500 text-white rounded shadow transition-all"
              disabled={loading}
            >
              {loading ? "Memproses..." : "Prediksi"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}