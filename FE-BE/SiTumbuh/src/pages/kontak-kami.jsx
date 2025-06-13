import React, { useState } from 'react';
import { useAuth } from '../utils/authContext';
import { postContactUs } from '../data/api'; // Pastikan fungsi ini sudah benar seperti jawaban sebelumnya

const ContactUs = () => {
  const { user, isLoggedIn } = useAuth();
  const [form, setForm] = useState({
    name: user?.full_name || '',
    email: user?.email || '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await postContactUs({
        name: form.name,
        email: form.email,
        message: form.message
      });
      setSubmitted(true);
    } catch (err) {
      alert("Gagal mengirim pesan: " + err.message);
    }
    setLoading(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="bg-white p-8 rounded-xl shadow text-center">
          <p className="text-lg mb-4">Silakan login terlebih dahulu untuk mengirim pesan ke tim kami.</p>
          <a href="/login" className="text-blue-600 underline">Login</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-2xl mx-auto px-4 py-10 md:py-32 text-[var(--color-black)] font-sans flex flex-col justify-center items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--color-blue)] text-center">Kontak Kami</h2>
      <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-10">
        {!submitted ? (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Nama</label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Pesan</label>
              <textarea
                id="message"
                rows="4"
                name="message"
                placeholder="Tulis pesan Anda..."
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--color-blue)] text-white font-semibold px-6 py-2 rounded-full hover:bg-opacity-90 transition"
              disabled={loading}
            >
              {loading ? "Mengirim..." : "Kirim"}
            </button>
          </form>
        ) : (
          <div className="mt-8 p-6 bg-green-100 rounded-xl text-center shadow-md">
            <div className="font-semibold text-lg mb-2 text-green-900">
              Pesan yang Anda buat telah dikirim.<br />Terima kasih telah menghubungi kami!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;