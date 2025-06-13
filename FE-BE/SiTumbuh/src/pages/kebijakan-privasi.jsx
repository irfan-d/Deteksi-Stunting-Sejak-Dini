import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[var(--color-white)] text-[var(--color-black)] flex justify-center items-start pt-32 px-4">
      <div className="max-w-2xl w-full py-10 mx-auto">
        {/* Header */}
        <div className="flex items-start space-x-4 mb-10">
          <div className="border border-[var(--color-blue)] rounded-[var(--radius-5xl)] p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[var(--color-blue)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-semibold">Kebijakan Privasi</h1>
        </div>

        {/* Konten */}
        <div className="space-y-8 text-sm text-[var(--color-darkgrey)]">
          <section>
            <h2 className="text-2xl font-bold text-[var(--color-black)] mb-1">Pendahuluan</h2>
            <p>
              Selamat datang di SiTumbuh. Kami berkomitmen menjaga privasi dan keamanan data Anda. Halaman ini menjelaskan
              bagaimana kami mengelola dan melindungi informasi pribadi pengguna aplikasi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--color-black)] mb-1">Data yang kami kumpulkan</h2>
            <p>
              Kami mengumpulkan data seperti nama, email, dan data pertumbuhan anak untuk keperluan pemantauan, edukasi,
              serta peningkatan layanan. Data tidak akan dibagikan ke pihak ketiga tanpa persetujuan Anda.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--color-black)] mb-1">Hak Pengguna</h2>
            <p>
              Anda berhak mengakses, memperbarui, dan menghapus data pribadi Anda kapan saja. Hubungi kami jika ingin
              mengetahui atau mengubah data yang tersimpan di aplikasi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--color-black)] mb-1">Kontak</h2>
            <p>
              Jika Anda memiliki pertanyaan terkait privasi atau ingin mengajukan permintaan khusus, silakan hubungi tim
              SiTumbuh melalui email: situmbuh@gmail.com.
            </p>
          </section>
        </div>

        {/* Tombol */}
        <div className="mt-10 flex justify-end">
          <button className="bg-[var(--color-black)] text-[var(--color-white)] px-6 py-2 rounded-md text-sm hover:bg-opacity-80 flex items-center gap-2 transition">
            saya mengerti
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
